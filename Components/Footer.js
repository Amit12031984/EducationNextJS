import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        {/* newsletter */}
        <div className="newsletter">
          <div className="container">
            <div className="row">
              <div className="col-md-9 ml-auto bg-primary py-5 newsletter-block">
                <h3 className="text-white">Subscribe Now</h3>
                <form action="#">
                  <div className="input-wrapper">
                    <input
                      type="email"
                      className="form-control border-0"
                      id="newsletter"
                      name="newsletter"
                      placeholder="Enter Your Email..."
                    />
                    <button
                      type="submit"
                      value="send"
                      className="btn btn-primary"
                    >
                      Join
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* footer content */}
        <div className="footer bg-footer section border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-8 mb-5 mb-lg-0">
                {/* logo */}
                <a className="logo-footer" href="index.html">
                  <img
                    className="img-fluid mb-4"
                    src="images/logo.png"
                    alt="logo"
                  />
                </a>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    23621 15 Mile Rd #C104, Clinton MI, 48035, New York, USA
                  </li>
                  <li className="mb-2">+1 (2) 345 6789</li>
                  <li className="mb-2">+1 (2) 345 6789</li>
                  <li className="mb-2">contact@yourdomain.com</li>
                </ul>
              </div>
              {/* company */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                <h4 className="text-white mb-5">COMPANY</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a className="text-color" href="about.html">
                      About Us
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="teacher.html">
                      Our Teacher
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="contact.html">
                      Contact
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="blog.html">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              {/* links */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                <h4 className="text-white mb-5">LINKS</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a className="text-color" href="courses.html">
                      Courses
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="event.html">
                      Events
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="gallary.html">
                      Gallary
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="faqs.html">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              {/* support */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                <h4 className="text-white mb-5">SUPPORT</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      Forums
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      Documentation
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      Language
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      Release Status
                    </a>
                  </li>
                </ul>
              </div>
              {/* support */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                <h4 className="text-white mb-5">RECOMMEND</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      WordPress
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      LearnPress
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      WooCommerce
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      bbPress
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="copyright py-4 bg-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 text-sm-left text-center">
                <p className="mb-0">Copyright © themefisher</p>
              </div>
              <div className="col-sm-5 text-sm-right text-center">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="d-inline-block p-2" href="#">
                      <i className="ti-facebook text-primary" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="d-inline-block p-2" href="#">
                      <i className="ti-twitter-alt text-primary" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="d-inline-block p-2" href="#">
                      <i className="ti-linkedin text-primary" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="d-inline-block p-2" href="#">
                      <i className="ti-instagram text-primary" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* /footer */}
    </>
  );
}
