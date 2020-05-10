import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

// const apikey = "124d36c5bbebe70fb4caa75b0a1e9b8a";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    changeStatutLoading();
  }, [isLoading]);

  const changeStatutLoading = () => {
    if (navigator.geolocation.getCurrentPosition) {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <Row type="flex" align="middle">
          <Col span={24}>
            <Loader type="Circles" color="#00BFFF" height={80} width={80} />
          </Col>
          <Col span={10}>
            Veuillez patienter, nous sommes entrain de vous localiser...
          </Col>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <div>Hello World !!</div>
      </>
    );
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));
