import Image from "next/image";
import ScrollAnimation from "../components/ScrollAnimation";
import servicesData from "../../data/ServicesData.json";
import { FaLightbulb, FaUsers, FaCogs, FaRocket } from "react-icons/fa";
import PricingSection from "../components/Pricing";
import PortfolioPage from "../components/Portfolio";


export const metadata = {
  title: "Software Development Company in the USA | Sanixer",
  description:
    "Sanixer is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
  keywords: [
    "Sanixer",
    "software development company",
    "software development services",
  ],
  alternates: {
    canonical: "https://Sanixer/services",
  },
};

const Services = async () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <img
          loading="lazy"
          className="absolute top-0 left-0 object-cover inset-0 size-full"
          src="/services-back.jpg"
          alt="Services"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollAnimation className="text-center">
            <div className="lg:mb-16 mb-10 flex flex-col items-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FFFFFF] lg:mb-6 mb-3 leading-tight text-center flex items-center gap-3">
                Our
                <span className="block text-[#F26522] relative mt-2">
                  Services
                </span>
              </h1>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl lg:text-2xl text-[#FFFFFF] leading-relaxed font-light text-center">
                  <span className="text-[#F26522] font-semibold">
                    Sanixer
                  </span>{" "}
                  delivers innovative software solutions, intelligent
                  automation, and comprehensive digital transformation services
                  that empower your business to excel in today`s competitive
                  landscape.
                </p>
              </div>
            </div>

            {/* Service Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:mt-20 mt-4">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F26522] to-[#F26522]/80 rounded-2xl transform transition-all duration-300 opacity-10"></div>
                <div className="relative p-8 rounded-2xl border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 backdrop-blur-sm transition-all duration-300">
                  <div className="w-16 h-16 bg-[#F26522] rounded-xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#FFFFFF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">
                    Development
                  </h3>
                  <p className="text-[#FFFFFF]/80 leading-relaxed">
                    Custom software solutions built with cutting-edge
                    technologies and modern frameworks
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F26522] to-[#F26522]/80 rounded-2xl transform transition-all duration-300 opacity-10"></div>
                <div className="relative p-8 rounded-2xl border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 backdrop-blur-sm transition-all duration-300">
                  <div className="w-16 h-16 bg-[#F26522] rounded-xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#FFFFFF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">
                    Testing
                  </h3>
                  <p className="text-[#FFFFFF]/80 leading-relaxed">
                    Comprehensive quality assurance and automated testing for
                    reliable performance
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F26522] to-[#F26522]/80 rounded-2xl transform  transition-all duration-300 opacity-10"></div>
                <div className="relative p-8 h-full rounded-2xl border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 backdrop-blur-sm transition-all duration-300">
                  <div className="w-16 h-16 bg-[#F26522] rounded-xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#FFFFFF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">
                    Automation
                  </h3>
                  <p className="text-[#FFFFFF]/80 leading-relaxed">
                    Intelligent process automation solutions for enhanced
                    operational efficiency
                  </p>
                </div>
              </div>

                <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F26522] to-[#F26522]/80 rounded-2xl transform  transition-all duration-300 opacity-10"></div>
                <div className="relative p-8 h-full rounded-2xl border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 backdrop-blur-sm transition-all duration-300">
                  <div className="w-16 h-16 bg-[#F26522] rounded-xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#FFFFFF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">
                    Logo design
                  </h3>
                  <p className="text-[#FFFFFF]/80 leading-relaxed">
                    Professional logo designs tailored to match your business identity and goals.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <ScrollAnimation>
        <PricingSection/>
      </ScrollAnimation>

      <ScrollAnimation>
        <PortfolioPage/>
      </ScrollAnimation>

      {/* Digital Partner Section */}
      <ScrollAnimation>
        <section className="relative w-full py-20 lg:py-32 bg-[#FFFFFF] overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center lg:mb-20 mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000000] leading-tight lg:mb-8 mb-3">
                Your Strategic Partner For
                <span className="block text-[#F26522] relative lg:mt-2">
                  Digital Excellence
                  <svg
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-4"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M10 6C50 2, 150 2, 190 6C150 10, 50 10, 10 6Z"
                      fill="#F26522"
                      opacity="0.3"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            <div className="text-center space-y-8 max-w-5xl mx-auto">
              <p className="text-xl lg:text-2xl text-[#000000] leading-relaxed font-medium">
                As a{" "}
                <span className="text-[#F26522] font-bold">
                  leading technology innovator
                </span>
                , we deliver transformative digital solutions that revolutionize
                businesses and drive sustainable growth across diverse
                industries.
              </p>

              <p className="text-lg text-[#000000]/70 leading-relaxed max-w-4xl mx-auto">
                Our multidisciplinary team combines deep technical expertise
                with strategic business insights to create bespoke solutions in
                web development, cloud architecture, mobile applications,
                cybersecurity, and emerging technologies that position your
                business for long-term success.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Trust & Success Section */}
      <ScrollAnimation>
        <section className="relative w-full py-4 lg:py-32 bg-gradient-to-br from-[#FFFFFF] to-gray-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-32 right-1/4 w-48 h-48 bg-[#F26522] rounded-full opacity-5 blur-2xl animate-pulse"></div>
            <div className="absolute top-1/4 left-16 w-20 h-20 border-2 border-[#F26522] opacity-15 rotate-12"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] leading-tight">
                  Your Trusted Partner For
                  <span className="block text-[#F26522] lg:mt-4 mt-2 relative">
                    Success & Growth
                    <svg
                      className="absolute -bottom-4 left-0 w-80 h-4"
                      viewBox="0 0 200 12"
                      fill="none"
                    >
                      <path
                        d="M0 6C40 2, 160 2, 200 6C160 10, 40 10, 0 6Z"
                        fill="#F26522"
                        opacity="0.3"
                      />
                    </svg>
                  </span>
                </h2>

                <div className="space-y-6">
                  <p className="text-xl lg:text-2xl text-[#000000] leading-relaxed">
                    <span className="text-[#F26522] font-bold">Sanixer</span>{" "}
                    maintains a global presence and takes pride in delivering
                    innovative, transformative solutions that drive meaningful
                    business growth and digital evolution.
                  </p>

                  <p className="text-lg text-[#000000]/70 leading-relaxed">
                    We adopt a meticulous, client-centric approach to ensure
                    exceptional service delivery and comprehensive support. Our
                    dedicated team of industry experts is committed to your
                    success, providing tailored solutions that perfectly align
                    with your business objectives and accelerate sustainable
                    growth.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative">
                  <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
                    <Image
                      src="/success-image.png"
                      alt="Trusted Partner Success"
                      width={600}
                      height={600}
                      loading="lazy"
                      className="w-full max-w-[600px] mx-auto drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Technology Expertise Section */}
      <ScrollAnimation>
        <section className="relative w-full py-20 lg:py-32 bg-[#000000] overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight mb-6">
                Cutting-Edge{" "}
                <span className="text-[#F26522]">Technologies</span>
              </h2>
              <p className="text-xl text-[#FFFFFF]/80 max-w-4xl mx-auto leading-relaxed">
                We leverage the latest technologies and frameworks to build
                scalable, secure, and high-performance solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "React", icon: "⚛️" },
                { name: "Node.js", icon: "🟢" },
                { name: "Python", icon: "🐍" },
                { name: "AWS", icon: "☁️" },
                { name: "Docker", icon: "🐳" },
                { name: "MongoDB", icon: "🍃" },
                { name: "Next.js", icon: "▲" },
                { name: "GraphQL", icon: "🔗" },
                { name: "TypeScript", icon: "📘" },
                { name: "Kubernetes", icon: "☸️" },
                { name: "Redis", icon: "🔴" },
                { name: "PostgreSQL", icon: "🐘" },
              ].map((tech, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F26522] to-[#F26522]/60 rounded-xl transform group-hover:scale-110 transition-all duration-300 opacity-10 group-hover:opacity-20"></div>
                  <div className="relative bg-[#FFFFFF]/5 backdrop-blur-sm border border-[#FFFFFF]/10 rounded-xl p-6 text-center group-hover:bg-[#FFFFFF]/10 transition-all duration-300">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h3 className="text-[#FFFFFF] font-semibold text-sm">
                      {tech.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Growth Cards Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-[#FFFFFF] py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-1/3 w-72 h-72 bg-[#F26522] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-[#F26522] opacity-5 blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] mb-6">
                Why Choose <span className="text-[#F26522]">Sanixer</span>
              </h2>
              <p className="text-lg text-[#000000]/70 max-w-3xl mx-auto">
                Discover what sets us apart in delivering exceptional technology
                solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {servicesData.growthCards.map((card, index) => {
                // Icon mapping
                const iconMap = {
                  FaLightbulb: FaLightbulb,
                  FaUsers: FaUsers,
                  FaCogs: FaCogs,
                  FaRocket: FaRocket,
                };

                const IconComponent = iconMap[card.icon];

                return (
                  <div key={card.id} className="group relative">
                    <div className="relative bg-[#FFFFFF] rounded-2xl p-6 shadow-lg transition-all duration-300 border border-gray-100">
                      <div className="absolute -top-6 right-6 z-10">
                        <div className="w-16 h-16 bg-[#F26522] rounded-full flex items-center justify-center shadow-lg">
                          {IconComponent && (
                            <IconComponent className="w-8 h-8 text-[#FFFFFF]" />
                          )}
                        </div>
                      </div>

                      <div className="pt-6">
                        <h3 className="text-xl font-bold text-[#000000] mb-4 leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-sm text-[#000000]/70 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="relative bg-gradient-to-br from-[#FFFFFF] to-gray-50 py-20 lg:py-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000000] leading-tight mb-6">
                Our Proven{" "}
                <span className="text-[#F26522]">Success Process</span>
              </h2>
              <p className="text-xl text-[#000000]/70 max-w-4xl mx-auto leading-relaxed">
                A systematic approach that ensures project success and exceeds
                client expectations
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {servicesData.processSteps.map((step, index) => (
                <div key={step.id} className="group relative">
                  <div className="relative bg-[#FFFFFF] rounded-2xl p-6 h-full shadow-lg border border-gray-100 lg:min-h-[280px] min-h-[200px] flex flex-col">
                    <div className="absolute -top-4 right-4 z-10">
                      <div className="w-12 h-12 bg-[#F26522] text-[#FFFFFF] rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                        {step.stepNumber}
                      </div>
                    </div>

                    <div className="pt-6 lg:flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-[#000000] mb-4 leading-tight lg:min-h-[3rem] min-h-[1.5rem]">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#000000]/70 leading-relaxed flex-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < servicesData.processSteps.length - 1 && (
                    <div className="hidden xl:block absolute top-6 -right-4 w-8 h-0.5 bg-[#F26522]/20 z-0"></div>
                  )}
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Services;
