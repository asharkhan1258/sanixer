"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function FooterContainer() {
  const [showAddress, setAddress] = useState(true);
  const handleClick = () => setAddress(!showAddress);
  const currentPath = usePathname();
  useEffect(() => setAddress(true), [currentPath]);

  const socialIcons = [
    {
      src: "/facebook-icon.svg",
      alt: "facebook",
      link: "https://www.facebook.com/",
    },
    {
      src: "/instagram-icon.svg",
      alt: "Instagram",
      link: "https://www.instagram.com/",
    },
    { src: "/twitter-new.svg", alt: "twitter", link: "https://twitter.com/" },
    {
      src: "/linkedin-icon.svg",
      alt: "Linkedin",
      link: "https://www.linkedin.com/company/",
    },
    { src: "/youtube.png", alt: "Youtube", link: "https://www.youtube.com/" },
  ];

  const services = [
    {
      name: "Custom Software Development",
      url: "/custom-software-development-services",
    },
    { name: "Mobile App Development", url: "/mobile-app-development-services" },
    { name: "ML Service", url: "/ml-services" },
    { name: "Ai Service", url: "/ai-software-development-services" },
    { name: "Web Scraping and Data", url: "/web-scraping" },
    { name: "Robotic Process Automation", url: "/rpa-services" },
    { name: "DevOps Service", url: "/ai-devops" },
    { name: "Business Intelligence", url: "/business-intelligent-service" },
    { name: "UI UX Designs", url: "/ui-ux-design-services" },
    { name: "Data Analytics", url: "/data-analytics" },
    { name: "Zoho Development", url: "/zoho-services-ai-automation" },
    { name: "HubSpot CRM Services", url: "/hubspot-crm-integration-services" },
    {
      name: "AI Business Automation",
      url: "/ai-business-automation-solutions",
    },
    { name: "Go-Flow Automation ", url: "/go-flow-ecommerce-automation" },
  ];
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          background: "#F26522",
          backgroundImage:
            "linear-gradient(356deg, #0b0a0a 0%, #332822 45%, #000000 100%)",
        }}
      ></div>
      <div className="relative flex flex-col items-center py-5 w-full pt-10">
        <div className="w-full max-w-[1582px] lg:px-10 px-5 grid xl:grid-cols-6 gap-5">
          <div className="flex flex-col xl:col-span-2 md:col-span-2 ">
            <div className="grid xl:grid-cols-1 md:grid-cols-2 gap-6 text-lg font-light text-white mt-5">
              <div>
                <div>
                  <h1 className="w-60 h-12 text-[4rem] font-medium">
                    Sanixer
                  </h1>
                  {/* <Image
                    src="/footer-logo.svg"
                    alt="logo"
                    width={250}
                    height={50}
                    priority
                  /> */}
                </div>
                <p className="mt-5 max-w-sm">
                  Let&rsquo;s embark on a journey of innovation and excellence
                  together.
                </p>
              </div>
              <div className="mt-7 flex gap-3">
                {socialIcons.map((icon, i) => (
                  <Link
                    key={i}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={40}
                      height={40}
                      className="rounded-3xl object-cover"
                    />
                  </Link>
                ))}
              </div>
              {/* <div className="flex gap-2 text-sm">
                <Link href="/privacypolicy" className="hover:underline">Privacy Policy</Link>
                <div className="w-1 h-1 bg-white rounded-full" />
                <Link href="/termsandconditions" className="hover:underline">Terms and Conditions</Link>
              </div> */}
            </div>
          </div>
          {/* First Column */}
          {/* <div className="flex flex-col">
            <div className="text-white flex flex-col items-start text-xl">
              <div className="text-2xl font-medium">Solutions</div>
              <div className="mt-6 text-base font-light w-full flex flex-col space-y-[20px]">
                {services.slice(0, 7).map((service, idx) => (
                  <Link
                    key={`col1-${idx}`}
                    href={`/services${service.url}`}
                    className="hover:underline text-white"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div> */}
          {/* Second Column */}
          {/* <div className="flex flex-col">
            <div className="text-white flex flex-col items-start text-xl">
              <div className="md:mt-14 text-base font-light w-full flex flex-col space-y-[20px]">
                {services.slice(7, 14).map((service, idx) => (
                  <Link
                    key={`col2-${idx}`}
                    href={`/services${service.url}`}
                    className="hover:underline text-white"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div> */}
          <div className="flex flex-col">
            <div className="text-white flex flex-col items-start text-xl">
              <div className="text-2xl font-medium">About Us</div>
              <div className="mt-6 text-base font-light flex flex-col gap-5">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
                <Link href="/technologies" className="hover:underline">
                  Technologies
                </Link>
                <Link href="/career" className="hover:underline">
                  Career
                </Link>
                {/* <Link href="/lifeatca" className="hover:underline">Life at CA</Link> */}
                {/* <Link href="/partnership-program" className="hover:underline">Partner with Us</Link> */}
                <Link
                  href="mailto:info@sanixer.com"
                  className="hover:underline"
                >
                  info@sanixer.com
                </Link>
                {/* <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Sitemap</Link> */}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-white flex flex-col items-start text-xl">
              <div className="text-2xl font-medium">Contact Us</div>
              <div className="mt-6 text-base font-light space-y-5">
                {/* <div className="flex items-center gap-3">
                  <Image src="/USA_Flag.png" alt="USA Flag" width={20} height={20} />
                  <a href="tel:+18505584691" className="hover:underline">850.558.4691</a>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/uk-flag.png" alt="UK Flag" width={21} height={20} className="rounded-md" />
                  <a href="tel:+44-(20)-39972588" className="hover:underline">+44-(20)-39972588</a>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/mail.png" alt="Mail Icon" width={20} height={20} />
                  <a href="#" className="hover:underline">info@Sanixer</a>
                </div>
                <div className="flex items-start gap-2">
                  <Image src="/USA_Flag.png" alt="USA Flag" width={20} height={20} />
                  <span>Office 254, 1755 Park St Suite 200, Naperville, IL 60563, United States</span>
                </div>
                <div className="flex items-start gap-2">
                  <Image src="/Canada-Flag.png" alt="Canada Flag" width={20} height={20} />
                  <span>201 N AZALEA LANE, Orleans, Ontario CA K4A4R5</span>
                </div> */}
                {/* {showAddress ? (
                  <span onClick={handleClick} className="cursor-pointer font-semibold ml-6">See more...</span>
                ) : ( */}
                <div className="flex items-start gap-2">
                  {/* <Image
                    src="/Pakistan-Flag.png"
                    alt="Pakistan Flag"
                    width={20}
                    height={20}
                  /> */}
                  <span>D.H.A, Karachi, Pakistan</span>
                  
                </div>
                <br/>
                <span>Business Consultant : <a href="tel:+923005579780"><br/> 0300-5579780</a></span>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-7 w-full bg-white min-h-[1px]" /> */}
        <div className="mt-5 text-md font-light text-center text-white">
        © 2026 Sanixer. All rights reserved.
        </div>
      </div>
    </div>
  );
}
