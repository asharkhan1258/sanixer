import ScrollAnimation from "../components/ScrollAnimation";
import technologiesData from "../../data/TechnologiesData.json";
import Image from "next/image";
import {
  SiGoogleanalytics,
  SiHotjar,
  SiShopify,
  SiWoocommerce,
  SiMagento,
  SiBigcommerce,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiSemrush,
  SiGoogle,
  SiWordpress,
  SiDrupal,
  SiJoomla,
  SiContentful,
  SiStripe,
  SiPaypal,
  SiSquare,
  SiBraintree,
  SiJira,
  SiAsana,
  SiTrello,
  SiScrapy,
  SiSelenium,
  SiPuppeteer,
  SiZapier,
  SiFigma,
  SiAdobexd,
  SiSketch,
  SiInvision,
  SiGooglecloud,
  SiDigitalocean,
  SiNodedotjs,
  SiPython,
  SiRuby,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiSvelte,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGitlab,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiStrapi,
  SiSanity,
  SiPrismic,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiHuggingface,
  SiCypress,
  SiJest,
  SiTestrail,
} from "react-icons/si";

const iconComponents: Record<string, React.ComponentType<any>> = {
  "Google Analytics": SiGoogleanalytics,
  Hotjar: SiHotjar,

  Shopify: SiShopify,
  WooCommerce: SiWoocommerce,
  Magento: SiMagento,
  BigCommerce: SiBigcommerce,

  React: SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  Angular: SiAngular,

  SEMrush: SiSemrush,
  "Google Search Console": SiGoogle,

  WordPress: SiWordpress,
  Drupal: SiDrupal,
  Joomla: SiJoomla,
  Contentful: SiContentful,

  Stripe: SiStripe,
  PayPal: SiPaypal,
  Square: SiSquare,
  Braintree: SiBraintree,

  Jira: SiJira,
  Asana: SiAsana,
  Trello: SiTrello,

  Scrapy: SiScrapy,
  Selenium: SiSelenium,
  Puppeteer: SiPuppeteer,

  Zapier: SiZapier,

  Figma: SiFigma,
  "Adobe XD": SiAdobexd,
  Sketch: SiSketch,
  InVision: SiInvision,

  "Google Cloud": SiGooglecloud,
  DigitalOcean: SiDigitalocean,

  "Node.js": SiNodedotjs,
  Python: SiPython,
  "Ruby on Rails": SiRuby,

  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,

  Vue: SiVuedotjs,
  Svelte: SiSvelte,
  TypeScript: SiTypescript,

  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  "GitLab CI/CD": SiGitlab,

  "React Native": SiReact,
  Flutter: SiFlutter,
  Swift: SiSwift,
  Kotlin: SiKotlin,

  Strapi: SiStrapi,
  Sanity: SiSanity,
  Prismic: SiPrismic,

  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  OpenAI: SiOpenai,
  "Hugging Face": SiHuggingface,

  Cypress: SiCypress,
  Jest: SiJest,
  Playwright: SiPuppeteer,

  TestRail: SiTestrail,
  qTest: SiTestrail,
};

