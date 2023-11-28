import { Box, Flex, Stack, Text, useColorMode } from "@chakra-ui/react";
import AppContainer from "../../atoms/appContainer";
import ToggleColorModeButton from "@/components/atoms/toggleColorModeButton";
import Logo from "@/components/atoms/logo";

export default function NavigationHeader() {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "whiteAlpha.100" : "blackAlpha.100"}
      w="100%"
      position="fixed"
      as="nav"
      style={{ backdropFilter: "blur(4px)" }}
      zIndex={1}
    >
      <AppContainer>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Stack alignItems={"start"} spacing={2} direction={"row"}>
            <Box>
              <Logo color={colorMode === "light" ? "black" : "white"} />
            </Box>
            <Text fontFamily={"mono"} fontWeight="bold">
              DIMAS WIBOWO
            </Text>
          </Stack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <ToggleColorModeButton />

              {/* <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu> */}
            </Stack>
          </Flex>
        </Flex>
      </AppContainer>
    </Box>
  );
}
