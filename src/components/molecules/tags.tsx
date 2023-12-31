import { Button, Stack } from "@chakra-ui/react";
import styles from "./tags.module.css";
import NextLink from "next/link";

interface ITagsProps {
  items: {
    title: string;
    url?: string;
  }[];
}

export default function Tags({ items }: ITagsProps) {
  return (
    <Stack spacing={2} direction={"row"} wrap={"wrap"}>
      {items.map((item, index) => (
        <Button
          as={NextLink}
          href={item.url}
          variant={"ghost"}
          key={index}
          textDecoration={"underline"}
          rel="noopener noreferrer"
          className={styles[item.title]}
        >
          {item.title}
        </Button>
      ))}
    </Stack>
  );
}
