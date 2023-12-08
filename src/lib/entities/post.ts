import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type IPost = {
  id: string;
  title: string;
  slug: string;
  date: string;
  description: string;
  imageUrl?: string | null;
  blocks?: BlockObjectResponse[];
};

export type IPosts = IPost[];
