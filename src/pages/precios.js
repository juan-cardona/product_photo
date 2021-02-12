import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
      <div className="py-4 px-10">
      <a href="contacto">  
      <div className="shadow-lg group container transform transition duration-500 hover:scale-105 rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
        <div>
        <div  className="w-full image-cover rounded-t-md" >
        </div>
        <div className="py-8 px-4 bg-white  rounded-b-md ">
            <span className="block text-lg text-gray-800 font-bold tracking-wide">Classic product photos</span>
            <span  className="block text-gray-600 text-sm">Clear, crisp, pure white backgrounds. Professionally shot and edited in our studio. View the classic product photography pricing table. </span>
            <span  className="block text-gray-700 font-bold text-sm">As low as $30 per photo </span>
        </div>
        </div>
    </div>  </a>
</div>
    <div className="py-4 px-10">
    <a href="contacto"> <div className="shadow-lg group container transform transition duration-500 hover:scale-105 rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
        <div>
        <div  className="w-full image-cover rounded-t-md" >
        </div>
        <div className="py-8 px-4 bg-white  rounded-b-md ">
            <span className="block text-lg text-gray-800 font-bold tracking-wide">Hero Shots</span>
            <span  className="block text-gray-600 text-sm">An elevated version of our classic product photography service. Includes higher resolution, additional retouching, and transparencies in PNG format. </span>
            <span  className="block text-gray-700 font-bold text-sm">$90 per photo </span>
        </div>
        </div>
    </div> </a>
</div> 
<style>{"\
  .content-div{\
  background-image:url('https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80');\
  background-repeat: no-repeat;\
  background-size: cover;\
  background-position:center;\
}\
  .content-div:hover{\
    background-image:\
     url('https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80');\
    }\
    .image-cover  {\
      height:260px;\
    }\
"}</style>
      </section>
    </Layout>
  );
}

export default AboutPage;
