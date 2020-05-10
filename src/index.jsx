import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const apikey = "124d36c5bbebe70fb4caa75b0a1e9b8a";

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
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        <p>Veuillez patienter, nous sommes entrain de vous localiser...</p>
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
