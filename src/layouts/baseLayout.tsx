import AppContainer from "@/components/atoms/appContainer";
import NavigationHeader from "@/components/organisms/home/navigationHeader";
import { PropsWithChildren } from "react";

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavigationHeader />
      <AppContainer pt={24}>{children}</AppContainer>
    </>
  );
}
