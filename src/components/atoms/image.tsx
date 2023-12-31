"use client";
import { ImageProps, chakra } from "@chakra-ui/react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "blurDataURL",
      "placeholder",
      "objectFit",
      "lazy",
      "loader",
      "fill",
      "sizes",
      "quality",
      "priority",
      "unoptimized",
      "onLoadingComplete",
      "onLoad",
      "onError",
      "loading",
      "style",
      "srcSet",
      "decoding",
      "dragable",
    ].includes(prop),
});

export type IImage = Omit<ImageProps, "src" | "alt" | "width" | "height"> &
  NextImageProps;

export default Image;
