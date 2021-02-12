import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import bookedIllustration from "../images/booked_illustration.svg";
import orderConfirmedllustration from "../images/order_confirmed.svg";
import productPhotographyIllustration from "../images/product_photography.svg";
import orderDeliveredIllustration from "../images/order_delivered.svg";


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
                        <h1 className="text-2xl lg:text-4xl text-black font-bold f-f-l pb-12">¿Cómo funciona?</h1>
                        <img
                          alt="Booking illustration"
                          className="block w-1/4 mx-auto mb-3 float-center"
                          src={bookedIllustration}
                        />
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">1. Inicia una orden</h2>
                        <p className="text-sm pb-7"> Visit our Start your order page and fill out the form. When submitted, you’ll receive a reply with a unique reference number and detailed shipping instructions. If you would like a quote before you ship you can send us the details of your project and we’ll email you back a quote.</p>
                        <img
                          alt="Order Confirmation"
                          className="block w-1/4 mx-auto mb-3 float-center"
                          src={orderConfirmedllustration}
                        />
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">2. Envíanos tus productos</h2>
                        <p className="text-sm pb-7"> Pack up your products and ship them to our Las Vegas studio. It’s a good idea to try and select the best products if you can, trying to avoid dings, dents, and scratches. Of course, pack each item securely so they don’t get damaged in transit. Enclose your reference number inside the box so we can let you know when your products arrive.</p>
                        <img
                          alt="Product Photography"
                          className="block w-1/4 mx-auto mb-3 float-center"
                          src={productPhotographyIllustration}
                        />
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">3. Nosotros fotografíamos tus productos</h2>
                        <p className="text-sm pb-7"> When your products arrive in our studio we’ll contact you to let you know. Now that we have your products on-hand, we will go over the details of your order and discuss with you any questions or concerns you may have before we start. Once payment is processed the fun begins and we’ll start shooting your photos! </p>
                        <img
                          alt="Entrega online inmediata"
                          className="block w-1/4 mx-auto mb-3 float-center"
                          src={orderDeliveredIllustration}
                        /> 
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">4. Entrega online inmediata</h2>
                        <p className="text-sm pb-7"> Once your photos are ready and meet our standards for delivery we’ll post them in a private online gallery where you can view and download them immediately. We keep your photos available online so you can come back and download them any time. If you’d like to make any changes or additions (additional charge may apply) let us know and we’ll make them before shipping your products back.
When the project is complete, we’ll carefully pack up and ship your products back to you. Shipping fees can be included on your invoice or charged to your UPS or FedEx account.</p>
                    </div>
                </div>
            </div>
      </section>

      <section className="flex flex-col items-center md:flex-row">
            <div className="mx-auto container">
                <div className="px-6 lg:px-12 py-6 lg:py-12 relative rounded-3xl overflow-hidden">
 
                    <div className="relative z-10">
                        <h1 className="text-2xl lg:text-4xl text-black font-bold f-f-l pb-12">Preguntas frecuentes</h1>
                        
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">Precio</h2>
                        <p className="text-sm pb-7"> Visit our Start your order page and fill out the form. When submitted, you’ll receive a reply with a unique reference number and detailed shipping instructions. If you would like a quote before you ship you can send us the details of your project and we’ll email you back a quote.</p>
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">Envío</h2>
                        <p className="text-sm pb-7"> Pack up your products and ship them to our Las Vegas studio. It’s a good idea to try and select the best products if you can, trying to avoid dings, dents, and scratches. Of course, pack each item securely so they don’t get damaged in transit. Enclose your reference number inside the box so we can let you know when your products arrive.</p>
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">Proceso</h2>
                        <p className="text-sm pb-7"> When your products arrive in our studio we’ll contact you to let you know. Now that we have your products on-hand, we will go over the details of your order and discuss with you any questions or concerns you may have before we start. Once payment is processed the fun begins and we’ll start shooting your photos! </p>
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">Entrega</h2>
                        <p className="text-sm pb-7"> Once your photos are ready and meet our standards for delivery we’ll post them in a private online gallery where you can view and download them immediately. We keep your photos available online so you can come back and download them any time. If you’d like to make any changes or additions (additional charge may apply) let us know and we’ll make them before shipping your products back.
When the project is complete, we’ll carefully pack up and ship your products back to you. Shipping fees can be included on your invoice or charged to your UPS or FedEx account.</p>
                    </div>
                </div>
            </div>
      </section>

      
<section>
<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span className="block">¿Listo para empezar?</span>
      <span className="block text-purple-600">Potencializa tu producto hoy</span>
    </h2>
    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div className="inline-flex rounded-md shadow">
        <a href="/contacto" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:text-purple-600 hover:bg-purple-50 hover:border-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Inicia tu orden
        </a>
      </div>
      <div className="ml-3 inline-flex rounded-md shadow">
        <a href="precios" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50">
          Precios
        </a>
      </div>
    </div>
  </div>
</section>
    </Layout>
  );
}

export default AboutPage;


