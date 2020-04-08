import React from "react";

import "./BlockList.css";

class BlockList extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.text}} />

        {this.props.blocks.map(block => (
          <div key={block.title} className="block">
            <h3>{block.title}</h3>
            <div dangerouslySetInnerHTML={{__html: block.text}} />
          </div>
        ))}
      </div>
    );
  }
}

export default BlockList;
