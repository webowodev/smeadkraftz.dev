import React from "react";
import { Link } from "@chakra-ui/next-js";

const NumberedListBlock: React.FC<{ block: any }> = ({ block }) => {
  const renderTextElements = () => {
    return block.numbered_list_item.rich_text.map(
      (textElement: any, index: number) => {
        const { content, link } = textElement.text;

        if (link) {
          return (
            <Link key={index} href={link.url} isExternal>
              {content}
            </Link>
          );
        }

        return content;
      }
    );
  };

  return <li>{renderTextElements()}</li>;
};

export default NumberedListBlock;
