import React from "react";
import { MyImage } from "components/common";

const Home = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex justify-content-center my-5 py-5">
          <MyImage src="https://productbox.dev/wp-content/uploads/2020/08/large.jpg" />
        </div>
        <div className="d-flex justify-content-center my-5 py-5">
          <h1> {process.env.REACT_APP_BRAND_NAME}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
