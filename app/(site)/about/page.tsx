
import serviceSummaryData from "./aboutdata.json";

/*
async function getData() {
  const query = `*[_type == 'serviceSummary'][0]`;
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function getLogoData() {
  const queryLogo = `*[_type == 'techLogos'] | order(_createdAt asc)`;
  try {
    return await client.fetch(queryLogo);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
*/
interface SeoMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
}

interface SocialCards {
  type?: string;
  url?: string;
  title?: string;
  description?: string;
  linkedInTitle?: string;
  linkedInDescription?: string;
  linkedInUrl?: string;
  pinterestTitle?: string;
  pinterestDescription?: string;
  pinterestUrl?: string;
  whatsappTitle?: string;
  whatsappDescription?: string;
  whatsappUrl?: string;
  telegramTitle?: string;
  telegramDescription?: string;
  telegramUrl?: string;
}

interface ServiceSummaryData {
  webSeoMetadata?: SeoMetadata;
  facebookCards?: SocialCards;
  twitterCards?: SocialCards;
  linkedInCards?: SocialCards;
  pinterestCards?: SocialCards;
  whatsappCards?: SocialCards;
  telegramCards?: SocialCards;
  heroImage?: any;
  pageTitle?: string;
  pageDesc?: string;
  introductionSection?: {
    introHeading?: string;
    introDesc?: string;
  };
  detailSection?: {
    heading?: string;
    detailInd?: Array<{
      title?: string;
      smDescription?: string;
      description?: string;
      keyBenefits?: string[];
    }>;
  };
  projectManagement?: {
    projectHeading?: string;
    toolsTech?: Array<{
      heading?: string;
      detail?: string;
      images?: string[];
    }>;
  };
  projectCycleSection?: {
    projectCycleHaeding?: string;
    projectLifeCycle?: Array<{
      heading?: string;
      detail?: string;
    }>;
  };
  summarySection?: {
    summaryHeading?: string;
    summaryMessage?: string;
    summaryImg?: any;
  };
  callToActionSection?: {
    callToActionHeading?: string;
    callToAction?: string;
  };
  paymentOption?: {
    paymentHeading?: string;
    paymentDetail?: string;
    paymentTools?: Array<{
      heading?: string;
      detail?: string;
      images?: string[];
    }>;
  };
  bannerFiveImage?: any;
}

