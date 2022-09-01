import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { List } from "phosphor-react";
import React from "react";

import {
  Flex,
  HStack,
  IconButton,
  Link as LinkChakra,
  useBreakpointValue,
  useToken,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { withId } from "@helpers";

export const BrandLogo: React.FC = () => {
  return (
    <Link href="/" passHref>
      <LinkChakra
        h={{ base: "3rem", lg: "4rem" }}
        w={{ base: "9.5rem", lg: "12.75rem" }}
        position="relative"
      >
        <Image src="/logo-light.svg" alt="easy resume" layout="fill" />
      </LinkChakra>
    </Link>
  );
};

export const Nav: React.FC = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  const [secondary500] = useToken("colors", ["secondary.500"]);

  const [t] = useTranslation("header");

  const links = withId([
    {
      tKey: "links.home",
      link: "/",
    },
    {
      tKey: "links.features",
      link: "/#features",
    },
    {
      tKey: "links.pricing",
      link: "/#pricing",
    },
    {
      tKey: "links.contact",
      link: "/contact-us",
    },
  ]);

  if (isMobile) {
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          bg="primary.500"
          aria-label="nav menu"
          _hover={{ bg: "primary.400" }}
          _focus={{ bg: "primary.400" }}
          _active={{ bg: "primary.400" }}
          icon={<List color={secondary500} weight="bold" size={22} />}
        />

        <MenuList>
          {links.map(({ id, tKey, link }) => (
            <Link key={id} passHref href={link}>
              <MenuItem
                as={LinkChakra}
                textTransform="capitalize"
                fontSize={{ base: "md", lg: "lg" }}
                fontWeight="bold"
                color="text.secondary"
              >
                {t(tKey)}
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    );
  }

  return (
    <HStack spacing={5}>
      {links.map(({ id, tKey, link }) => (
        <Link key={id} passHref href={link}>
          <LinkChakra
            textTransform="capitalize"
            fontSize="lg"
            fontWeight="bold"
            color="text.secondary"
          >
            {t(tKey)}
          </LinkChakra>
        </Link>
      ))}
    </HStack>
  );
};

export const Header: React.FC = () => {
  return (
    <Flex
      bg="secondary.500"
      alignItems="center"
      flex={1}
      zIndex="banner"
      h="6.25rem"
      position="sticky"
      top={0}
      left={0}
      right={0}
      shadow="base"
    >
      <Flex
        px="50px"
        w="full"
        justifyContent="space-between"
        alignItems="center"
      >
        <BrandLogo />

        <Nav />
      </Flex>
    </Flex>
  );
};
