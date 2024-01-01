import { Button, Stack } from "@chakra-ui/react";
import styles from "./tags.module.css";
import ITag from "@/lib/entities/tag";
import Link from "../atoms/link";

interface ITagsProps {
  items: ITag[];
}

export default function Tags({ items }: ITagsProps) {
  return (
    <Stack spacing={2} direction={"row"} wrap={"wrap"}>
      {items.map((item, index) => (
        <Button
          as={Link}
          href={item.url ?? "#"}
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
