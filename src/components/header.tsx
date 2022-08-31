import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Box, Flex, HStack, Link as LinkChakra } from "@chakra-ui/react";

export const BrandLogo: React.FC = () => {
  return (
    <Box h="4rem" w="12.75rem" position="relative">
      <Image src="/logo-light.svg" alt="easy resume" layout="fill" />
    </Box>
  );
};

export const Nav: React.FC = () => {
  const links = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Features",
      link: "/",
    },
    {
      label: "Pricing",
      link: "/",
    },
    {
      label: "Contact",
      link: "/",
    },
  ];

  return (
    <HStack spacing={3}>
      {links.map(({ label, link }) => (
        <Link key={label} passHref href={link}>
          <LinkChakra fontSize="lg" fontWeight="bold" color="text.secondary">
            {label}
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
      <Flex px="50px" w="full" justifyContent="space-between">
        <BrandLogo />

        <Nav />
      </Flex>
    </Flex>
  );
};
