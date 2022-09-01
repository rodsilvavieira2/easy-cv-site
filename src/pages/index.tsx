import { withId } from "helpers";
import type { NextPage } from "next";
import Head from "next/head";
import {
  AndroidLogo,
  DownloadSimple,
  Palette,
  Layout,
  TextAa,
  ArrowsOutLineVertical,
} from "phosphor-react";
import { DeviceFrame, DeviceFrameWithoutShapes } from "svgs";

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useToken,
} from "@chakra-ui/react";
import { BenefitCard, PriceCard, SectionDivider } from "@components";

const WelcomeSection: React.FC = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mx="auto"
      w="80%"
      mt="9"
      as="section"
    >
      <Stack maxW="45%" spacing={8}>
        <Stack spacing={4}>
          <Heading as="h1" color="text.title" fontSize="4xl">
            Make resumes quickly and easily With Easy Resume
          </Heading>

          <Heading
            as="h2"
            color="text.secondary"
            fontSize="lg"
            fontWeight="medium"
          >
            with easy resume you can create resumes that can expose all your
            qualities in an elegant and modern way
          </Heading>
        </Stack>

        <Button
          color="text.primary"
          bg="primary.500"
          _focus={{ bg: "primary.400" }}
          _active={{ bg: "primary.400" }}
          leftIcon={<DownloadSimple size={32} />}
          size="lg"
          alignSelf="flex-start"
        >
          Download
        </Button>
      </Stack>

      <Flex bg="amber.100">
        <DeviceFrame />
      </Flex>
    </Flex>
  );
};

const BenefitsSection: React.FC = () => {
  const [secondary500] = useToken("colors", ["secondary.500"]);

  const benefits = withId([
    {
      icon: <Palette size={44} color={secondary500} />,
      title: "Colors",
      description: "Get access to a wide range of colors.",
    },
    {
      icon: <Layout size={44} color={secondary500} />,
      title: "Themes",
      description: "Have a wide range of themes that meet your needs.",
    },
    {
      icon: <TextAa size={44} color={secondary500} />,
      title: "Font Size",
      description: "Control the font size.",
    },
    {
      icon: <ArrowsOutLineVertical size={44} color={secondary500} />,
      title: "Line Height",
      description: "Get access to a wide range of colors.",
    },
  ]);

  return (
    <Flex as="section">
      <SimpleGrid
        minChildWidth="6.5rem"
        spacing={6}
        mx="auto"
        maxW="80%"
        w="full"
      >
        {benefits.map(({ id, ...props }) => (
          <BenefitCard key={id} {...props} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

const PriceTableSection: React.FC = () => {
  const cards = withId([
    {
      amount: "$22.22",
      benefits: [
        "change the font size",
        "change the line height",
        "change the template",
        "change the color",
      ],
      description: "Unleash the power of automation",
      period: "month",
      title: "monthly",
    },
    {
      amount: "$22.22",
      benefits: [
        "change the font size",
        "change the line height",
        "change the template",
        "change the color",
      ],
      description: "Unleash the power of automation",
      period: "month",
      title: "monthly",
    },
    {
      amount: "$22.22",
      benefits: [
        "change the font size",
        "change the line height",
        "change the template",
        "change the color",
      ],
      description: "Unleash the power of automation",
      period: "month",
      title: "monthly",
    },
  ]);

  return (
    <HStack as="section" justifyContent="center" spacing="5">
      {cards.map(({ id, ...props }) => (
        <PriceCard key={id} {...props} />
      ))}
    </HStack>
  );
};

export const GetTheAppNowSection: React.FC = () => {
  const [secondary500] = useToken("colors", ["secondary.500"]);

  return (
    <Box as="section" py="44" mb="28 !important">
      <Flex minH="17rem" bg="shape.gradient">
        <Flex
          position="relative"
          w="full"
          maxW="80%"
          mx="auto"
          alignItems="center"
        >
          <DeviceFrameWithoutShapes position="absolute" top="-38%" />

          <Stack ml="72" spacing={"5"}>
            <Heading color="text.primary">Get the app now!</Heading>

            <Link
              py="2"
              px="3"
              as={HStack}
              border={`2px solid ${secondary500}`}
              borderRadius="md"
              alignSelf="flex-start"
            >
              <AndroidLogo size={32} color={secondary500} />

              <Box color="text.primary">
                <Text fontSize="sm">Get it on</Text>

                <Text fontWeight="bold">Google play</Text>
              </Box>
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Easy Resume</title>
      </Head>

      <Stack spacing={9} as="main">
        <WelcomeSection />

        <SectionDivider
          title="Amazing features"
          text="Some of the best features you find in one application"
        />

        <BenefitsSection />

        <SectionDivider title="Price table" text="Check our prices" />

        <PriceTableSection />

        <GetTheAppNowSection />
      </Stack>
    </>
  );
};

export default Home;
