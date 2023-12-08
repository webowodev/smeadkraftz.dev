import { get } from "lodash";

export const getProperty = (page: any, name: String) => {
  const property = get(page, "properties." + name);
  const type = get(property, "type");
  return get(property, `${type}`);
};

export const getPlainTextProperty = (page: any, name: String) => {
  return get(getProperty(page, name), "[0].plain_text", "");
};

export const getCoverUrl = (page: any) => {
  const cover = get(page, "cover");
  if (cover) {
    const type = get(cover, "type");
    return get(cover, `${type}.url`);
  }
  return null;
};
