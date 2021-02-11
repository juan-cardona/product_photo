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
            <div className="mx-auto container">
                <div className="px-6 lg:px-12 py-6 lg:py-12 relative rounded-3xl overflow-hidden">
 
                    <div className="relative z-10">
                        <h1 className="text-2xl lg:text-4xl text-black font-bold f-f-l pb-12">Not what you were looking for?</h1>
                        
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">Start an order</h2>
                        <p className="text-sm pb-7"> Visit our Start your order page and fill out the form. When submitted, you’ll receive a reply with a unique reference number and detailed shipping instructions. If you would like a quote before you ship you can send us the details of your project and we’ll email you back a quote.</p>
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">Bringing your team upto speed with real-time collaboration</h2>
                        <p className="text-sm pb-7"> Hola lorem impsum dolom lorem impsum dolom lorem impsum dolom lorem impsum dolom lorem impsum dolom lorem impsum dolom lorem impsum dolom lorem impsum dolom lorem impsum dolom </p>
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">Bringing your team upto speed with real-time collaboration</h2>
                        <p className="text-sm pb-7"> Hola lorem impsum dolom lorem impsum dolom lorem impsum dolom lorem impsum dolom  impsum dolom lorem impsum dolom lorem impsum dolom lorem impsum dolom </p>
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">How to setup your workspace in less than 10 minutes</h2>
                        <p className="text-sm pb-7"> Hola lorem impsum dolom lorem impsum dolom lorem impsum dolom lorem impsum dolom lorem impsum dolom lorem impsum dolom lorem impsum dolom lorem impsum dolom </p>
                    </div>
                </div>
            </div>
      </section>
    </Layout>
  );
}

export default AboutPage;


