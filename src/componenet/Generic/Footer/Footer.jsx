import React from "react";

export default function Footer() {
  return (
    <>
      <div className="my-0 mx-auto text-center py-5 mw-100 w-65 d-md-none d-block bg-black">
        <div className="px-4">
          <button className="btn d-block w-100 bg-danger text-white">
            Get Started &rarr;
          </button>
          <p className="note pt-2">
            Marcus MVP is only available for use in our Mobile App.
          </p>
        </div>
      </div>
    </>
  );
}