export async function generateMetadata() {
  const data = serviceSummaryData as ServiceSummaryData;

  const defaultTitle =
    "Sanixer - Custom Software and Mobile Development Company in USA";
  const defaultDescription =
    "Custom Software and Mobile Development Company in USA";
  const defaultKeywords = "Sanixer";
  const canonicalUrl = "https://Sanixer/about/service-summary";

  const title = data?.webSeoMetadata?.title ?? defaultTitle;
  const description = data?.webSeoMetadata?.description ?? defaultDescription;
  const keywords =
    data?.webSeoMetadata?.keywords?.join(", ") ?? defaultKeywords;

  const heroImageUrl = "/default-image.jpg";

  const facebookMeta = data?.facebookCards ?? {};
  const twitterMeta = data?.twitterCards ?? {};
  const linkedInMeta = data?.linkedInCards ?? {};
  const pinterestMeta = data?.pinterestCards ?? {};
  const whatsappMeta = data?.whatsappCards ?? {};
  const telegramMeta = data?.telegramCards ?? {};

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: facebookMeta.type ?? "website",
      url: facebookMeta.url ?? canonicalUrl,
      title: facebookMeta.title ?? title,
      description: facebookMeta.description ?? description,
      images: [{ url: heroImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterMeta.title ?? title,
      description: twitterMeta.description ?? description,
      images: [{ url: heroImageUrl, alt: title }],
      url: twitterMeta.url ?? canonicalUrl,
    },
    linkedIn: {
      title: linkedInMeta.linkedInTitle ?? title,
      description: linkedInMeta.linkedInDescription ?? description,
      image: heroImageUrl,
      url: linkedInMeta.linkedInUrl ?? canonicalUrl,
    },
    pinterest: {
      title: pinterestMeta.pinterestTitle ?? title,
      description: pinterestMeta.pinterestDescription ?? description,
      url: pinterestMeta.pinterestUrl ?? canonicalUrl,
    },
    whatsapp: {
      title: whatsappMeta.whatsappTitle ?? title,
      description: whatsappMeta.whatsappDescription ?? description,
      url: whatsappMeta.whatsappUrl ?? canonicalUrl,
    },
    telegram: {
      title: telegramMeta.telegramTitle ?? title,
      description: telegramMeta.telegramDescription ?? description,
      url: telegramMeta.telegramUrl ?? canonicalUrl,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
export default async function ServiceSummary() {
  const data = serviceSummaryData;
  const dataLogo = [];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-screen max-md:max-w-full">
        {data.heroImage && (
          <img
            loading="lazy"
            className="top-0 left-0 object-cover absolute inset-0 size-full"
            src="/about-banner.jpg" // Using placeholder image
            alt="banner"
          />
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
        <div className="flex relative flex-col justify-center items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow min-h-screen">
          <div>
            <h1 className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
              Customized{" "}
              <span className="text-[#F26522] mt-2"> Service Solutions </span>
              Designed for Your Requirements
            </h1>
            <h2 className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
              Personalized Approaches for Diverse{" "}
              <span className="text-[#F26522] font-semibold">
                {" "}
                Business Objectives
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Introduction Section */}

      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="">
              <h2 className="text-3xl font-bold mb-8 text-center">
                {data.introductionSection?.introHeading}
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed text-center">
                {data.introductionSection?.introDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-black mb-10">
            {data.detailSection.heading}
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {data.detailSection?.detailInd?.map((detail: any, index: any) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl p-6 mb-6 w-full max-w-xl border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {detail.title}
                </h3>
                <p className="text-gray-600 mb-4">{detail.smDescription}</p>
                <p className="text-gray-700 mb-4">{detail.description}</p>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Key Benefits:
                </h4>
                <ul className="list-disc pl-6">
                  {detail.keyBenefits.map((benefit: any, index: any) => (
                    <li key={index} className="text-gray-700">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Management Section */}
      {/* <div className="px-6 md:px-16 py-10 md:py-16 bg-[#fcc5b0]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-black text-center mb-6">{data.projectManagement?.projectHeading}</h2>
    <div className="flex flex-wrap justify-center">
      {data.projectManagement?.toolsTech?.map((tool: any, toolIndex: any) => (
        <div key={toolIndex} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white border border-[#0a8ffc] shadow-md p-6 rounded-lg flex flex-col h-full">
            <div className="flex flex-row justify-center mb-4">
              {tool.images?.map((imagePath: string, logoIndex: number) => (
                <div key={logoIndex} className="">
                  <img
                    src={imagePath}
                    alt={tool.heading}
                    className="h-8 object-contain"
                  />
                </div>
              ))}
            </div>
            <h3 className="text-xl text-center font-semibold mb-4">{tool.heading}</h3>
            <p className="text-gray-700 text-center">{tool.detail}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div> */}

      {/* Project Cycle Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            {data.projectCycleSection?.projectCycleHaeding}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-14">
            {data.projectCycleSection?.projectLifeCycle.map(
              (step: any, index: any) => (
                <div
                  key={index}
                  className="bg-[#EDECEC] rounded-3xl shadow-sm relative"
                >
                  <div className="z-10 flex justify-center items-center px-5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-white rounded-full h-[62px] w-[62px] absolute -right-2 -top-8 drop-shadow-serviceCard">
                    <span className="text-gray-800 font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div className="p-6 h-full">
                    <div className=" font-medium text-lg leading-6 pt-6 text-center">
                      {step.heading}
                    </div>
                    <div
                      className="mt-3 text-sm font-light tracking-normal text-center"
                      style={{ lineHeight: "1.8", wordSpacing: "0.1em" }}
                    >
                      {step.detail}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* <img
        loading="lazy"
        src="/affiliate-partner-eclipse.png"
        alt="eclipse icon"
        className="absolute w-[300px] z-0"
      /> */}

      {/* Summary Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-8 text-black text-center md:text-left">
                {data.summarySection?.summaryHeading}
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed md:text-left text-center">
                {data.summarySection?.summaryMessage}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 md:flex md:justify-center">
            <div className=" bg-gray-200">
              {data.bannerFiveImage && (
                <img
                  loading="lazy"
                  className="max-w-[100%] h-auto"
                  src="/seacrhing2.jpeg"
                  alt="bannerFiveImage"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      {/* <div className="py-12 bg-[#fcc5b0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-6">{data.callToActionSection?.callToActionHeading}</h2>
            <p className="text-lg text-gray-700 mb-8">{data.callToActionSection?.callToAction}</p>
            <div className="mt-8 flex justify-center ">
              <Link href="/">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* Special Offer Section */}
      {/* <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-6">{data.specialOffersSection?.offerHeading}</h2>
            <p className="text-lg text-gray-700 mb-8">{data.specialOffersSection?.specialOffer}</p>
            <div className="mt-8 flex justify-center">
              <ButtonScrollToSection
                content="Claim Offer"
                classes="bg-gradient-to-r ml-3 from-pink-500 to-purple-500 cursor-pointer text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
                destination="contact-box"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* Payment Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black text-center mb-6">
            {data.paymentOption?.paymentHeading}
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            {data.paymentOption?.paymentDetail}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {data.paymentOption?.paymentTools?.map(
              (tool: any, toolIndex: any) => (
                <div
                  key={toolIndex}
                  className="p-4 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {tool.images?.map(
                      (imagePath: string, logoIndex: number) => (
                        <div key={logoIndex}>
                          <img
                            loading="lazy"
                            src={imagePath}
                            alt={tool.heading}
                            className="h-12 w-auto object-contain"
                          />
                        </div>
                      )
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                    {tool.heading}
                  </h3>
                  <p className="text-gray-600 text-center">{tool.detail}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
