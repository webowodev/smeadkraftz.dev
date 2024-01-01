import { List, ListItem, Stack, Text } from "@chakra-ui/react";
import LazyImage from "../atoms/lazyImage";
import { IPosts } from "@/lib/entities/post";

type MorePostsListProps = {
  posts: IPosts;
};

export default function MorePostsList({ posts }: MorePostsListProps) {
  return (
    <List>
      {posts.map((post) => (
        <ListItem key={post.id}>
          <Stack direction={"row"} alignItems={"center"}>
            <LazyImage
              src="/images/avatar.jpeg"
              width={12}
              height={12}
              objectFit={"cover"}
              alt="avatar"
            />
            <Text>Post title</Text>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}
