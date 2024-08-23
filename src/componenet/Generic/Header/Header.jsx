import React from "react";
import Image from "next/image";
import headerData from "../../../../data/header/headerData.json";

export default function Header() {
  return (
    <div className="navStyle">
      <div className="my-0 mx-auto text-center mw-100 w-65 px-3 bdr-bottom">
        <nav className="navbar navbar-expand-lg text-white p-0">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Image
                src={headerData.signInMob.src}
                alt={headerData.signInMob.alt}
                width={headerData.signInMob.width}
                height={headerData.signInMob.height}
              />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                {/* mapping navbar data to make code clean, manageable, scalable and reduce
                code comlexity */}
                {headerData.menuItems.map((item, index) => (
                  <li className="nav-item dropdown" key={index}>
                    <a
                      className="nav-link dropdown-toggle nav-clr"
                      href="#"
                      id={`navbarDropdown${index}`}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {item.title}
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby={`navbarDropdown${index}`}
                    >
                      {item.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a className="dropdown-item" href={link.url}>
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
                <li className="nav-item signIn">
                  <a className="nav-link text-uppercase">
                    <Image
                      className="me-2 img-fluid w-25"
                      src={headerData.signIn.src}
                      width={headerData.signIn.width}
                      height={headerData.signIn.height}
                      alt={headerData.signIn.alt}
                    />
                    {headerData.signIn.text}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
