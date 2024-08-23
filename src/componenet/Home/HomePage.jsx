import React from "react";
import Image from "next/image";
import homeData from "../../../data/home/homeData.json";

export default function HomePage() {
  return (
    <>
      <div className="w-100 my-0 mx-auto home">
        <div className="banner-bg py-5 text-center text-white">
          <h1 className="my-5 mb-0 py-5 pb-2 ltr-spacing text-center text-uppercase banner-text">
            {homeData.bannerlData[0].header}
          </h1>
          <p className="mb-5 pb-5">{homeData.bannerlData[0].content}</p>
        </div>
      </div>
      <section className="section-2 mw-100 px-3">
        <div className="my-0 mx-auto text-center text-white w-65 px-3">
          <div className="row">
            <div className="my-5 col-md-5 col-12 text-start">
              <div className="bdr-bottom">
                <Image
                  className="img-fluid pb-4 d-none d-md-block"
                  src={homeData.realDealData[0].img}
                  alt={homeData.realDealData[0].alt}
                  width={homeData.realDealData[0].width}
                  height={homeData.realDealData[0].height}
                />
                <h3 className="rdIcon">{homeData.realDealData[0].header}</h3>
                <p>{homeData.realDealData[0].content}</p>
              </div>
              <div className="py-5 d-none d-md-block">
                <h5>{homeData.mvcSubsData[0].header}</h5>
                {/* Timeline start */}
                <div className="timeline">
                  {homeData.mvcSubsData[0].timelineData.map((item, index) => (
                    <div className="timeline-item" key={index}>
                      <div className="timeline-number">{item.tl}</div>
                      <div className="timeline-content">
                        <p
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Timeline end */}
                <div className="row align-items-center">
                  <div className="col-md-6 col-12">
                    <button className="btn btn-danger">
                      Get Started &rarr;
                    </button>
                  </div>
                  <div className="col-md-6 col-12">
                    <a className="learn-more" href="#">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card Section start */}
            <div className="my-md-5 my-0 col-md-7 col-12">
              <div className="row text-start">
                {homeData.cardData.map((card, index) => (
                  <div className={card.styles} key={index}>
                    <div className="dark_bg">
                      <Image
                        className="img-fluid"
                        src={card.img}
                        alt={card.alt}
                        width={parseInt(card.width)}
                        height={parseInt(card.height)}
                      />
                      <p className="golden-clr pt-3 mb-0">{card.header}</p>
                      <p dangerouslySetInnerHTML={{ __html: card.content }} />
                    </div>
                  </div>
                ))}
                <div className="col-12 mt-3">
                  <p
                    className="note"
                    dangerouslySetInnerHTML={{
                      __html: homeData.noteData[0].content,
                    }}
                  />
                </div>
              </div>
            </div>
            {/* Card Section end */}
            <div className="py-5 d-block d-md-none text-start">
              <h5>{homeData.mvcSubsData[0].header}</h5>
              {/* Mobile Timeline start */}
              <div className="timeline">
                {homeData.mvcSubsData[0].timelineData.map((item, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-number">{item.tl}</div>
                    <div className="timeline-content">
                      <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Mobile Timeline end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
