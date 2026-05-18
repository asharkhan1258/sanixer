"use client";

import { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePathname, useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import dynamic from "next/dynamic";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const DynamicRecaptcha = dynamic(() => import("./RecaptchaComponent"), {
  ssr: false,
});

// Define the validation schema using Yup
const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  contact_number: Yup.string()
    .matches(/^[\d+\-\s]{7,20}$/, "Enter a valid contact number.")
    .required("Contact number is required"),
  email: Yup.string()
    .email("Email must be a valid email")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address."
    )
    .required("Email is required"),
  looking: Yup.string().required("Please specify what you are looking for"),
  message: Yup.string(),
});

const initialValues = {
  name: "",
  contact_number: "",
  looking: "",
  email: "",
  message: "",
};

export default function HomePageForm() {
  const router = useRouter();
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [errorRecaptcha, setErrorRecaptcha] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [isRecaptchaVisible, setIsRecaptchaVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [bgColor, setBgColor] = useState("bg-[#1D92FB]");
  const [messageSuccess, setMessageSuccess] = useState("w-[0%]");
  const [showJobModal, setShowJobModal] = useState(false);

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    resetForm,
    setFieldValue, // ✅ Add this
    setFieldTouched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: (values, action) => {
      //action.resetForm();
    },
  });

  const checkForJobKeywords = (text: string): boolean => {
    if (!text) return false;
    const jobKeywords = [
      "job",
      "jobs",
      "career",
      "careers",
      "internship",
      "intern",
      "employment",
      "hire",
      "hiring",
      "position",
    ];
    return jobKeywords.some((keyword) =>
      text.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const onRecaptchaChange = (value: any) => {
    if (!value) {
      setErrorRecaptcha("Please verify the above checkbox");
    } else {
      setRecaptchaValue(value);
      setErrorRecaptcha("");
    }
  };

  const onRecaptchaExpired = () => {
    setRecaptchaValue("");
    setErrorRecaptcha("Please verify again the above checkbox.");
  };

  const currentPath = usePathname();
  const pageName = currentPath
    ? currentPath.split("/").pop() || "home"
    : "home";

  const handleCombinedSubmit = async (event: any): Promise<void> => {
    event.preventDefault();
    handleSubmit(event);
    setMessage("");
    setBgColor("bg-[#1D92FB]");

    // Check for job/internship keywords
    const isJobRelated =
      checkForJobKeywords(values.looking) ||
      checkForJobKeywords(values.message);

    if (isJobRelated) {
      setShowJobModal(true);
      setUploading(false);
      return;
    }

    setUploading(true);

    if (!recaptchaValue) {
      setErrorRecaptcha("Please verify the above checkbox");
      setUploading(false);
      return;
    }

    if (
      !values.name.length ||
      !values.email.length ||
      !values.contact_number.length ||
      !values.looking.length
    ) {
      setUploading(false);
      return;
    }

    if (
      errors.name ||
      errors.contact_number ||
      errors.email ||
      errors.looking
    ) {
      setUploading(false);
      return;
    }

    const actuallPageName =
      pageName === ""
        ? "Home"
        : pageName
            ?.split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    if (!Yup.string().email().isValidSync(values.email)) {
      setBgColor("bg-red-500");
      setMessage("Please enter a valid email address.");
      setMessageSuccess("w-[100%]");
      setUploading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("number", values.contact_number);
      formData.append("looking", values.looking);
      formData.append("message", values.message);
      formData.append("pagename", actuallPageName || "Home");
      setUploading(true);
      setMessage("Submitting form...");
      setMessageSuccess("w-[10%]");

      const emailResponse = await fetch("/api/projectdiscussionform", {
        method: "POST",
        body: formData,
      });

      if (!emailResponse.ok) {
        throw new Error("Failed to send email.");
      }

      const sanityResponse = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          contact_number: values.contact_number,
          looking: values.looking,
          message: values.message,
          recaptcha_value: recaptchaValue,
        }),
      });

      const data = await sanityResponse.json();

      if (sanityResponse.ok) {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "formSubmission",
          form: "contactForm",
        });

        // Open meeting page in a new tab for real clients
        window.open("https://calendly.com/adnanghaffar", "_blank");

        resetForm();
        recaptchaRef?.current?.reset();
        setRecaptchaValue("");
        setErrorRecaptcha("");
        setMessage("Form submitted successfully!");
        setMessageSuccess("w-[100%]");
      } else {
        setMessage("Message not submitted!");
        setMessageSuccess("w-[100%]");
        setBgColor("bg-red-500");
      }
    } catch (error) {
      setBgColor("bg-red-500");
      setMessage("Message not submitted!");
      setMessageSuccess("w-[100%]");
      console.error("Error:", error);
    } finally {
      setUploading(false);
      setTimeout(() => {
        setMessage("");
      }, 8000);
    }
  };

  useEffect(() => {
    const formElement = document.getElementById("contact-box");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRecaptchaVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (formElement) {
      observer.observe(formElement);
    }

    return () => {
      if (formElement) {
        observer.unobserve(formElement);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl border border-gray-200 overflow-hidden"
      id="contact-box"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F26522] to-[#ff8c42]"></div>

      {/* Decorative background elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-[#F26522]/5 rounded-full"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#F26522]/10 rounded-full"></div>

      <div className="relative z-10 px-8 pt-8 pb-10">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-block mb-3">
              <span className="px-3 py-1 bg-[#F26522]/10 text-[#F26522] text-xs font-semibold rounded-full uppercase tracking-wide">
                Contact Us
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-800">
              Looking for Expert Advice?
            </h3>
            <p className="text-base font-medium text-gray-600 leading-relaxed">
              Send us a message — our team is ready to assist you anytime, day
              or night.
            </p>

            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#F26522] to-transparent mx-auto mt-4"></div>
          </div>

          <form onSubmit={handleCombinedSubmit}>
            {/* Name Field */}
            <div className="mb-6">
              <input
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm text-black text-sm placeholder-gray-500 focus:border-[#F26522] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 transition-all duration-300"
                placeholder="Your Full Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="form-error text-red-500 text-sm mt-2 ml-1">
                  {errors.name}
                </p>
              ) : null}
            </div>

            {/* Phone Field */}
            <div className="mb-6">
              <PhoneInput
                country={"us"}
                value={values.contact_number}
                onChange={(value) => setFieldValue("contact_number", value)}
                onBlur={() => setFieldTouched("contact_number", true)}
                inputClass="!w-full !border-2 !border-gray-200 !px-4 !py-4 !rounded-xl !shadow-sm !text-black !text-sm !placeholder-gray-500 focus:!border-[#F26522] focus:!ring-2 focus:!ring-[#F26522]/20 !transition-all !duration-300"
                containerClass="!w-full"
                buttonClass="!bg-white !border-gray-200 !rounded-l-xl hover:!bg-gray-50 !transition-colors !duration-300"
                specialLabel=""
                placeholder="Enter your phone number"
              />
              {errors.contact_number && touched.contact_number ? (
                <p className="form-error text-red-500 text-sm mt-2 ml-1">
                  {errors.contact_number}
                </p>
              ) : null}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <input
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm text-black text-sm placeholder-gray-500 focus:border-[#F26522] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 transition-all duration-300"
                placeholder="Your Email Address"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error text-red-500 text-sm mt-2 ml-1">
                  {errors.email}
                </p>
              ) : null}
            </div>

            {/* Looking For Field */}
            <div className="mb-6">
              <input
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm text-black text-sm placeholder-gray-500 focus:border-[#F26522] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 transition-all duration-300"
                placeholder="What are you looking for?"
                name="looking"
                value={values.looking}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.looking && touched.looking ? (
                <p className="form-error text-red-500 text-sm mt-2 ml-1">
                  {errors.looking}
                </p>
              ) : null}
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <textarea
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm text-black text-sm placeholder-gray-500 resize-none break-words focus:border-[#F26522] focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 transition-all duration-300"
                placeholder="Your Message (Optional)"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
              />
            </div>

            {/* reCAPTCHA */}
            {isRecaptchaVisible && (
              <div className="mb-6 flex justify-center">
                <DynamicRecaptcha
                  recaptchaRef={recaptchaRef}
                  onChange={onRecaptchaChange}
                  onExpired={onRecaptchaExpired}
                />
              </div>
            )}
            {errorRecaptcha && (
              <p className="form-error text-red-500 text-sm mb-4 text-center">
                {errorRecaptcha}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={uploading}
              className={`group relative w-full bg-[#F26522] text-white font-semibold text-lg py-4 px-6 rounded-xl shadow-lg hover:bg-[#ff8c42] hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ${
                uploading ? "cursor-not-allowed opacity-70" : "cursor-pointer"
              }`}
            >
              {uploading ? (
                <div className="flex items-center justify-center">
                  <span className="loader mr-2"></span>
                  Processing...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <span>Submit Your Request</span>
                  <div className="ml-2 bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2 12l20-10-10 10 10 10-20-10z" />
                    </svg>
                  </div>
                </div>
              )}
            </button>

            {/* Success/Error Message */}
            {message && (
              <div
                className={`mt-4 p-3 rounded-xl text-center text-white font-medium ${bgColor} transition-all duration-300`}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* // Replace your current modal implementation with this: */}
      {showJobModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Background overlay */}
          <div
            className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowJobModal(false)}
          />

          {/* Modal container */}
          <div className="fixed inset-0 z-[9999] overflow-y-auto flex items-center justify-center p-4 text-center">
            {/* Modal content */}
            <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl transition-all">
              <button
                onClick={() => setShowJobModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="text-center space-y-4">
                <h3 className="text-2xl font-extrabold text-gray-800">
                  🚀 Looking for Career Opportunities?
                </h3>
                <p className="text-gray-600 text-xl">
                  We noticed you might be interested in job or internship
                  opportunities. We&apos;d love to have you on our team! Visit
                  our Careers page to submit your resume and explore openings.
                </p>

                <div className="mt-6 flex justify-center gap-4">
                  <button
                    onClick={() => {
                      router.push("/career");
                      setShowJobModal(false);
                    }}
                    className="px-5 py-2.5 bg-[#1d92fb] text-white font-semibold text-lg rounded-lg shadow-md hover:from-blue-600 transition-transform transform hover:scale-105"
                  >
                    Go to Careers Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
