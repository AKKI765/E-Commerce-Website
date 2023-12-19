import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.png"
            alt="contactus"
            style={{ height: "500px", marginTop: "100px" }}
          />
        </div>
        <div className="col-md-4 text-light" style={{marginTop: "100px"}}>
          <ol>
            <li>We prioritize your privacy and are dedicated to protecting your personal information.</li>
            <li>We collect and use your data solely for order processing, enhancing your shopping experience, and providing relevant updates and offers.</li>
            <li>The information we collect may include your name, email address, shipping address, and payment details.</li>
            <li>We handle your data with the utmost care and confidentiality, ensuring that it is not sold or shared with third parties without your consent, except when necessary for order fulfillment or legal compliance.</li>
            <li>Our website employs industry-standard security measures to safeguard your data from unauthorized access or disclosure.</li>
            <li>By using our website, you agree to the terms of our Privacy Policy.</li>
            <li>If you have any concerns or questions regarding your privacy, our dedicated support team is available to assist you.</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
