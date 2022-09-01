import { useI18nToken } from "hooks";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import { Center, Flex, Heading, Link, Text } from "@chakra-ui/react";

const ContactUs: NextPage = () => {
  const [title, contactH2, contactP, emailH1, emailLink] = useI18nToken(
    "contact",
    ["title", "contact.h2", "contact.p", "email.h1", "email.link"]
  );

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Center h="100vh" as="section">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          w="full"
          maxW="85%"
          flexWrap="wrap"
        >
          <Heading fontSize={{ base: "6xl", lg: "7xl" }}>{contactH2}</Heading>

          <Text
            mt={{ base: 5, lg: 0 }}
            maxW={{ base: "100%", lg: "46%" }}
            fontSize={{ base: "lg", lg: "2xl" }}
          >
            {contactP}
          </Text>
        </Flex>
      </Center>

      <Center h="100vh" as="section" bg="#ede9fe">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxW="85%"
          w="full"
          flexWrap="wrap"
        >
          <Heading fontSize={{ base: "6xl", lg: "7xl" }}>{emailH1}</Heading>

          <Link
            textDecoration="underline"
            href="mailto:easy.resume.hefesto.apps@gmail.com"
            maxW={{ base: "100%", lg: "46%" }}
            fontSize={{ base: "lg", lg: "2xl" }}
            mt={{ base: 5, lg: 0 }}
          >
            {emailLink}
          </Link>
        </Flex>
      </Center>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["contact", "footer", "header"])),
  },
});

export default ContactUs;
