import React from "react";
import Img from "gatsby-image";

import "./Carousel.css";

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.text}} />

        {this.props.images.map((image, index) => (
          <div key={index}>
            <Img fluid={image.image.childImageSharp.fluid} alt={image.alt} />
          </div>
        ))}
      </div>
    );
  }
}

export default Carousel;
