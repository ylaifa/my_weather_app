import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import CardView from "./components/Card";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      errorMessage: "",
      city: {},
      list: []
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
          this.setState({
            city: {
              city_name: response.data.city_name,
              country_code: response.data.country_code
            },
            list: response.data.data.slice(0, 5)
          });
        })
        .catch(error => {
          this.setState({
            errorMessage: error.message
          });
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
          <CardView />
        </div>
      );
    }
    return <>{renderedView}</>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
