"use client";
import React, { useState, useEffect } from "react";
import accordionData from "../../../../data/faqs/faqs.json";

export default function Accordion() {
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    // By default the first accordion will be open
    if (accordionData.length > 0) {
      setOpenAccordion(accordionData[0].id);
    }
  }, []);

  // switching between accordion
  const handleAccordionToggle = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-black text-white mw-100 px-4">
      <div className="pt-5 pb-3 mb-1 accordion mb-4 mx-auto w-65">
        <h4 className="faq-header">Frequently Asked Question </h4>
      </div>
      {/* mapping the accordion data from json, if the no. of accordion will increase 
      then it will only have to add data in json file */}
      {accordionData.map((item) => (
        <div className="w-65 my-0 mx-auto" key={item.id}>
          <div className="border-top py-4">
            <button
              onClick={() => handleAccordionToggle(item.id)}
              // handlling the open and close icon
              className={`w-100 text-start d-flex justify-content-between items-center acrdn-btn ${
                openAccordion === item.id ? "open" : "closed"
              }`}
            >
              {item.title}
            </button>
            {openAccordion === item.id && (
              <div
                className="mt-2 ardn-font-size text-justify"
                // for getting the html element ('p' tag) data we need to use "dangerouslySetInnerHTML"
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
