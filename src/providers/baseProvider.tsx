"use client";

import { PropsWithChildren, createContext, useContext } from "react";
import { IMenus } from "../lib/entities/menu";

interface IBaseContext {
  menus?: IMenus;
}

const BaseContext = createContext<IBaseContext>({
  menus: [],
});

export const useBase = () => useContext(BaseContext);

const BaseProvider = ({
  children,
  menus,
}: PropsWithChildren<{
  menus?: IMenus;
}>) => {
  return (
    <BaseContext.Provider value={{ menus: menus ?? [] }}>
      {children}
    </BaseContext.Provider>
  );
};

export default BaseProvider;
