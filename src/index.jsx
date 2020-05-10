import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    };
  }

  componentDidMount = () => {
    const apikey = "124d36c5bbebe70fb4caa75b0a1e9b8a";
    console.log("hello");

    navigator.geolocation.getCurrentPosition(position => {
      var coord = position.coords;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coord.latitude}&lon=${coord.longitude}&appid=${apikey}`
      )
        .then(response => response.json())
        .then(response => {
          console.log(response);
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    });
  };

  render() {
    let renderedView;
    const { isLoading } = this.state;
    if (isLoading) {
      renderedView = (
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
      renderedView = (
        <div>
          <h3>Hello World !!</h3>
        </div>
      );
    }
    return <>{renderedView}</>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
