import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      
      <section className="text-center  ">

        <h2 className="inline-block p-6 mt-8 mb-12 text-4xl  font-bold ">
          Product photography for your website, Amazon, and more.
        </h2>

        <p className="leading-loose">
        We make it easy to get professional photos of your product quickly and affordably.{` `}          
        </p>

      </section>

      <section className="text-center mt-20">
        <h2 className="inline-block p-3 mb-6 mt-32 text-2xl font-bold ">
          Tu nos envías tu producto, nosotros te envíamos las fotos!
        </h2>
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/4 mx-auto mb-3 float-right"
          src={catAndHumanIllustration}
        />
        <p className="leading-loose">
        
        
You ship it, we shoot it! ®
We specialize in white background product photography for your website, online store, the Amazon marketplace, print, and more. Just ship your products to our Las Vegas studio, our team will shoot and edit them here, then we ship them back to you.

Since our start in 2003 we’ve worked with thousands of clients worldwide ranging from small startups to Fortune 500 companies. We’ve built great relationships with our clients, many we’ve been working with regularly for over 10 years.

We’ve spent over a decade perfecting our process to make it easy to work with us no matter your location. Curious how to work with a remote photo studio? We’ve put together a guide that explains the steps and answers the most common questions..{` `}          
        </p>

          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
      </section>


<div className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-base text-purple-600  font-semibold tracking-wide uppercase">Transactions</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      Crisp photos packed with features you’ll love
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
      Fully compatible
      </p>
    </div>

    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <dt className="text-lg leading-6 font-medium text-gray-900">
            Fully compatible
            </dt>
            <dd className="mt-2 text-base text-gray-500">
            Our photos integrate seamlessly with popular platforms such as Amazon.com, Shopify, and BigCommerce.
            </dd>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <dt className="text-lg leading-6 font-medium text-gray-900">
            Expert editing
            </dt>
            <dd className="mt-2 text-base text-gray-500">
            All photos go through a thorough editing process which includes touch-up of minor defects and color correction.
            </dd>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <dt className="text-lg leading-6 font-medium text-gray-900">
            Web & print
            </dt>
            <dd className="mt-2 text-base text-gray-500">
            Multiple image sizes are delivered with each photo whether you intend to use them on the web or in high quality prints.
            </dd>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <dt className="text-lg leading-6 font-medium text-gray-900">
              Mobile notifications
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
</div>


    </Layout>
  );
}

export default IndexPage;
