import { withId } from "helpers";
import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Heading,
  List,
  ListItem,
  Stack,
  Link as ChakraLink,
  HStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { WithID } from "@types";

interface LinkItem {
  label: string;
  isInternal?: boolean;
  href: string;
}

function makeLink({
  href,
  isInternal = true,
  label,
  id,
}: WithID<LinkItem>): JSX.Element {
  const el = (
    <ChakraLink
      href={href}
      textTransform="capitalize"
      color="text.primary"
      fontSize="sm"
    >
      {label}
    </ChakraLink>
  );

  if (isInternal) {
    return (
      <ListItem key={id}>
        <Link href={href} passHref>
          {el}
        </Link>
      </ListItem>
    );
  }

  return <ListItem key={id}>{el}</ListItem>;
}

interface NavFooterProps {
  title: string;
  links: LinkItem[];
}

const NavFooter: React.FC<NavFooterProps> = ({ links, title }) => {
  return (
    <Stack spacing={2}>
      <Heading
        as="h3"
        color="text.primary"
        fontSize="md"
        textTransform="uppercase"
      >
        {title}
      </Heading>

      <List>{withId(links).map(makeLink)}</List>
    </Stack>
  );
};

export const Footer: React.FC = () => {
  return (
    <Flex mt="32" bg="shape.gradient" as="footer" h="27rem" py="10">
      <Flex
        w="full"
        maxW="95%"
        mx="auto"
        flex={1}
        flexDir="column"
        justifyContent="space-between"
      >
        <HStack spacing="9" alignItems="start">
          <NavFooter
            title="easy resume"
            links={[
              {
                href: "/about",
                label: "about",
              },
              {
                href: "/what-we-offer",
                label: "what we offer",
              },
            ]}
          />

          <NavFooter
            title="more"
            links={[
              {
                href: "/help",
                label: "help",
              },
              {
                href: "/terms",
                label: "terms",
              },
              {
                href: "/privacy",
                label: "privacy",
              },
              {
                href: "https://www.linkedin.com/in/rodrigo-silva-27a7a01b2/",
                label: "developer",
                isInternal: false,
              },
            ]}
          />
        </HStack>

        <Flex
          justifyContent="space-between"
          borderTop="1px solid #ffffff"
          pt="5"
          alignItems="center"
        >
          <Box w="10rem" h="2.5rem" position="relative">
            <Image src="/hefesto-logo.png" alt="hefesto" layout="fill" />
          </Box>

          <Text color="text.primary" fontSize="small">
            © 2022 Easy Resume. All rights reserved.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
