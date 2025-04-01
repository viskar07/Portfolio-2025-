
import React from "react";
import { hackathons } from "@/constants/portfolio";
import { blurRevealAnimation } from "@/utils/animations";
import { ExternalLink, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Hackathons = () => {
  return (
    <section className="py-8 w-full max-w-4xl mx-auto">
      <h2 className={blurRevealAnimation(14, "text-2xl font-bold mb-6")}>
        Hackathons ({hackathons.length})
      </h2>

      <div className="space-y-4">
        {hackathons.map((hackathon, index) => (
          <Link
            to={`/hackathon/${hackathon.id}`}
            key={hackathon.id}
            className={blurRevealAnimation(15 + index, "flex justify-between items-center  rounded-lg transition-colors cursor-pointer")}
          >
            <div className="flex items-center">
              <span className="mr-2">{hackathon.id}.</span>
              <span className="mr-2 text-white">{hackathon.name}</span>
              <span className="text-gray-400 hidden sm:inline">{hackathon.description}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 mr-1">{hackathon.date}</span>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
