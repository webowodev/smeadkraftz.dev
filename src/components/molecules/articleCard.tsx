import { Link } from "@chakra-ui/next-js";
import { Card, CardBody, Text } from "@chakra-ui/react";
import LazyImage from "../atoms/lazyImage";

export type IArticleCardProps = {
  title: string;
  url: string;
  imageUrl?: string | null;
  description?: string;
};

export default function ArticleCard({
  title,
  url,
  imageUrl,
  description,
}: IArticleCardProps) {
  return (
    <Link href={url} _hover={{ textDecoration: "none" }}>
      <Card>
        {imageUrl ? (
          <LazyImage
            borderTopRadius={8}
            src={imageUrl}
            width={375}
            height={200}
            objectFit="cover"
            draggable={false}
            style={{ pointerEvents: "none" }}
            alt={title}
          />
        ) : null}
        <CardBody>
          <Text
            noOfLines={2}
            fontFamily={"heading"}
            fontWeight="bold"
            fontSize={18}
            mb={2}
          >
            {title}
          </Text>
          <Text noOfLines={3} fontWeight={"normal"}>
            {description}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
}
