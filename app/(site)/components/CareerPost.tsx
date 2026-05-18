import React from "react";
import Link from "next/link";
import { MapPin, Clock, Users, ArrowRight } from "lucide-react";

interface Props {
  jobpost: {
    id: string;
    jobTitleBaner: string;
    descJobTitle: string;
    location: string;
    type: string;
    experience: string;
    skills: string[];
  };
}

const CareerPost: React.FC<Props> = ({ jobpost }) => {
  return (
    <div className="group relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Main card */}
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-[#F26522]/20 overflow-hidden h-full flex flex-col">
        {/* Header with orange accent */}
        <div className="relative p-6 pb-4">
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#F26522]/10 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="absolute top-4 right-4 w-10 h-10 bg-[#F26522] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="w-5 h-5 bg-white rounded-sm"></div>
          </div>

          <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#F26522] transition-colors duration-300 pr-16">
            {jobpost.jobTitleBaner}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
            {jobpost.descJobTitle}
          </p>
        </div>

        {/* Job details */}
        <div className="px-6 flex-1">
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <div className="w-5 h-5 bg-[#F26522]/10 rounded-full flex items-center justify-center">
                <MapPin size={12} className="text-[#F26522]" />
              </div>
              <span>{jobpost.location}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-700">
              <div className="w-5 h-5 bg-[#F26522]/10 rounded-full flex items-center justify-center">
                <Clock size={12} className="text-[#F26522]" />
              </div>
              <span>{jobpost.type}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-700">
              <div className="w-5 h-5 bg-[#F26522]/10 rounded-full flex items-center justify-center">
                <Users size={12} className="text-[#F26522]" />
              </div>
              <span>{jobpost.experience} Experience</span>
            </div>
          </div>

          {/* Skills tags */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {jobpost.skills.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium group-hover:bg-[#F26522]/10 group-hover:text-[#F26522] transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
              {jobpost.skills.length > 3 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                  +{jobpost.skills.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer with CTA */}
        <div className="p-6 pt-0">
          <Link
            href={`/career/${jobpost.id}`}
            className="group/cta w-full bg-black hover:bg-[#F26522] text-white rounded-xl px-4 py-3 font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            aria-label={`View details for ${jobpost.jobTitleBaner}`}
          >
            <span>View Details</span>
            <ArrowRight
              size={16}
              className="group-hover/cta:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 border-2 border-[#F26522] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default CareerPost;
