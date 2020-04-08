import React from "react";
import TextBlock from "../TextBlock/TextBlock";
import BlockList from "../BlockList/BlockList";
import Carousel from "../Carousel/Carousel";

class FlexibleContent extends React.Component {

  choose_section(section) {
    switch(section.type) {
      case 'text_block':
        return (
          <TextBlock title={section.title} text={section.text} />
        )
        break;
      case 'block_list':
        return (
          <BlockList title={section.title} text={section.text} blocks={section.blocks} />
        )
        break;
      case 'carousel':
        return (
          <Carousel title={section.title} text={section.text} images={section.images} />
        )
        break;
      default:
        // code block
    }
  }

  render() {
    let sections = this.props.sections;
    return (
      <div>
        {sections.map((section, index) => (
          <div className="content-block" key={section.type+'_'+index}>
            {this.choose_section(section)}
          </div>
        ))}
      </div>
    );
  }
}

export default FlexibleContent;
