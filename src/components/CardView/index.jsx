import React, { Component } from "react";
import { Card } from "antd";

const { Meta } = Card;

class CardView extends Component {
  render() {
    const { list } = this.props;
    let imgURL =
      "http://openweathermap.org/img/wn/" +
      list[0].weather.icon.substr(1) +
      "@2x.png";
    return (
      <>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={imgURL} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </>
    );
  }
}

export default CardView;
