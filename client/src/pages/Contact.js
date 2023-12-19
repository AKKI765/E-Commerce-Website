import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.png"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4 text-light">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            For any query and info feel free to contact anytime <br/> We  are avaialible 24X7
          </p>
          <p className="mt-3">
            <BiMailSend /> : help@shopdeals.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 03244 - 215 143
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
