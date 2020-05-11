import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Meteo from "./components/Meteo";

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
    const apikey = "4ca67572e10349009eeed7f075392fbc";
    console.log("hello");

    navigator.geolocation.getCurrentPosition(position => {
      var coord = position.coords;

      fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?lat=${coord.latitude}&lon=${coord.longitude}&key=${apikey}`
      )
        .then(response => response.json())
        .then(response => {
          console.log(response);
          this.setState({
            city: {
              city_name: response.city_name,

              country_code: response.country_code
            },
            list: response.data.slice(0, 5)
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
    const { isLoading, list } = this.state;
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
          <Meteo list={list} />
        </div>
      );
    }
    return <>{renderedView}</>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
