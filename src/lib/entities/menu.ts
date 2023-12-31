import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type IMenu = {
  id: string;
  name: string;
  slug: string;
  url: string;
  description?: string;
  imageUrl?: string;
  lastEditedTime?: string;

  blocks?: BlockObjectResponse[];
};

export type IMenus = IMenu[];
