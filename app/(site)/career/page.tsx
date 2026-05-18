// import CareerPost from "../components/CareerPost";
import ScrollAnimation from "../components/ScrollAnimation";
// import careerData from "../../data/CareerData.json";

export const metadata = {
  title: "Join Our Team - Sanixer Career Opportunities",
  description:
    "Discover exciting career opportunities at Sanixer. Join a team of passionate developers, designers, and innovators shaping the future of technology.",
  keywords: [
    "Sanixer",
    "careers",
    "software development jobs",
    "tech careers",
    "remote jobs",
  ],
};

const Career: React.FC = () => {
  type BenefitItemProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  };

  const BenefitItem: React.FC<BenefitItemProps> = ({
    imageSrc,
    imageAlt,
    title,
    description,
  }) => (
    <div className="group bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 border border-gray-100 hover:border-[#F26522]/20">
      <div className="w-16 h-16 bg-[#F26522]/10 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300">
        <img src={imageSrc} alt={imageAlt} className="w-8 h-8 object-contain" />
      </div>
      <h4 className="font-bold text-black mb-2 transition-colors duration-300">
        {title}
      </h4>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  const benefits = [
    {
      imageSrc: "/bonuses.png",
      imageAlt: "Performance Bonuses",
      title: "Performance Incentives",
      description:
        "Rewarding exceptional performance with competitive bonuses and recognition.",
    },
    {
      imageSrc: "/annual-trip.png",
      imageAlt: "Company Retreat",
      title: "Annual Team Retreats",
      description:
        "Exciting company retreats to beautiful destinations for team building and relaxation.",
    },
    {
      imageSrc: "/fuel-allowance.png",
      imageAlt: "Transportation",
      title: "Transportation Allowance",
      description:
        "Comprehensive fuel allowance to support your daily commute and travel needs.",
    },
    {
      imageSrc: "/medical.png",
      imageAlt: "Health Coverage",
      title: "Comprehensive Healthcare",
      description:
        "Complete medical coverage for you and your family with premium healthcare plans.",
    },
    {
      imageSrc: "/paid-leaves.png",
      imageAlt: "Paid Time Off",
      title: "Flexible Time Off",
      description:
        "Generous paid leave policy including vacation, sick days, and personal time.",
    },
    {
      imageSrc: "/time.png",
      imageAlt: "Flexible Hours",
      title: "Work-Life Balance",
      description:
        "Flexible working hours and remote work options to maintain perfect work-life balance.",
    },
    {
      imageSrc: "/annual-ic.png",
      imageAlt: "Salary Growth",
      title: "Career Progression",
      description:
        "Regular salary reviews and clear career advancement paths with merit-based promotions.",
    },
  ];

  const stats = [
    { number: "50+", label: "Team Members" },
    { number: "50+", label: "Projects Delivered" },
    { number: "10+", label: "Countries Served" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <ScrollAnimation>
        <div className="relative overflow-hidden min-h-screen flex items-center bg-center bg-cover">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src="/career-bg.jpeg"
              alt="careers-bg"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[#000000] opacity-60"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Shape the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26522] to-orange-400">
                  Future
                </span>{" "}
                of Tech
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Join a community of innovators, creators, and visionaries
                building tomorrow`s solutions today
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Stats Section */}
      <ScrollAnimation>
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-500">
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#F26522] mb-2 transition-transform duration-300">
                      {stat.number}
                    </h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Culture Section */}
      <ScrollAnimation>
        <div className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                    Where Innovation
                    <span className="text-[#F26522]"> Meets Passion</span>
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At Sanixer, we believe in nurturing talent, fostering
                    creativity, and building a culture where every voice
                    matters. Our team thrives on collaboration, continuous
                    learning, and pushing the boundaries of what`s possible.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#F26522] rounded-full flex-shrink-0 mt-1 text-white text-center">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Growth Mindset
                      </h4>
                      <p className="text-gray-600">
                        Continuous learning and development opportunities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#F26522] rounded-full flex-shrink-0 mt-1 text-white text-center">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Inclusive Environment
                      </h4>
                      <p className="text-gray-600">
                        Diverse, welcoming workplace for all backgrounds
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#F26522] rounded-full flex-shrink-0 mt-1 text-white text-center">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Innovation Focus
                      </h4>
                      <p className="text-gray-600">
                        Cutting-edge projects with latest technologies
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="/career-7.png"
                    alt="Team collaboration"
                    className="w-full rounded-3xl shadow-2xl"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#F26522]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F26522]/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Open Positions Section */}
      {/* <ScrollAnimation>
        <div className="py-20 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">
                Open <span className="text-[#F26522]">Positions</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Ready to make your mark? Explore our current openings and find
                the perfect role to advance your career with us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {careerData.careers.map((jobpost) => (
                <CareerPost key={jobpost.id} jobpost={jobpost} />
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation> */}

      {/* Benefits Section */}
      <ScrollAnimation>
        <div className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="lg:order-2">
                <img
                  src="/career-5.jpg"
                  alt="Employee benefits"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>

              <div className="lg:order-1 space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                    Comprehensive
                    <span className="text-[#F26522]"> Benefits</span>
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    We invest in your success and well-being with a
                    comprehensive benefits package designed to support both your
                    professional growth and personal life.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {benefits.slice(0, 2).map((benefit, index) => (
                    <BenefitItem key={index} {...benefit} />
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="mt-16">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.slice(4).map((benefit, index) => (
                  <BenefitItem key={index + 4} {...benefit} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <div className="py-20 lg:py-32 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#F26522]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F26522]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Start Your
                <span className="text-[#F26522]"> Journey?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join our mission to transform ideas into extraordinary digital
                experiences. Your next career adventure begins here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@sanixer.com"
                  className="bg-[#F26522] hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                >
                  Apply Now
                </a>
                <a
                  href="/about"
                  target="_blank"
                  className="text-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Career;
