import React from "react";

const Main = ({ children, pageTitle }) => {
  return (
    <div className="flex justify-center md:px-[25%] px-8">
      <div className="flex justify-center items-center w-full text-black dark:text-white pt-28 md:pt-40">
        <div className="w-full">
          {pageTitle && (
            <h1 className="text-4xl text-amber-400 underline underline-offset-8 font-extrabold mb-8">
              {pageTitle}
            </h1>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Main;
