import React from "react";

class TextBlock extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.text}} />
      </div>
    );
  }
}

export default TextBlock;
