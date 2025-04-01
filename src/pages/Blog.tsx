
import React from "react";
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import { blurRevealAnimation } from "@/utils/animations";

const Blog = () => {
  return (
    <Layout className="bg-[#161619]">
      <Navigation />
      <section className="py-8 w-full max-w-4xl mx-auto">
        <h1 className={blurRevealAnimation(2, "text-4xl font-bold mb-6")}>
          Blog
        </h1>
        <div className={blurRevealAnimation(3, "text-gray-400 text-lg")}>
          Coming soon...
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
