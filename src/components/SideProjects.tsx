
import React from "react";
import { sideProjects } from "@/constants/portfolio";
import { blurRevealAnimation } from "@/utils/animations";
import { ExternalLink, Check, Loader } from "lucide-react";
import { Link } from "react-router-dom";

const SideProjects = () => {
  return (
    <section className="py-8 w-full max-w-4xl mx-auto">
      <h2 className={blurRevealAnimation(8, "text-2xl font-bold mb-6")}>
        Projects
      </h2>

      <div className="space-y-3">
        {sideProjects.map((project, index) => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            className={blurRevealAnimation(9 + index, "flex justify-between items-center  rounded-lg  ")}
          >
            <div className="flex items-center">
              <span className="mr-2">{project.id}.</span>
              <span className="mr-2 text-white">{project.name}</span>
              <span className="text-gray-400">{project.description}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 mr-1 px-2  rounded-full   bg-zinc-800 hover:bg-zinc-700 transition-colors">{project.tech || "Frontend"}</span>
                {project.active ? (
                  <div className="w-2 h-2  rounded-full bg-green-800"/>
                ) : ( <Loader className="h-2 w-2" />)}
              </div>
              {/* <ExternalLink className="h-4 w-4 text-gray-400" /> */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SideProjects;
