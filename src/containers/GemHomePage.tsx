import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { ScaleLoader, ClipLoader } from "react-spinners";
import { AosAnimations } from "@/constants/aosAnimations";

const override = css`
  display: block;
`;

function GemHomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const [sendDataButtonClicked, setSendDataButtonClicked] = useState(false);
  const [dataSent, setDataSent] = useState(false);

  //#### Ajax Post contact data to Server ####
  function sendData() {
    console.log("Gem Home Page");
    setSendDataButtonClicked(true);

    let url = `https://api.gemCommerce.com/contact`;
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        mobile: mobile,
        message: message
      })
    };
    fetch(url, requestOptions)
      .then(data => data.json())
      .then(res => {
        if (res.data) {
          setDataSent(true);
        }
      });
  }

  return (
    <div>
      <section className="home-page animated fadeIn delay-.5s">
        <section id="landing">
          <div className="header wrapper">
            <div className="row">
              <div className="col-lg-7">
                <h1>
                  We help to
                  <br />
                  Implement your
                  <br />
                  Dream Web Matter
                </h1>
              </div>
            </div>
            <a className="call-button" href="tel:+016049983721">
              <i className="fas fa-phone-volume" />
              +01 6049983721
            </a>
          </div>
        </section>

        <div className="brief">
          <div data-aos="fade-in" data-aos-delay="100">
            <blockquote>
              <p>There is always a distinctive way to promote a brand</p>
            </blockquote>
          </div>
        </div>

        <div className="container">
          <section id="about" className="about">
            <div data-aos="fade-in" data-aos-delay="100">
              <h2 className="heading">About</h2>
            </div>
            <div data-aos="fade-in" data-aos-delay="200">
              <div className="content">
                <p>
                  You have a brand in your mind, and striving to implement it? or you are
                  struggling to heighten your brand, then you are in the right place.
                  Floyet will help you design your brand using the latest trends.
                </p>
                <p>
                  At Floyet, we believe there is always a distinctive way to promote a
                  brand. Reaching out to the right consumers by spending less is possible
                  with digital branding.
                </p>
                <p>
                  We use the brand management technique that uses internet branding and
                  digital marketing; online marketing to develop a brand over a range of
                  digital venues, including internet-based relationships, device-based
                  applications, or media content.
                </p>
                <p>
                  We use the brand management technique that uses internet branding and
                  digital marketing; online marketing to develop a brand over a range of
                  digital venues, including internet-based relationships, device-based
                  applications, or media content.
                </p>
                <li>We are dedicated in,</li>
                <li>
                  <i className="far fa-hand-point-right"></i>Beautifying your brands
                  digital appearance.
                </li>
                <li>
                  <i className="far fa-hand-point-right"></i>
                  Supporting you to build a mighty relationship with customers.
                </li>
                <li>
                  <i className="far fa-hand-point-right"></i>
                  Managing your business with the help of our most precisely crafted apps.
                </li>
              </div>
            </div>
          </section>
          <section id="services" className="services">
            <div data-aos="fade-in" data-aos-delay="100">
              <h2 className="heading">Services</h2>
            </div>
            <div data-aos="fade-in" data-aos-delay="200">
              <p className="heading-description">
                We are dedicated to strengthening specific areas of your brand by
                providing numerous services.
              </p>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12 item-container">
                  <div data-aos="fade-up-right">
                    <div className="item">
                      <div className="image-title">
                        <img src="/assets/img/website.png" />
                        <h4 className="title">Website</h4>
                        <p className="description">
                          We design and manage the best website for your business. You
                          don't need to worry about domain name, hosting, etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 item-container">
                  <div data-aos="fade-up-left">
                    <div className="item">
                      <div className="image-title">
                        <img src="/assets/img/mobile-app.png" />
                        <h4 className="title">Mobile Application</h4>
                        <p className="description">
                          Mobile users are spending more than 85% on apps. So creating a
                          mobile app for your brand will increase the engagement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 item-container">
                  <div data-aos="fade-up">
                    <div className="item">
                      <div className="image-title">
                        <img src="/assets/img/digital-marketing.png" />
                        <h4 className="title">Digital Marketing</h4>
                        <p className="description">
                          We help you in advertising through digital channels such as
                          social media, email, search engines, etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 item-container">
                  <div data-aos="fade-down-right">
                    <div className="item">
                      <div className="image-title">
                        <img src="/assets/img/graphics.png" />
                        <h4 className="title">Graphic designing</h4>
                        <p className="description">
                          A reputed brand requires beautifully designed visiting cards,
                          packagings, flyers, posters, notices, envelopes, letterhead,
                          etc. We can design those for you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 item-container">
                  <div data-aos="fade-down">
                    <div className="item">
                      <div className="image-title">
                        <img src="/assets/img/seo.png" />
                        <h4 className="title">SEO</h4>
                        <p className="description">
                          Are you struggling to find your business on Google? Don't worry.
                          We will help you to do some SEO.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 item-container">
                  <div data-aos="fade-down-left">
                    <div className="item">
                      <div className="image-title">
                        <img src="/assets/img/social.png" />
                        <h4 className="title">Social Media Management</h4>
                        <p className="description">
                          We monitor the social media presence of your business and make
                          it live with engaging posts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="products" className="products">
            <div data-aos="fade-in" data-aos-delay="100">
              <h2 className="heading">Products</h2>
            </div>

            <div className="content">
              <div data-aos="fade-in" data-aos-delay="200">
                <p>
                  We are powering some blogs, eCommerce websites, mobile apps, youtube
                  channels, and business management software solutions.
                </p>
              </div>
              <div data-aos="slide-right">
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-4 item">
                    <a href="https://www.techomoro.com" target="_blank">
                      <img src="/assets/img/techomoro.jpg" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-2 col-4 item">
                    <a href="https://onebest.in" target="_blank">
                      <img src="/assets/img/onebest.jpg" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-2 col-4 item">
                    <a href="https://floying.com" target="_blank">
                      <img src="/assets/img/floying.jpg" />
                    </a>{" "}
                  </div>
                  <div className="col-lg-2 col-md-2 col-4 item">
                    <a href="https://velichamapp.com" target="_blank">
                      <img src="/assets/img/velicham.png" />
                    </a>{" "}
                  </div>
                  <div className="col-lg-2 col-md-2 col-4 item">
                    <a href="https://codeariv.com" target="_blank">
                      <img src="/assets/img/codeariv.jpg" />
                    </a>{" "}
                  </div>
                  <div className="col-lg-2 col-md-2 col-4 item">
                    <a href="https://youngmenu.com" target="_blank">
                      <img src="/assets/img/youngmenu.jpg" />
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="contact">
            <h2 className="heading">Contact us</h2>
            <div className="content">
              <div className="row">
                <div className="col-lg-6 form">
                  {dataSent ? (
                    <div className="form-sent-success-message">
                      <h1>Thank you!</h1>
                      <p>
                        We will reach out to you shortly to provide more information about
                        our services.
                      </p>
                    </div>
                  ) : (
                    <div data-aos="fade-in" data-aos-delay="100">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile"
                        value={mobile}
                        onChange={e => setMobile(e.target.value)}
                      />
                      <textarea
                        rows={3}
                        className="form-control"
                        placeholder="Message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                      />

                      {sendDataButtonClicked ? (
                        <div className="sweet-loading">
                          <ScaleLoader
                            css={override}
                            color={"#141414"}
                            loading={sendDataButtonClicked}
                          />
                        </div>
                      ) : (
                        <button
                          className="btn btn-light"
                          onClick={() => sendData()}
                          disabled={!name || !(email || mobile) || !message}
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  )}
                </div>
                <div className="col-lg-6 details order-first">
                  <div data-aos="fade-in" data-aos-delay="100">
                    <div className="item">
                      <i className="fas fa-mobile-alt"></i>
                      <a href="tel:+017781230000">+01 7781230000</a>
                    </div>

                    <div className="item mobile">
                      <i className="fab fa-whatsapp"></i>
                      <a
                        href="https://wa.me/919946792650?text=Hi, I'm interested to know more about digital branding and how it will help my business.%0A%0A"
                        target="_blank"
                      >
                        +01 7781230000
                      </a>
                    </div>

                    <div className="item">
                      <i className="far fa-envelope"></i>
                      <a href="mailto:hello@gemcloud.com" target="_top">
                        hello@gemcloud.com
                      </a>
                    </div>

                    <div className="item">
                      <i className="fas fa-map-marker-alt"></i>
                      Vancouver, BC, Canada
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default GemHomePage;
