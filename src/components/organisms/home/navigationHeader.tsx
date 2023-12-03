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
import { useCategory } from "@/providers/categoryProvider";
import { Link } from "@chakra-ui/next-js";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function NavigationHeader() {
  const { colorMode } = useColorMode();

  const { categories } = useCategory();

  return (
    <Box
      bg={colorMode === "light" ? "whiteAlpha.100" : "blackAlpha.100"}
      w="100%"
      position="fixed"
      as="nav"
      style={{ backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
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

          {/* Start navigation menu */}
          {/* only show navigation menu on desktop */}
          <Stack
            direction={"row"}
            spacing={8}
            display={{ base: "none", md: "flex" }}
          >
            {categories?.map((category) => (
              <Link
                href={"/" + category.name}
                key={category.id}
                fontFamily={"mono"}
                fontWeight="bold"
                textTransform={"capitalize"}
              >
                {category.name}
              </Link>
            ))}
          </Stack>
          {/* End navigation menu */}

          <Flex alignItems={"center"}>
            <Stack alignItems="center" direction={"row"} spacing={4}>
              <ToggleColorModeButton />

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
                    {categories?.map((category) => (
                      <MenuItem
                        as={Link}
                        href={"/" + category.name}
                        key={category.id}
                        fontFamily={"mono"}
                        fontWeight="bold"
                        textTransform={"capitalize"}
                      >
                        {category.name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </Show>
            </Stack>
          </Flex>
        </Flex>
      </AppContainer>
    </Box>
  );
}
