import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("update isLoading");
  }, [isLoading]);

  const changeLoadingStaut = () => {
    setIsLoading(false);
    console.log(isLoading);
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
