import Link from 'next/link'

const Footer = () => (
  <footer className="footer p-5">
    <div className="row column-reverse">
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 first">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <a className="navbar-brand" href="/">
                        <img src="images/logo.png" loading="lazy" alt="Aidos"/>
                    </a>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p className="text my-3">
                        Aidos Market is the leading cryptocurrency exchange to trade ADK,4CC.
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="list-icons">
                        {/* <a className="navbar-brand" href="/">
                            <img src="images/Facebook.svg" loading="lazy" alt="Facebook">
                        </a> */}
                        <a className="navbar-brand" href="https://twitter.com/aidosmarket">
                            <img src="images/Twitter.svg" loading="lazy" alt="Twitter"/>
                        </a>
                        {/* <a className="navbar-brand" href="/">
                            <img src="images/Instagram.svg" loading="lazy" alt="Instagram">
                        </a> */}
                    </div>
                    <div className="rights">
                        ©2021 Aidos Market All rights reserved
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 second">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 footer-links">
                    <div className="title">
                        Info
                    </div>
                    <div className="subtitle my-3">
                        <a className="footer-link" href="https://trade.aidosmarket.com">Trade</a>
                    </div>
                    <div className="subtitle my-3">
                        <Link href="/our-security">
                                <a className="footer-link">Security</a>
                        </Link>
                    </div>
                    <div className="subtitle my-3">
                        <Link href="/api-docs">
                                <a className="footer-link">API Documentation</a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 footer-links">
                    <div className="title">
                        Legal
                    </div>
                    <div className="subtitle my-3">
                        <Link href="/terms-of-use">
                            <a className="footer-link">Terms of use</a>
                        </Link>
                    </div>
                    <div className="subtitle my-3">
                        <Link href="/privacy-policy">
                        <a className="footer-link">Privacy Policy</a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 footer-links">
                    <div className="title">
                        Contacts
                    </div>
                    <div className="subtitle my-3">
                        <a className="footer-link" href="https://aidosmarket.freshdesk.com/support/home">Support</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </footer>
)

export default Footer