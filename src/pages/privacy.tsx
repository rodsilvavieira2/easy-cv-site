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
  Box,
  Link as ChakraLink,
  Flex,
  Center,
  Divider,
} from "@chakra-ui/react";
import { withId } from "@helpers";

const pageLinks = withId([
  {
    label: "information collection and Use",
    href: "#information-collection-and-us",
  },
  {
    label: "third party services",
    href: "#third-party-services",
  },
  {
    label: "log data",
    href: "#log-data",
  },
  {
    label: "cookies",
    href: "#cookies",
  },
  {
    label: "service providers",
    href: "#service-providers",
  },
  {
    label: "security",
    href: "#security",
  },
  {
    label: "links to other sites",
    href: "#links-to-other-sites",
  },
  {
    label: "changes",
    href: "#changes",
  },
  {
    label: "children’s privacy",
    href: "#children-privacy",
  },
  {
    label: "contact us",
    href: "#contact-us",
  },
]);

const Policy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Easy Resume</title>
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
                Privacy Policy
              </Heading>

              <Divider w="75%" borderColor="border.300" mb="16" />
            </Center>

            <Text as="time">Last updated on July 23, 2022.</Text>

            <Stack border="1px solid" px="4" py="6" borderRadius="md">
              <Heading as="h3" size="md">
                General information
              </Heading>

              <Text>
                Hefesto App,s built the Curriculum Fácil app as a Free app. This
                SERVICE is provided by Hefesto App,s at no cost and is intended
                for use as is. This page is used to inform visitors regarding my
                policies with the collection, use, and disclosure of Personal
                Information if anyone decided to use my Service. If you choose
                to use my Service, then you agree to the collection and use of
                information in relation to this policy. The Personal Information
                that I collect is used for providing and improving the Service.
                I will not use or share your information with anyone except as
                described in this Privacy Policy. The terms used in this Privacy
                Policy have the same meanings as in our Terms and Conditions,
                which are accessible at Curriculum Fácil unless otherwise
                defined in this Privacy Policy.
              </Text>
            </Stack>
          </Stack>

          <Stack spacing={3}>
            <Text>
              You can find information about us and how we collect, use and
              store your personal data in each section of this Privacy Notice:
            </Text>

            <UnorderedList pl="5">
              {pageLinks.map(({ href, id, label }) => (
                <ListItem key={id}>
                  <ChakraLink
                    _hover={{ color: "primary.500" }}
                    textDecoration="underline"
                    href={href}
                  >
                    {label}
                  </ChakraLink>
                </ListItem>
              ))}
            </UnorderedList>
          </Stack>

          <Stack as="section" id="information-collection-and-use">
            <Heading as="h3" size="md">
              Information Collection and Use
            </Heading>

            <Text>
              For a better experience, while using our Service, I may require
              you to provide us with certain personally identifiable
              information, including but not limited to Name, Addresses, Phone
              numbers, Asset information, Personal features, Image, Employment
              information, Geographical location, Place of birth, , Date of
              birth, s, . The information that I request will be retained on
              your device and is not collected by me in any way.
            </Text>
          </Stack>

          <Stack as="section" id="third-party-services">
            <Heading as="h3" size="md">
              The app does use third-party services that may collect information
              used to identify you.
            </Heading>

            <Text>
              Link to the privacy policy of third-party service providers used
              by the app
            </Text>

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
              Log Data
            </Heading>

            <Text>
              I want to inform you that whenever you use my Service, in a case
              of an error in the app I collect data and information (through
              third-party products) on your phone called Log Data. This Log Data
              may include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the
              configuration of the app when utilizing my Service, the time and
              date of your use of the Service, and other statistics.
            </Text>
          </Stack>

          <Stack as="section" id="cookies">
            <Heading as="h3" size="md">
              Cookies
            </Heading>

            <Text>
              Cookies are files with a small amount of data that are commonly
              used as anonymous unique identifiers. These are sent to your
              browser from the websites that you visit and are stored on your
              device &apos;s internal memory. This Service does not use these
              “cookies” explicitly. However, the app may use third-party code
              and libraries that use “cookies” to collect information and
              improve their services. You have the option to either accept or
              refuse these cookies and know when a cookie is being sent to your
              device. If you choose to refuse our cookies, you may not be able
              to use some portions of this Service.
            </Text>
          </Stack>

          <Stack as="section" id="service-providers">
            <Heading as="h3" size="md">
              Service Providers
            </Heading>

            <Text>
              I may employ third-party companies and individuals due to the
              following reasons:
            </Text>

            <Box my="4">
              <Text>To facilitate our Service;</Text>
              <Text>To provide the Service on our behalf;</Text>
              <Text>To perform Service-related services; or</Text>
              <Text>To assist us in analyzing how our Service is used.</Text>
            </Box>

            <Text>
              I want to inform users of this Service that these third parties
              have access to their Personal Information. The reason is to
              perform the tasks assigned to them on our behalf. However, they
              are obligated not to disclose or use the information for any other
              purpose.
            </Text>
          </Stack>

          <Stack as="section" id="security">
            <Heading as="h3" size="md">
              Security
            </Heading>

            <Text>
              I value your trust in providing us your Personal Information, thus
              we are striving to use commercially acceptable means of protecting
              it. But remember that no method of transmission over the internet,
              or method of electronic storage is 100% secure and reliable, and I
              cannot guarantee its absolute security.
            </Text>
          </Stack>

          <Stack as="section" id="links-to-other-sites">
            <Heading as="h3" size="md">
              Links to Other Sites
            </Heading>

            <Text>
              This Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by me. Therefore, I strongly
              advise you to review the Privacy Policy of these websites. I have
              no control over and assume no responsibility for the content,
              privacy policies, or practices of any third-party sites or
              services.
            </Text>
          </Stack>

          <Stack as="section" id="children-privacy">
            <Heading as="h3" size="md">
              Children’s Privacy
            </Heading>

            <Text>
              These Services do not address anyone under the age of 13. I do not
              knowingly collect personally identifiable information from
              children under 13 years of age. In the case I discover that a
              child under 13 has provided me with personal information, I
              immediately delete this from our servers. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact me so that I will be able to
              do the necessary actions.
            </Text>
          </Stack>

          <Stack as="section" id="changes">
            <Heading as="h3" size="md">
              Changes to This Privacy Policy
            </Heading>

            <Text>
              I may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. I will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </Text>

            <Text>This policy is effective as of 2022-09-01</Text>
          </Stack>

          <Stack as="section" id="contact-us">
            <Heading as="h3" size="md">
              Contact Us
            </Heading>

            <Text>
              If you have any questions or suggestions about my Privacy Policy,
              do not hesitate to contact me at
              easy.resume.hefesto.apps@gmail.com
            </Text>

            <Text>
              This privacy policy page was generated by{" "}
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
    ...(await serverSideTranslations(locale, ["privacy", "footer", "header"])),
  },
});

export default Policy;
