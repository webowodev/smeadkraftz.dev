import { Card, CardBody, Skeleton, Stack, Text } from "@chakra-ui/react";
import LazyImage from "../atoms/lazyImage";
import Link from "../atoms/link";
import ITag from "@/lib/entities/tag";
import dynamic from "next/dynamic";

const Tags = dynamic(() => import("../molecules/tags"), {
  ssr: false,
  loading: () => (
    <Stack spacing={2} direction={"row"} wrap={"wrap"}>
      <Skeleton width={"73px"} height="40px" rounded={"full"} />
      <Skeleton width={"73px"} height="40px" rounded={"full"} />
      <Skeleton width={"73px"} height="40px" rounded={"full"} />
    </Stack>
  ),
});

export type IArticleCardProps = {
  title: string;
  url: string;
  imageUrl?: string | null;
  description?: string;
  tags?: ITag[];
};

export default function ArticleCard({
  title,
  url,
  imageUrl,
  description,
  tags,
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
          <Stack spacing={4}>
            <Text
              noOfLines={2}
              fontFamily={"heading"}
              fontWeight="bold"
              fontSize={18}
            >
              {title}
            </Text>
            <Text noOfLines={3} fontWeight={"normal"}>
              {description}
            </Text>
            <Tags items={tags ?? []} />
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
}
