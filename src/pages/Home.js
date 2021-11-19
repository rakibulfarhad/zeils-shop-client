import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../components/Product.js";
import Slider from "../components/Slider.js";
import useProducts from "../hooks/useProducts.js";
import "./../assets/css/home.css";
import collection1 from "./../assets/images/collection/1.jpg";
import collection2 from "./../assets/images/collection/2.jpg";
import collection3 from "./../assets/images/collection/3.jpg";
import collection4 from "./../assets/images/collection/4.jpg";
import Flip from "react-reveal/Flip";
import Testimonials from "../components/Testimonials.js";
const Home = () => {
  const products = useProducts();
  return (
    <div>
      <Slider />
      <Container className="collections my-5 mx-auto">
        <Flip bottom cascade>
          <h2 className="text-center feature">SHOP BY BRAND</h2>
        </Flip>
        <p
          style={{ maxWidth: "650px" }}
          className="text-center mb-2 mx-auto mt-3"
        >
          
            The company is structured with all logical departments headed by skilled professionals from a leading footwear multinational company in the country !
          
        </p>
        <Row className="mx-0">
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img">
              <img className="img-fluid ms-0 ps-0" src={collection1} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0" src={collection2} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0" src={collection3} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0" src={collection4} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Flip bottom cascade>
          <h2 className="text-center feature">OUR FEATURED CATEGORIES</h2>
          <p style={{ maxWidth: "650px" }} className="text-center mx-auto mt-3">
            {" "}
            Properly fitting & supportive footwear range by Scholl for special foot care!
          </p>
        </Flip>
        {!products.length ? (
          <div className="text-center my-5 py-5">
            <h6>Loading...</h6>
          </div>
        ) : (
          <Row>
            {products?.slice(0, 6)?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
        <div className="text-center">
          <Link to="/products">
            <button className="btn btn-primary mb-5 mt-3">
              Explore all products
            </button>
          </Link>
        </div>
      </Container>
      <Testimonials />
    </div>
  );
};

export default Home;
