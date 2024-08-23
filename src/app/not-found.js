import React from "react";
import Image from "next/image";
import Error from "../../public/error-page/page-not-found.webp";
export default function Notfound() {
  return (
    <div className="container">
      <div className="bg-white">
        <div className="w-100 bg-white">
          <Image
            src={Error}
            className="img-fluid"
            width="1600"
            height="900"
            alt="Page not found"
          />
        </div>
      </div>
    </div>
  );
}
