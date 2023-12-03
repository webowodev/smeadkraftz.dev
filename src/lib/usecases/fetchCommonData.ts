import getMenus from "./getMenus";

export default async function fetchCommonData() {
  const { data: menus } = await getMenus();

  return { menus };
}
