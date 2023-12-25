import { Stack } from "@chakra-ui/react";
import SocialButton from "../atoms/socialButton";

export default function SocialLinks() {
  return (
    <Stack direction={"row"} spacing={3}>
      <SocialButton url="https://twitter.com/daemswibowo" />
      <SocialButton url="https://facebook.com/daemswibowo" />
      <SocialButton url="https://instagram.com/daemswibowo" />
      <SocialButton url="https://github.com/daemswibowo" />
      <SocialButton url="https://dimaswibowo.medium.com" />
    </Stack>
  );
}
