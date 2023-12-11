import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const ParagraphBlock = ({ block }: { block: any }) => {
  const renderTextElements = () => {
    return block.paragraph.rich_text.map((textElement: any, index: number) => {
      const { content, link } = textElement.text;

      if (link) {
        return (
          <Link key={index} href={link?.url} isExternal>
            {content}
          </Link>
        );
      }

      return (
        <Text as={"span"} key={index}>
          {content}
        </Text>
      );
    });
  };

  return (
    <Box as={"p"} mt={"1.25rem"}>
      {renderTextElements()}
    </Box>
  );
};

export default ParagraphBlock;
