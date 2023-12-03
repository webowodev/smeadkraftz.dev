import React, { PropsWithChildren, createContext, useContext } from "react";
import { ICategories } from "../lib/entities/category";

interface ICategoryContext {
  categories?: ICategories;
}

const CategoryContext = createContext<ICategoryContext>({
  categories: [],
});

export const useCategory = () => useContext(CategoryContext);

const CategoryProvider = ({
  children,
  categories,
}: PropsWithChildren<{
  categories?: ICategories;
}>) => {
  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
