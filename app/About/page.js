import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import "@/app/About/about.css";

const about = () => {
  return (
    <div>
      <div className="head"></div>
      <div className="box11">
        <div className="box111">
          <h1>About Ecoyaan</h1>
          <br />
          <br />
          <p>
            At Ecoyaan, we are more than just a platform. Our goal is to build a
            community of eco-conscious people who share a common vision and
            passion for a more sustainable world.
          </p>
          <br />
          <br />
          <p>
            We recognize that sustainability is a journey (as the Sanskrit word
            “yaan” suggests). To keep you motivated on this journey, on our
            platform and our social media pages, you can find:
          </p>
          <br />
          <p>
            ➼ Tips and tricks to adopt a more eco-friendly and low-waste
            lifestyle ➼Videos, posts, and quizzes on climate change and
            sustainability ➼Events and pledges that invite you to adopt a more
            sustainable lifestyle
          </p>
        </div>
        <div className="box112">
          <div className="box112-img"></div>
        </div>
      </div>
      <div className="box12">
        <div className="box12Content">
          <h1>Our Values</h1>
          <div className="box12-content">
            <div className="contentImg"></div>
            <div className="contentDesc">
              <h3> Trust</h3>
              <br /> We value the trust of our community. We strive to be
              transparent and honest in everything we do, from the content we
              share today to sourcing our products in the future.
            </div>
          </div>
        </div>
        <div className="box12Content">
          <div className="box12-content">
            <div className="contentImg"></div>
            <div className="contentDesc">
              <h3>Authenticity</h3>
              <br /> We are genuine in our mission to promote sustainability and
              environmental awareness. An authentic community of eco-conscious
              people can inspire each other on the journey towards
              sustainability.
            </div>
          </div>
        </div>
        <div className="box12Content">
          <div className="box12-content">
            <div className="contentImg"></div>
            <div className="contentDesc">
              <h3>Impact</h3>
              <br /> We measure our success by our impact on the planet and our
              community. We aim to empower our sellers and customers to make
              responsible choices that benefit their well-being and the
              well-being of others.
            </div>
          </div>
        </div>
        <div className="box12Content">
          <div className="box12-content">
            <div className="contentImg"></div>
            <div className="contentDesc">
              <h3>Fun & Engaging</h3>
              <br /> Moving towards a sustainable lifestyle and the constant
              news around climate change can be stressful. We aim to inject fun
              and creativity into everything we do, from designing our products
              to providing services.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
