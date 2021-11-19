import React from "react";
import { Container, Row } from "react-bootstrap";
import useProducts from "../hooks/useProducts.js";
import Product from "./Product.js";
import Flip from "react-reveal/Flip";

const Products = () => {
  const products = useProducts();
  const count = products.length;

  return (
    <>
      {!count ? (
        <div className="text-center my-5 private-spinner py-5">
          <h6>Loading...</h6>
        </div>
      ) : (
        <Container className="mb-5">
          <Flip top cascade>
            <h2 className="text-center text-uppercase mt-5 mb-4 feature">
            LATEST EVENTS
            </h2>
            <p
              style={{ maxWidth: "650px" }}
              className="text-center mx-auto mt-3"
            >
              {" "}
              We are driven by dedication to our work, the pursuit of opportunity and commitment to the best. This is the spirit that has urged us onward from the beginning!
            </p>
          </Flip>
          <Row>
            {products?.map((product) => (
              <Product kay={product._id} product={product} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Products;
