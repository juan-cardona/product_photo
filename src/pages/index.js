import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import productPhotographyIllustration from "../images/product_photography.svg";
import bookedIllustration from "../images/booked_illustration.svg";


function IndexPage() {
  return (
    <Layout >
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      
      <section className="text-center">



        <h2 className="inline-grid p-2 mt-2 mb-2 text-xl text-center mx-2 font-bold ">
        Fotografía de producto para Amazon, Mercado Libre, tu sitio web y más...
        </h2>

        <p className="leading-loose mx-4 p-2 text-center">
        Hacemos sencillo conseguir imagenes profesionales de tu producto.       
        </p>

        <div className="mt-8 flex justify-center lg:mt-0 lg:flex-shrink-0">
        <div className="ml-3 inline-flex rounded-md ">
        <a href="como-funciona" className="inline-flex items-center justify-center px-2 py-2 border border-transparent text-base  font-small rounded-sm text-purple-600 bg-white hover:bg-purple-50">
          Conoce Más
        </a>
        </div>
        <div className="inline-flex rounded-md justify-between shadow">
        <a href="/contacto" className="inline-flex items-center justify-center px-2 py-2 border border-transparent shadow-sm text-base font-small rounded-sm text-white bg-purple-600 hover:text-purple-600 hover:bg-purple-50 hover:border-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Inicia tu Orden
        </a>
        </div>
        </div>


        <img
          alt="Ejemplo de fotografia de producto"
          className="inline-block w-full mx-auto mt-16 float-center md:w-1/2"
          src={productPhotographyIllustration}
        />


      </section>
      <section className="text-left mt-4">
        <h2 className="inline-block p-3 mb-6 mt-16 text-2xl font-bold ">
          Tu nos envías tu producto, nosotros te envíamos las fotos!
        </h2>
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/4 mx-auto mb-3"
          src={bookedIllustration}
        />
        <p className="leading-loose px-4 text-left mx-6">
          Nos especializamos en fotograía de producto con fondos blancos para tu sitio web, tu tienda en línea, el marketplace de Amazon, Mercado Libre, Facebook y más.
          Sólo envíanos tu producto a nuestro estudio en León, Gto, México, nuestro equipo se encargará de tomar y editar las fotos y te las envíaremos una vez que estén listas.
          <br></br>

          Si te interesa trabajar con un estudio remoto pero tienes curiosidad de como funciona nuestro proceso, puedes consultar nuestra guía de compra que hemos preparado cuidadosamenta para explicarte paso a paso nuestro proceso.
        </p>
          <a href="como-funciona" className=" inline-flex items-center justify-center px-5 py-3  ml-12 mt-12 text-md   font-semibold rounded-md border border-purple-200 text-white bg-purple-600 hover:text-purple-600 hover:bg-white hover:border-gray-100  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Conoce más</a>
      </section>

<section className="text-left">
<div className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 mt-20 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-base text-purple-600  font-semibold tracking-wide uppercase">¿Qué ofrecemos?</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      Fotos profesionales de tu producto listas para cualquier plataforma
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
      Completamente compatible
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
              Desde cualquier lugar
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              No importa donde te encuentres, solo envíanos tu producto y nosotros nos encargamos de lo demás.
            </dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
</div>
</section>
<section className="text-left mt-4">
        <h2 className="inline-block p-3 mb-6 mt-16 text-2xl font-bold ">
          Tu nos envías tu producto, nosotros te envíamos las fotos!
        </h2>
        <p className="leading-loose px-4 text-left">
          Nos especializamos en fotograía de producto con fondos blancos para tu sitio web, tu tienda en línea, el marketplace de Amazon, Mercado Libre, Facebook y más.
          Sólo envíanos tu producto a nuestro estudio en León, Gto, México, nuestro equipo se encargará de tomar y editar las fotos y te las envíaremos una vez que estén listas.
          <br></br>

          Si te interesa trabajar con un estudio remoto pero tienes curiosidad de como funciona nuestro proceso, puedes consultar nuestra guía de compra que hemos preparado cuidadosamenta para explicarte paso a paso nuestro proceso.
        </p>
         
      </section>

<section>
<div className="bg-transparent">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 className="text-3xl font-extrabold tracking-tight md:mr-12 text-gray-900 sm:text-4xl">
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
</div>

</section>


    </Layout>
  );
}

export default IndexPage;
