import { useI18nToken } from "hooks";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Link from "next/link";

import {
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Stack,
  Link as ChakraLink,
  Flex,
  Center,
  Divider,
} from "@chakra-ui/react";

const Terms: NextPage = () => {
  const [
    title,
    h1,
    lastUpdate,
    generalH2,
    generalP1,
    generalP2,
    generalP3,
    thirdPartyH2,
    thirdPartyP,
    changesH2,
    changesP1,
    changesP2,
    contactH2,
    contactP1,
    contactP2,
    contactP3,
  ] = useI18nToken("terms", [
    "title",
    "h1",
    "lastUpdate",
    "general.h2",
    "general.p1",
    "general.p2",
    "general.p3",
    "thirdParty.h2",
    "thirdParty.p",
    "changes.h2",
    "changes.p1",
    "changes.p2",
    "contact.h2",
    "contact.p1",
    "contact.p2",
    "contact.p3",
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
              <Heading as="h1" fontSize="5xl" fontWeight="light" pt="5" pb="12">
                {h1}
              </Heading>

              <Divider w="75%" borderColor="border.300" mb="16" />
            </Center>

            <Text as="time">{lastUpdate}</Text>

            <Stack border="1px solid" px="4" py="6" borderRadius="md">
              <Heading as="h3" size="md">
                {generalH2}
              </Heading>

              <Text>{generalP1}</Text>

              <Text>{generalP2}</Text>

              <Text>{generalP3}</Text>
            </Stack>
          </Stack>

          <Stack as="section" id="third-party-services">
            <Heading as="h3" size="md">
              {thirdPartyH2}
            </Heading>

            <Text>{thirdPartyP}</Text>

            <UnorderedList pl="5">
              <ListItem>
                <ChakraLink
                  target="_blank"
                  href="https://policies.google.com/terms"
                >
                  Google Play /Services
                </ChakraLink>
              </ListItem>

              <ListItem>
                <ChakraLink
                  target="_blank"
                  href="https://firebase.google.com/terms/analytics"
                >
                  Google Analytics for Firebase
                </ChakraLink>
              </ListItem>

              <ListItem>
                <ChakraLink
                  target="_blank"
                  href="https://firebase.google.com/terms/crashlytics"
                >
                  Firebase Crashlytics
                </ChakraLink>
              </ListItem>

              <ListItem>
                <ChakraLink target="_blank" href="https://adapty.io/terms">
                  Adapty
                </ChakraLink>
              </ListItem>

              <ListItem>
                <ChakraLink target="_blank" href="https://expo.dev/terms">
                  Expo
                </ChakraLink>
              </ListItem>
            </UnorderedList>
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
    ...(await serverSideTranslations(locale, ["terms", "footer", "header"])),
  },
});

export default Terms;
