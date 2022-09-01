import { useI18nToken } from "hooks";
import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Link from "next/link";

import {
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Stack,
  Box,
  Link as ChakraLink,
  Flex,
  Center,
  Divider,
} from "@chakra-ui/react";
import { withId } from "@helpers";

const Policy: NextPage = () => {
  const [t] = useTranslation("privacy");

  const [
    title,
    h1,
    lastUpdate,
    generalH2,
    generalP,
    indexH2,
    collectionH2,
    collectionP,
    thirdH2,
    thirdP,
    logH2,
    logP,
    cookiesH2,
    cookiesP,
    providesH2,
    providesP1,
    providesP2,
    securityH2,
    securityP,
    othersH2,
    othersP,
    childrenH2,
    childrenP,
    changesH2,
    changesP1,
    changesP2,
    contactH2,
    contactP1,
    contactP2,
    contactP3,
  ] = useI18nToken("privacy", [
    "title",
    "h1",
    "lastUpdate",
    "general.h2",
    "general.p",
    "index.h2",
    "collection.h2",
    "collection.p",
    "thirdParty.h2",
    "thirdParty.p",
    "logData.h2",
    "logData.p",
    "cookies.h2",
    "cookies.p",
    "provides.h2",
    "provides.p1",
    "provides.p2",
    "security.h2",
    "security.p",
    "others.h2",
    "others.p",
    "children.h2",
    "children.p",
    "changes.h2",
    "changes.p1",
    "changes.p2",
    "contact.h2",
    "contact.p1",
    "contact.p2",
    "contact.p3",
  ]);

  const pageLinks = withId([
    {
      tKey: "index.links.collection",
      href: "#information-collection-and-us",
    },
    {
      tKey: "index.links.thirdParty",
      href: "#third-party-services",
    },
    {
      tKey: "index.links.logData",
      href: "#log-data",
    },
    {
      tKey: "index.links.cookies",
      href: "#cookies",
    },
    {
      tKey: "index.links.providers",
      href: "#service-providers",
    },
    {
      tKey: "index.links.security",
      href: "#security",
    },
    {
      tKey: "index.links.others",
      href: "#links-to-other-sites",
    },
    {
      tKey: "index.links.changes",
      href: "#changes",
    },
    {
      tKey: "index.links.children",
      href: "#children-privacy",
    },
    {
      tKey: "index.links.contact",
      href: "#contact-us",
    },
  ]);

  const providerItems = withId([
    {
      tyKey: "provides.items.p1",
    },
    {
      tyKey: "provides.items.p2",
    },
    {
      tyKey: "provides.items.p3",
    },
    {
      tyKey: "provides.items.p4",
    },
  ]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Flex flex={1} bg="background.300" pb="32">
        <Stack
          w={["90%", "90%", "80%", "70%"]}
          bg="shape.background"
          borderRadius="md"
          spacing={4}
          px="5"
          pt="6"
          marginX="auto"
          mt={{ base: 12, lg: 24 }}
          shadow="base"
          pb="5"
        >
          <Stack spacing={6} as="section">
            <Center flexDir="column">
              <Heading
                as="h1"
                fontSize="5xl"
                fontWeight="normal"
                pt="5"
                pb="12"
              >
                {h1}
              </Heading>

              <Divider w="75%" borderColor="border.300" mb="16" />
            </Center>

            <Text as="time">{lastUpdate} July 23, 2022.</Text>

            <Stack border="1px solid" px="4" py="6" borderRadius="md">
              <Heading as="h3" size="md">
                {generalH2}
              </Heading>

              <Text>{generalP}</Text>
            </Stack>
          </Stack>

          <Stack spacing={3}>
            <Text>{indexH2}</Text>

            <UnorderedList pl="5">
              {pageLinks.map(({ href, id, tKey }) => (
                <ListItem key={id}>
                  <ChakraLink
                    _hover={{ color: "primary.500" }}
                    textDecoration="underline"
                    href={href}
                  >
                    {t(tKey)}
                  </ChakraLink>
                </ListItem>
              ))}
            </UnorderedList>
          </Stack>

          <Stack as="section" id="information-collection-and-use">
            <Heading as="h3" size="md">
              {collectionH2}
            </Heading>

            <Text>{collectionP}</Text>
          </Stack>

          <Stack as="section" id="third-party-services">
            <Heading as="h3" size="md">
              {thirdH2}
            </Heading>

            <Text>{thirdP}</Text>

            <UnorderedList pl="5">
              <ListItem>
                <Link
                  target="_blank"
                  passHref
                  href="https://policies.google.com/privacy"
                >
                  <ChakraLink>Google Play /Services</ChakraLink>
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  passHref
                  target="_blank"
                  href="https://support.google.com/admob/answer/6128543?hl=en"
                >
                  <ChakraLink>AdMob</ChakraLink>
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  target="_blank"
                  passHref
                  href="https://firebase.google.com/policies/analytics"
                >
                  <ChakraLink>Google Analytics for Firebase</ChakraLink>
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  target="_blank"
                  passHref
                  href="https://firebase.google.com/support/privacy/"
                >
                  <ChakraLink>Firebase Crashlytics</ChakraLink>
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  target="_blank"
                  passHref
                  href="https://www.revenuecat.com/privacy/"
                >
                  <ChakraLink>RevenueCat</ChakraLink>
                </Link>
              </ListItem>

              <ListItem>
                <Link target="_blank" passHref href="https://expo.dev/privacy">
                  <ChakraLink>Expo</ChakraLink>
                </Link>
              </ListItem>
            </UnorderedList>
          </Stack>

          <Stack id="log-data">
            <Heading as="h3" size="md">
              {logH2}
            </Heading>

            <Text>{logP}</Text>
          </Stack>

          <Stack as="section" id="cookies">
            <Heading as="h3" size="md">
              {cookiesH2}
            </Heading>

            <Text>{cookiesP}</Text>
          </Stack>

          <Stack as="section" id="service-providers">
            <Heading as="h3" size="md">
              {providesH2}
            </Heading>

            <Text>{providesP1}</Text>

            <Box my="4">
              {providerItems.map(({ id, tyKey }) => (
                <Text key={id}>{t(tyKey)}</Text>
              ))}
            </Box>

            <Text>{providesP2}</Text>
          </Stack>

          <Stack as="section" id="security">
            <Heading as="h3" size="md">
              {securityH2}
            </Heading>

            <Text>{securityP}</Text>
          </Stack>

          <Stack as="section" id="links-to-other-sites">
            <Heading as="h3" size="md">
              {othersH2}
            </Heading>

            <Text>{othersP}</Text>
          </Stack>

          <Stack as="section" id="children-privacy">
            <Heading as="h3" size="md">
              {childrenH2}
            </Heading>

            <Text>{childrenP}</Text>
          </Stack>

          <Stack as="section" id="changes">
            <Heading as="h3" size="md">
              {changesH2}
            </Heading>

            <Text>{changesP1}</Text>

            <Text>{changesP2}</Text>
          </Stack>

          <Stack as="section" id="contact-us">
            <Heading as="h3" size="md">
              {contactH2}
            </Heading>

            <Text>{contactP1}</Text>

            <Text>
              {contactP2}
              <Link
                target="_blank"
                href="https://app-privacy-policy-generator.nisrulz.com/"
              >
                {contactP3}
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["privacy", "footer", "header"])),
  },
});

export default Policy;
