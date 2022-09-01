import { withId } from "helpers";
import { useI18nToken } from "hooks";
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
      fontSize="md"
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
    <Stack spacing={3}>
      <Heading
        as="h3"
        color="text.primary"
        fontSize="lg"
        textTransform="uppercase"
      >
        {title}
      </Heading>

      <List spacing="4">{withId(links).map(makeLink)}</List>
    </Stack>
  );
};

export const Footer: React.FC = () => {
  const [appTitle, about, what, moreTitle, terms, privacy, contact, developer] =
    useI18nToken("footer", [
      "app.title",
      "app.links.about",
      "app.links.what",
      "more.title",
      "more.links.terms",
      "more.links.privacy",
      "more.links.contact",
      "more.links.developer",
    ]);

  return (
    <Flex bg="shape.gradient" as="footer" minH="30rem" py="16">
      <Flex
        w="full"
        maxW="90%"
        mx="auto"
        flex={1}
        flexDir="column"
        justifyContent="space-between"
      >
        <HStack spacing="28" alignItems="start">
          <NavFooter
            title={appTitle}
            links={[
              {
                href: "/about",
                label: about,
              },
              {
                href: "/what-we-offer",
                label: what,
              },
            ]}
          />

          <NavFooter
            title={moreTitle}
            links={[
              {
                href: "/terms",
                label: terms,
              },
              {
                href: "/privacy",
                label: privacy,
              },
              {
                href: "/contact-us",
                label: contact,
              },
              {
                href: "https://www.linkedin.com/in/rodrigo-silva-27a7a01b2/",
                label: developer,
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
          flexWrap="wrap"
        >
          <Box w="8.5rem" h="2.2rem" position="relative">
            <Image src="/hefesto-logo.png" alt="hefesto" layout="fill" />
          </Box>

          <Text my="2" color="text.primary" fontSize="small">
            © 2022 Easy Resume. All rights reserved.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
