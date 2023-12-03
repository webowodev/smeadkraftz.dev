import getCategories from "./category/getCategories";

export default async function fetchCommonData() {
  const { data: categories } = await getCategories();

  return { categories };
}
