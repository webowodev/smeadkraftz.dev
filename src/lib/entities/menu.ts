import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type IMenu = {
  id: string;
  name: string;
  url: string;
  description?: string;
  blocks?: BlockObjectResponse[];
};

export type IMenus = IMenu[];