const IconPlaceholder = ({ name }: { name: string }) => {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    return (
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-50 transition-all duration-300">
        <span className="text-lg font-bold text-gray-600">
          {name.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-50 transition-all duration-300">
      <IconComponent className="w-8 h-8 text-gray-600" />
    </div>
  );
};

export const metadata = {
  title: "Technologies | Sanixer",
  description:
    "We offer only well-recognized and time-tested technologies to bring advancement to any of your business goals.",
  keywords: [
    "Technologies",
    "Sanixer",
    "Software Development",
    "Tech Stack",
  ],
  // alternates: {
  //   canonical: "https://Sanixer/technologies", // ✅ Fixes the canonical error
  // },
};

export default async function Technologies() {

  return (
    <div>
      <div className="relative flex justify-center items-center w-full min-h-screen font-light bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            className="object-cover w-full h-full"
            src="/technology-bg.jpg"
            alt="technologies"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#000000] opacity-60"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center h-full px-4 lg:px-16 py-12 text-center">
          <div className="bg-opacity-90 sm:p-8 p-5 rounded-lg shadow-lg max-w-4xl">
            <h1 className="sm:text-4xl lg:text-5xl text-[24px] font-bold text-white mb-4 capitalize">
              Innovative Technology{" "}
              <span className="block text-[#F26522] relative mt-2">
                {" "}
                Solutions{" "}
              </span>
            </h1>
            <p className="sm:text-lg lg:text-xl text-[16px] text-white mb-6">
              We leverage{" "}
              <span className="text-[#F26522] font-semibold">
                cutting-edge technologies
              </span>{" "}
              and proven frameworks to transform your business challenges into
              digital advantages. Our expertise spans AI, cloud infrastructure,
              and custom software development.
            </p>
            {/* <div className="flex flex-col lg:flex-row justify-center gap-4">
              <a
                href="/case-studies"
                className="bg-[#F26522] text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300"
              >
                Our Case Studies
              </a>
              <a
                href="https://calendly.com/adnanghaffar"
                className="bg-white text-[#F26522] py-3 px-6 rounded-lg font-semibold border-2 border-[#F26522] hover:bg-[#F26522] hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Call
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full py-16 px-6 md:px-10 bg-gradient-to-br from-gray-50 to-white">
        <ScrollAnimation>
          <div className="flex flex-col items-center text-center w-full max-w-5xl">
            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-bold text-black leading-tight">
              Discover Our{" "}
              <span className="text-[#F26522]">Tech Expertise</span>
            </h2>

            {/* Divider Line */}
            <div className="w-24 h-1 bg-[#F26522] mt-4 mb-6 rounded-lg"></div>

            {/* Description */}
            <p className="text-[14px] sm:text-lg lg:text-xl text-gray-800 leading-relaxed max-w-3xl">
              We harness a powerful blend of modern technologies to craft
              innovative solutions that drive growth and efficiency. From
              front-end frameworks to back-end systems, our expertise spans
              across multiple domains of software development.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      {technologiesData.map((technology, index) =>
        index % 2 === 0 ? (
          <ScrollAnimation key={index}>
            <div className="max-w-full mx-auto relative py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 -left-16 w-24 h-24 rounded-full bg-[#F26522] opacity-5"></div>
                <div className="absolute bottom-10 right-1/4 w-16 h-16 rounded-full border-2 border-[#F26522] opacity-20"></div>
              </div>

              <div className="flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto relative z-10">
                <div className="lg:px-10 px-5 w-full">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content Section */}
                    <div className="lg:order-1 order-2 space-y-8">
                      {/* Section Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-[#F26522] bg-opacity-10 rounded-full border border-[#F26522] border-opacity-20">
                        <div className="w-2 h-2 bg-[#F26522] rounded-full mr-2"></div>
                        <span className="text-[#F26522] font-medium text-sm uppercase tracking-wider">
                          {technology.technologyBadge}
                        </span>
                      </div>

                      {/* Main Heading */}
                      <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#000000] leading-tight">
                          {technology.title}
                        </h2>
                        <div className="w-20 h-1 bg-[#F26522] rounded-full"></div>
                      </div>

                      {/* Description */}
                      <div className="space-y-4">
                        <p className="text-base text-gray-600 leading-relaxed">
                          {technology.description}
                        </p>
                      </div>

                      {/* Technology Icons Grid */}
                      <div className="pt-6">
                        <h3 className="text-lg font-semibold text-[#000000] mb-6 flex items-center">
                          <span className="w-6 h-6 bg-[#F26522] rounded mr-3 flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          Integrated Technologies
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                          {technology.icons.map((icon, iconIndex) => (
                            <div
                              key={iconIndex}
                              className="group bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 border border-gray-100"
                            >
                              <div className="flex flex-col items-center space-y-3">
                                <IconPlaceholder name={icon} />
                                <p className="text-sm font-medium text-[#000000] text-center transition-colors duration-300">
                                  {icon}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:order-2 order-1 relative">
                      <div className="relative">
                        <div className="absolute -inset-6 bg-gradient-to-r from-[#F26522] to-orange-400 rounded-3xl opacity-10 blur-xl"></div>
                        <div className="absolute -inset-3 bg-white rounded-2xl shadow-xl"></div>

                        {/* Main image container */}
                        <div className="relative bg-white rounded-2xl shadow-lg">
                          <Image
                            src={technology.technologyImage}
                            className="w-full h-auto object-contain"
                            alt={`${technology.title} Dashboard`}
                            width={500}
                            height={300}
                          />

                          {/* Floating stats cards */}
                          <div className="absolute -top-4 -right-4 bg-[#F26522] text-white px-4 py-2 rounded-xl shadow-lg">
                            <div className="text-xs font-medium">
                              {technology.stats.top.label}
                            </div>
                            <div className="text-lg font-bold">
                              {technology.stats.top.value}
                            </div>
                          </div>

                          <div className="absolute -bottom-4 -left-4 bg-white border-2 border-[#F26522] px-4 py-2 rounded-xl shadow-lg">
                            <div className="text-xs font-medium text-[#F26522]">
                              {technology.stats.bottom.label}
                            </div>
                            <div className="text-lg font-bold text-[#000000]">
                              {technology.stats.bottom.value}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ) : (
          <ScrollAnimation key={index}>
            <div className="max-w-full mx-auto relative py-16 lg:py-24 bg-gradient-to-bl from-white to-gray-50">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#F26522] opacity-10"></div>
                <div className="absolute top-1/2 -right-16 w-24 h-24 rounded-full bg-[#F26522] opacity-5"></div>
                <div className="absolute bottom-10 left-1/4 w-16 h-16 rounded-full border-2 border-[#F26522] opacity-20"></div>
              </div>

              <div className="flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto relative z-10">
                <div className="lg:px-10 px-5 w-full">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Section */}
                    <div className="lg:order-1 order-1 relative">
                      <div className="relative">
                        <div className="absolute -inset-6 bg-gradient-to-l from-[#F26522] to-orange-400 rounded-3xl opacity-10 blur-xl"></div>
                        <div className="absolute -inset-3 bg-white rounded-2xl shadow-xl"></div>

                        {/* Main image container */}
                        <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                          <Image
                            src={technology.technologyImage}
                            className="w-full h-auto object-contain"
                            alt={`${technology.title} Solutions`}
                            width={500}
                            height={300}
                          />

                          {/* Floating stats cards */}
                          <div className="absolute -top-4 -left-4 bg-[#F26522] text-white px-4 py-2 rounded-xl shadow-lg">
                            <div className="text-xs font-medium">
                              {technology.stats.top.label}
                            </div>
                            <div className="text-lg font-bold">
                              {technology.stats.top.value}
                            </div>
                          </div>

                          <div className="absolute -bottom-4 -right-4 bg-white border-2 border-[#F26522] px-4 py-2 rounded-xl shadow-lg">
                            <div className="text-xs font-medium text-[#F26522]">
                              {technology.stats.bottom.label}
                            </div>
                            <div className="text-lg font-bold text-[#000000]">
                              {technology.stats.bottom.value}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:order-2 order-2 space-y-8 text-left">
                      {/* Section Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-[#F26522] bg-opacity-10 rounded-full border border-[#F26522] border-opacity-20">
                        <span className="text-[#F26522] font-medium text-sm uppercase tracking-wider">
                          {technology.technologyBadge}
                        </span>
                        <div className="w-2 h-2 bg-[#F26522] rounded-full ml-2"></div>
                      </div>

                      {/* Main Heading */}
                      <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#000000] leading-tight">
                          {technology.title}
                        </h2>
                        <div className="w-20 h-1 bg-[#F26522] rounded-full"></div>
                      </div>

                      {/* Description */}
                      <div className="space-y-4">
                        <p className="text-base text-gray-600 leading-relaxed">
                          {technology.description}
                        </p>
                      </div>

                      {/* Technology Icons Grid */}
                      <div className="pt-6">
                        <h3 className="text-lg font-semibold text-[#000000] mb-6 flex flex-row-reverse items-center justify-end gap-3">
                          <span className="text-right mr-3">
                            Platform Expertise
                          </span>
                          <span className="w-6 h-6 bg-[#F26522] rounded flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                          {technology.icons.map((icon, iconIndex) => (
                            <div
                              key={iconIndex}
                              className="group bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 border border-gray-100"
                            >
                              <div className="flex flex-col items-center space-y-3">
                                <IconPlaceholder name={icon} />
                                <p className="text-sm font-medium text-[#000000] text-center transition-colors duration-300">
                                  {icon}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        )
      )}
    </div>
  );
}
