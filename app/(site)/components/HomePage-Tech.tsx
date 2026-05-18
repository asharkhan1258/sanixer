"use client";

import Link from "next/link";

const allTechnologies = [
  { name: "Flutter", logo: "/mobile3.png", category: "Mobile" },
  { name: "React Native", logo: "/web2.png", category: "Mobile" },
  { name: "Xamarin", logo: "/xamarin.png", category: "Mobile" },
  { name: "Swift", logo: "/prog2.png", category: "Mobile" },
  { name: "Kotlin", logo: "/kotlin.png", category: "Mobile" },

  { name: "Node.js", logo: "/web1.png", category: "Web" },
  {
    name: "React.js",
    logo: "/web2.png",
    link: "/services/react-js-development-services",
    category: "Web",
  },
  { name: "Angular", logo: "/web3.png", category: "Web" },
  { name: "Vue.js", logo: "/web4.png", category: "Web" },
  { name: "Laravel", logo: "/web5.png", category: "Web" },
  { name: "Django", logo: "/web6.png", category: "Web" },
  { name: "Ruby on Rails", logo: "/web7.png", category: "Web" },
  { name: "Next.js", logo: "/web8.png", category: "Web" },
  { name: ".Net", logo: "/prog8.png", category: "Web" },

  { name: "JavaScript", logo: "/prog1.png", category: "Language" },
  { name: "Python", logo: "/python.png", category: "Language" },
  { name: "Java", logo: "/prog3.png", category: "Language" },
  {
    name: "PHP",
    logo: "/prog4.png",
    link: "/services/php-development-services",
    category: "Language",
  },
  { name: "C#", logo: "/prog5.png", category: "Language" },
  { name: "C++", logo: "/prog6.png", category: "Language" },
  { name: "Ruby", logo: "/prog7.png", category: "Language" },

  { name: "WordPress", logo: "/plat1.png", category: "Platform" },
  { name: "Magento", logo: "/plat2.png", category: "Platform" },
  { name: "Shopify", logo: "/plat3.png", category: "Platform" },
  { name: "WooCommerce", logo: "/plat4.png", category: "Platform" },
  { name: "Drupal", logo: "/plat5.png", category: "Platform" },
  { name: "Salesforce", logo: "/plat6.png", category: "Platform" },
  { name: "Squarespace", logo: "/plat7.png", category: "Platform" },
  { name: "BigCommerce", logo: "/plat8.png", category: "Platform" },

  { name: "Artificial Intelligence", logo: "/ai.png", category: "Advanced" },
  {
    name: "Augmented Reality",
    logo: "/augmentedReal.png",
    category: "Advanced",
  },
  { name: "Internet of Things", logo: "/iot.png", category: "Advanced" },
  { name: "Blockchain", logo: "/blockchain.png", category: "Advanced" },
  { name: "HTML5", logo: "/html5.png", category: "Web" },
  { name: "Mobile Angular UI", logo: "/web3.png", category: "Mobile" },
];

const TechnologiesSection = () => {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#F26522] opacity-3 rounded-full transform -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F26522] opacity-3 rounded-full transform translate-x-48 translate-y-48"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:px-16 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F26522] text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            Our Tech Stack
          </div>
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-black mb-4">
            Powering Innovation with the Right Tools
          </h2>
          <div className="w-24 h-1 bg-[#F26522] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We utilize a modern blend of technologies, frameworks, and tools to
            deliver high-performance, secure, and scalable solutions tailored to
            your business needs.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 md:gap-8">
          {allTechnologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#F26522] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {/* Category Badge */}
              <div className="absolute -top-2 left-2 bg-[#F26522] text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                {tech.category}
              </div>

              {/* Technology Content */}
              {tech.link ? (
                <Link href={tech.link} className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 relative">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-[#F26522] opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
                  </div>
                  <span className="text-sm font-medium text-black group-hover:text-[#F26522] transition-colors duration-300 leading-tight">
                    {tech.name}
                  </span>
                </Link>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 relative">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-[#F26522] opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
                  </div>
                  <span className="text-sm font-medium text-black group-hover:text-[#F26522] transition-colors duration-300 leading-tight">
                    {tech.name}
                  </span>
                </div>
              )}

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F26522] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-[#F26522] to-[#E55A1F] rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">
                {allTechnologies.length}+
              </div>
              <div className="text-sm opacity-90">Technologies</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Projects Built</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Tech Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
