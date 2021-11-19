import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./../assets/css/footer.css";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
    <>
      <div className="footer-top pb-4">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                
                <h5 className="text-muted mt-5">Sign up for our Newsletter</h5>
                <form className="d-flex">
                  <input
                    placeholder="Enter your email"
                    className="form-control rounded-2"
                    type="text"
                  />
                  <button className="btn rounded-2 btn-info">Subscribe</button>
                </form>
                
                <div className="my-3">
                  <ul className="social-icons">
                    <li>
                      <a href="/d">
                        <i class="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/d">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/d">
                        <i class="fab fa-twitter-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Zoom>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">INFO</h4>
                <ul className="information">
                  <li>
                    <a href="/home">TERMS & CONDITIONS</a>
                  </li>
                  <li>
                    <a href="/home">Payment Options</a>
                  </li>
                  <li>
                    <a href="/home">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/home">Refund Policy</a>
                  </li>
                </ul>
              </Zoom>
            </Col>

            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">CUSTOMER SEBA</h4>
                <ul className="information">
                  <li>
                    <a href="/home">FAQs</a>
                  </li>
                  <li>
                    <a href="/home">Store Locator</a>
                  </li>
                  <li>
                    <a href="/home">Contact Info</a>
                  </li>
                  <li>
                    <a href="/home">Delivery</a>
                  </li>
                </ul>
              </Zoom>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">Contact us</h4>
               
                <ul className="information contact-info">
                  <li>
                    Laksham,Cumilla, Bangladesh
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    Official: zeils@gmail.com
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    Helpline: +8801999-111222
                  </li>
                </ul>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <p className="text-center">Copyright &copy; All reserved</p>
      </div>
    </>
  );
};

export default Footer;
