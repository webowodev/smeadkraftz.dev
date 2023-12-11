"use client";
import {
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import AppContainer from "../../atoms/appContainer";
import ToggleColorModeButton from "@/components/atoms/toggleColorModeButton";
import Logo from "@/components/atoms/logo";
import { useBase } from "@/providers/baseProvider";
import { Link } from "@chakra-ui/next-js";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function NavigationHeader() {
  const { colorMode } = useColorMode();

  const { menus } = useBase();

  return (
    <Box
      bg={colorMode === "light" ? "whiteAlpha.100" : "blackAlpha.300"}
      w="100%"
      position="fixed"
      as="nav"
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
      zIndex={1}
    >
      <AppContainer>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Stack
            as={Link}
            href="/"
            alignItems={"start"}
            spacing={2}
            direction={"row"}
            color={colorMode === "light" ? "black" : "white"}
            _hover={{
              color: colorMode === "light" ? "black" : "white",
            }}
          >
            <Box>
              <Logo color={colorMode === "light" ? "black" : "white"} />
            </Box>
            <Text fontFamily={"mono"} fontWeight="bold">
              DIMAS WIBOWO
            </Text>
          </Stack>

          {/* Start navigation menu */}
          {/* only show navigation menu on desktop */}
          <Stack
            direction={"row"}
            spacing={8}
            display={{ base: "none", md: "flex" }}
          >
            {menus?.map((menu) => (
              <Link
                href={menu.url}
                key={menu.id}
                fontFamily={"mono"}
                fontWeight="bold"
                textTransform={"capitalize"}
                color={colorMode === "light" ? "black" : "white"}
                _hover={{
                  color: colorMode === "light" ? "black" : "white",
                  textDecoration: "underline",
                }}
              >
                {menu.name}
              </Link>
            ))}
          </Stack>
          {/* End navigation menu */}

          <Flex alignItems={"center"}>
            <Stack alignItems="center" direction={"row"} spacing={4}>
              <ToggleColorModeButton />

              {/* only show menu button on mobile */}
              {menus?.length ? (
                <Show breakpoint="(max-width: 767px)">
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      cursor={"pointer"}
                      minW={0}
                    >
                      <Icon as={HamburgerIcon} />
                    </MenuButton>
                    <MenuList alignItems={"center"}>
                      {menus?.map((menu) => (
                        <MenuItem
                          as={Link}
                          href={menu.slug}
                          key={menu.id}
                          fontFamily={"mono"}
                          _active={{ bg: "none" }}
                          fontWeight="bold"
                          textTransform={"capitalize"}
                        >
                          {menu.name}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </Show>
              ) : null}
            </Stack>
          </Flex>
        </Flex>
      </AppContainer>
    </Box>
  );
}
