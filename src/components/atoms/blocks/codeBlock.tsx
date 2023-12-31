"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  useClipboard,
  useColorMode,
} from "@chakra-ui/react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomOneLight,
  atomOneDarkReasonable,
} from "react-syntax-highlighter/dist/esm/styles/hljs"; // Choose a style

const CodeBlock = ({ block }: { block: any }) => {
  const { colorMode } = useColorMode();
  const { code } = block;
  const [isCopied, setIsCopied] = useState(false);
  const { onCopy } = useClipboard(
    code.rich_text.map((text: any) => text.text.content).join("")
  );

  const handleCopyClick = () => {
    onCopy();
    setIsCopied(true);

    // Reset the "Copied" state after a brief delay
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Box
      my={4}
      w="100%"
      position="relative"
      overflow="hidden"
      _hover={{
        // Show copy button on hover
        ".copy-button": { opacity: 1 },
      }}
    >
      <Text
        bg="teal.500"
        color="white"
        fontSize="sm"
        p={1}
        textAlign="right"
        borderTopRightRadius="8px"
        borderBottomLeftRadius="8px"
        position="absolute"
        top={0}
        left={0}
        zIndex="2"
      >
        {code.language}
      </Text>
      <Button
        className="copy-button"
        position="absolute"
        top={2}
        right={2}
        size="sm"
        onClick={handleCopyClick}
        colorScheme="teal"
        zIndex="1"
        opacity={0} // Initially hide the copy button
        transition="opacity 0.3s"
      >
        {isCopied ? "Copied!" : "Copy"}
      </Button>
      <SyntaxHighlighter
        customStyle={{
          paddingTop: "2rem",
        }}
        showLineNumbers
        language={code.language}
        style={colorMode === "dark" ? atomOneDarkReasonable : atomOneLight} // Choose a style
      >
        {code.rich_text.map((text: any) => text.text.content).join("")}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeBlock;
