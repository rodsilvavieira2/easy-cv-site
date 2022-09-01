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
  return (
    <>
      <Head>
        <title>Terms | Easy Resume</title>
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
                Terms of use
              </Heading>

              <Divider w="75%" borderColor="border.300" mb="16" />
            </Center>

            <Text as="time">Last updated on Aug 31, 2022.</Text>

            <Stack border="1px solid" px="4" py="6" borderRadius="md">
              <Heading as="h3" size="md">
                General information
              </Heading>

              <Text>
                By downloading or using the app, these terms will automatically
                apply to you – you should make sure therefore that you read them
                carefully before using the app. You’re not allowed to copy or
                modify the app, any part of the app, or our trademarks in any
                way. You’re not allowed to attempt to extract the source code of
                the app, and you also shouldn’t try to translate the app into
                other languages or make derivative versions. The app itself, and
                all the trademarks, copyright, database rights, and other
                intellectual property rights related to it, still belong to
                Hefesto App´s.
              </Text>

              <Text>
                Hefesto App´s is committed to ensuring that the app is as useful
                and efficient as possible. For that reason, we reserve the right
                to make changes to the app or to charge for its services, at any
                time and for any reason. We will never charge you for the app or
                its services without making it very clear to you exactly what
                you’re paying for.
              </Text>

              <Text>
                The Easy Resume app stores and processes personal data that you
                have provided to us, to provide my Service. It’s your
                responsibility to keep your phone and access to the app secure.
                We therefore recommend that you do not jailbreak or root your
                phone, which is the process of removing software restrictions
                and limitations imposed by the official operating system of your
                device. It could make your phone vulnerable to
                malware/viruses/malicious programs, compromise your phone’s
                security features and it could mean that the Easy Resume app
                won’t work properly or at all.
              </Text>
            </Stack>
          </Stack>

          <Stack as="section" id="third-party-services">
            <Heading as="h3" size="md">
              The app does use third-party services that may collect information
              used to identify you.
            </Heading>

            <Text>
              Link to Terms and Conditions of third-party service providers used
              by the app
            </Text>

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
              Changes to This Terms and Conditions
            </Heading>

            <Text>
              I may update our Terms and Conditions from time to time. Thus, you
              are advised to review this page periodically for any changes. I
              will notify you of any changes by posting the new Terms and
              Conditions on this page.
            </Text>

            <Text>
              These terms and conditions are effective as of 2022-08-31
            </Text>
          </Stack>

          <Stack as="section" id="contact-us">
            <Heading as="h3" size="md">
              Contact Us
            </Heading>

            <Text>
              If you have any questions or suggestions about my Terms and
              Conditions, do not hesitate to contact me at
              easy.resume.hefesto.apps@gmail.com
            </Text>

            <Text>
              This Terms and Conditions page was generated by{" "}
              <Link
                target="_blank"
                href="https://app-privacy-policy-generator.nisrulz.com/"
              >
                App Privacy Policy Generator
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
