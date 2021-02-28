import Link from 'next/link'
import CommonHead from '../partials/common-head.js'

export default function Home() {
  return (
    <>
      <CommonHead title="Buy and Sell CryptoCurrency Securely on Internet"/>

          <main className="main-content">
              <div className="container-fluid">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <section className="market px-5 mb-5">
                          <div className="row column-reverse">
                              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 center-align">
                                  <div className="content-text">
                                      <h1>Aidos Market</h1>
                                      <p className="text-content">
                                        Aidos Market is the leading cryptocurrency exchange to trade ADK,4CC.
                                      </p>
                                      <div className="row">
                                          <div className="container-buttons mt-5">
                                              <a className="register" href="https://signin.aidosmarket.com/register">
                                                  <button className="btn login btn-blue">Register</button>
                                              </a>
                                              <a className="login" href="https://signin.aidosmarket.com">
                                                  <button className="btn login btn-white">Login</button>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 center-content">
                                  <img src="images/picture_aidos_market.svg" loading="lazy" alt="Aidos Market"/>
                              </div>
                          </div>
                      </section>
          {/*             <section className="unique p-5">
                          <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 center-content">
                                  <img src="images/picture_unique_approach.svg" loading="lazy" alt="Aidos Unique">
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 center-align">
                                  <div className="content-text">
                                      <h2>A Unique Approach, A Unique Team</h2>
                                      <p className="text-content">
                                          You can explore the features that we provide with fun and have their own functions each
                                          feature.
                                      </p>
                                      <div className="list">
                                          <ul>
                                              <li>
                                                  <img src="images/list_icon.svg" loading="lazy" alt="list icon"> Our Security
                                                  Team
                                              </li>
                                              <li>
                                                  <img src="images/list_icon.svg" loading="lazy" alt="list icon"> Ultra-Secure
                                                  Bitcoin Storage
                                              </li>
                                              <li>
                                                  <img src="images/list_icon.svg" loading="lazy" alt="list icon"> Constant
                                                  Monitoring
                                              </li>
                                              <li>
                                                  <img src="images/list_icon.svg" loading="lazy" alt="list icon"> Resetting 2FA
                                              </li>
                                              <li>
                                                  <a className="more-info" href="/more-info">More info here</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section> */}
                      <section className="our-product p-5">
                          {/* <div className="our-product-title">
                              <h3>
                                  Our product
                              </h3>
                              <p className="subtitle">
                                  Ea voluptatem nobis nihil perspiciatis animi repellendus qui qui esse. Recusandae molestias
                                  praesentium hic odit quisquam quae ullam. At fugiat voluptatum voluptas saepe cupiditate iusto
                                  quisquam. Nobis incidunt voluptatem.
                              </p>
                          </div> */}
                          <div className="row first column-reverse">
                              <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12 my-5 text-number-content">
                                  <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 my-5 text-number">
                                          1
                                      </div>
                                      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 my-5 text-content">
                                          <h4 className="title">A Unique Exchange With a Unique Background</h4>
                                          <div className="subtitle my-4">We do not List coins just to make money, We will list only
                                              the ones with potential, unique tech and business plan. We will never ask for money
                                              to list coins.
                                          </div>
                                          <Link href="/our-security">
                                              <a className="more-info">More info here</a>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 my-5 image-content">
                                  <img src="images/picture_exchange.svg" loading="lazy" alt="Aidos"/>
                              </div>
                          </div>
                          <div className="row second">
                              <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 my-5 image-content">
                                  <img src="images/picture_terms.svg" loading="lazy" alt="Aidos"/>
                              </div>
                              <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12 my-5 text-number-content">
                                  <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 my-5 text-number">
                                          2
                                      </div>
                                      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 my-5 text-content">
                                          <h4 className="title">Terms of Service</h4>
                                          <div className="subtitle my-4">You should read the entire Terms of Use carefully before you
                                              use this web site ("aidosmarket.com") or any of the services of this Site.
                                          </div>
                                          <a className="more-info" href="/terms-of-use.html">More info here</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row last column-reverse">
                              <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12 my-5 text-number-content">
                                  <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 my-5 text-number">
                                          3
                                      </div>
                                      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 my-5 text-content">
                                          <h4 className="title">How Does Aidos Market Work?</h4>
                                          <div className="subtitle my-4">
                                              To start trading cryptocurrency on Aidos Market, simply go to the registration page and
                                              fill in a brief registration form. Then log in with the user name and
                                              password and you are set!
                                          </div>
                                          <Link href="/how-it-works">
                                            <a className="more-info">More info here</a>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 my-5 image-content">
                                  <img src="images/picture_market.svg" loading="lazy" alt="Aidos"/>
                              </div>
                          </div>
                      </section>
                      <section className="counters p-5">
                          <div className="container-counters p-4">
                              <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 p-5 counters-box users">
                                      <div className="row">
                                          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 image-box">
                                              <img src="images/user.png" loading="lazy" alt="Aidos users"/>
                                          </div>
                                          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                              <div className="title">
                                                  +50K
                                              </div>
                                              <div className="subtitle">
                                                  Registered Users on Platform
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 p-5 counters-box entry">
                                      <div className="row">
                                          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 image-box">
                                              <img src="images/entry.png" loading="lazy" alt="Aidos entry"/>
                                          </div>
                                          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                              <div className="title">
                                                  2017
                                              </div>
                                              <div className="subtitle">
                                                  Market Enrty Year
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 p-5 counters-box customers">
                                      <div className="row">
                                          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 image-box">
                                              <img src="images/customers.png" loading="lazy" alt="Aidos customers"/>
                                          </div>
                                          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                              <div className="title">
                                                  0%
                                              </div>
                                              <div className="subtitle">
                                                  Customer’s Funds Lost
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                  </div>
              </div>
          </main>

      </>
  )
}
