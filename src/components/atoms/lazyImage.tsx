import toBase64 from "@/common/toBase64";
import Image, { IImage } from "./image";
import shimmer from "@/common/shimmer";
import { useColorModeValue } from "@chakra-ui/react";

export default function LazyImage(props: IImage) {
  const bg = useColorModeValue("#ddd", "#07090E");
  const fg = useColorModeValue("#eee", "#181A1F");
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmer(700, 475, bg, fg)
      )}`}
      style={{ pointerEvents: "none" }}
      {...props}
    />
  );
}
