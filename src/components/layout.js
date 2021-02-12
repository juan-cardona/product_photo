import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className=" flex flex-col font-sans">
      <div className="h-screen flex flex-col">
      <Header/>
      <div className="flex-1 flex overflow-hidden">
      <div className="flex-1 overflow-y-scroll">
      <main className="flex-1 overflow-y-scroll w-full max-w-screen-2xl  py-8 mx-auto md:py-16">
        {children}
      </main>
      <footer className=" bg-purple-600 w-screen">
        <nav className="flex justify-around  pb-4 text-sm">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://bryant.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jose Cardona
            </a>
          </p>

          <p>
            <a
              className="font-bold text-white no-underline"
              href="https://github.com/juan-cardona"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
      </div>
      </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
