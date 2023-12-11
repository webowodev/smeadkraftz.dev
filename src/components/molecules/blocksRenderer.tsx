import { Box, Image } from "@chakra-ui/react";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import HeadingBlock from "../atoms/blocks/headingBlock";
import { get } from "lodash";
import dynamic from "next/dynamic";
import ParagraphBlock from "../atoms/blocks/paragraphBlock";
import BulletedListBlock from "../atoms/blocks/bulletedListBlock";
import NumberedListBlock from "../atoms/blocks/numberedListBlock";

const VideoBlock = dynamic(() => import("../atoms/blocks/videoBlock"), {
  ssr: false,
});

const CodeBlock = dynamic(() => import("../atoms/blocks/codeBlock"), {
  ssr: false,
});

export default function BlocksRenderer({
  data,
}: {
  data: BlockObjectResponse[];
}) {
  const getRichPlainText = (block: BlockObjectResponse): string =>
    get(block, `${get(block, "type", "")}.rich_text.0.plain_text`, "");

  const getExternalUrl = (type: string, block: BlockObjectResponse): string =>
    get(block, `${type}.${get(block, type + ".type", "external")}.url`, "");

  const render = data.map((block) => {
    if (block.type.includes("heading")) {
      return (
        <HeadingBlock key={block.id} type={block.type}>
          {getRichPlainText(block)}
        </HeadingBlock>
      );
    }

    switch (block.type) {
      case "video":
        return (
          <VideoBlock url={getExternalUrl("video", block)} key={block.id} />
        );
      case "image":
        return (
          <Box as={"center"} w="100%" key={block.id}>
            <Image src={getExternalUrl("image", block)} alt={block.id} />
          </Box>
        );
      case "code":
        return <CodeBlock key={block.id} block={block} />;
      case "paragraph":
        return <ParagraphBlock key={block.id} block={block} />;
      case "bulleted_list_item":
        return <BulletedListBlock key={block.id} block={block} />;
      case "numbered_list_item":
        return <NumberedListBlock key={block.id} block={block} />;
      default:
        return null;
    }
  });

  return render;
}
