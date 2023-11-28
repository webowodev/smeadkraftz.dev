import NavigationHeader from "@/components/organisms/home/navigationHeader";
import { PropsWithChildren } from "react";

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavigationHeader />
      {children}
    </>
  );
}
