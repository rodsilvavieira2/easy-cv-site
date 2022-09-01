import { NextPage } from "next";
import Head from "next/head";

import { Center, Flex, Heading, Link, Text } from "@chakra-ui/react";

const ContactUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Easy Resume</title>
      </Head>

      <Center h="100vh" as="section">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          w="full"
          maxW="85%"
          flexWrap="wrap"
        >
          <Heading fontSize={{ base: "6xl", lg: "7xl" }}>Contact us</Heading>

          <Text
            mt={{ base: 5, lg: 0 }}
            maxW={{ base: "100%", lg: "46%" }}
            fontSize={{ base: "lg", lg: "2xl" }}
          >
            Have questions? The quickest way to get in touch with us is using
            the contact information below.
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
          <Heading fontSize={{ base: "6xl", lg: "7xl" }}>Email</Heading>

          <Link
            textDecoration="underline"
            href="mailto:easy.resume.hefesto.apps@gmail.com"
            maxW={{ base: "100%", lg: "46%" }}
            fontSize={{ base: "lg", lg: "2xl" }}
            mt={{ base: 5, lg: 0 }}
          >
            Send us a feedback using your email:
          </Link>
        </Flex>
      </Center>
    </>
  );
};

export default ContactUs;
