import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.png"
            alt="Contact Us"
            style={{ marginTop: "150px", maxWidth: "600px", maxHeight: "500px" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify text-light" style={{ marginTop: "150px" }}>
          Welcome to our online store! We are a premier e-commerce platform committed to providing you with a seamless shopping experience. At ShopDeals, we understand that the world of online shopping can be overwhelming, so we strive to simplify the process and bring you a curated selection of high-quality products. Whether you're searching for trendy fashion pieces, cutting-edge electronics, stylish home decor, or unique gifts, we've got you covered. Our team of passionate experts scours the market to handpick each item, ensuring that only the best makes it into our inventory. We take pride in our exceptional customer service and guarantee your satisfaction with every purchase. With secure payment options, fast shipping, and a hassle-free return policy, shopping with us is both convenient and enjoyable. Join us on this exciting journey and discover the perfect products that enhance your life.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
