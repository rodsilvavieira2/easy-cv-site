import { withId } from "helpers";
import { useI18nToken } from "hooks";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
  useBreakpointValue,
  useToken,
} from "@chakra-ui/react";
import { BenefitCard, PriceCard, SectionDivider } from "@components";

const WelcomeSection: React.FC = () => {
  const [welcomeH1, welcomeH2, welcomeButton] = useI18nToken("home", [
    "welcomeSection.h1",
    "welcomeSection.h2",
    "welcomeSection.button",
  ]);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mx="auto"
      w="80%"
      mt="9"
      as="section"
      h={{ base: "calc(100vh - 6.25rem)", lg: "auto" }}
    >
      <Stack maxW={{ base: "100%", lg: "40%" }} spacing={8}>
        <Stack spacing={4}>
          <Heading
            as="h1"
            color="text.title"
            fontSize={{ base: "3xl", lg: "4xl" }}
          >
            {welcomeH1}
          </Heading>

          <Heading
            as="h2"
            color="text.secondary"
            fontSize={{ base: "md", lg: "lg" }}
            fontWeight="medium"
          >
            {welcomeH2}
          </Heading>
        </Stack>

        <Button
          color="text.primary"
          bg="primary.500"
          _focus={{ bg: "primary.400" }}
          _active={{ bg: "primary.400" }}
          leftIcon={<DownloadSimple size={28} />}
          size="lg"
          alignSelf="flex-start"
        >
          {welcomeButton}
        </Button>
      </Stack>

      <Flex bg="amber.100" display={{ base: "none", lg: "flex" }}>
        <DeviceFrame />
      </Flex>
    </Flex>
  );
};

const BenefitsSection: React.FC = () => {
  const [secondary500] = useToken("colors", ["secondary.500"]);

  const [
    colorTitle,
    colorDesc,
    themeTitle,
    themeDesc,
    fontSizeTitle,
    fontSizeDesc,
    lineHeightTitle,
    lineHeightDesc,
  ] = useI18nToken("home", [
    "benefitsSection.cards.colors.title",
    "benefitsSection.cards.colors.description",
    "benefitsSection.cards.theme.title",
    "benefitsSection.cards.theme.description",
    "benefitsSection.cards.fontSize.title",
    "benefitsSection.cards.fontSize.description",
    "benefitsSection.cards.lineHeight.title",
    "benefitsSection.cards.lineHeight.description",
  ]);

  const iconSize = useBreakpointValue({
    base: 38,
    lg: 44,
  });

  const benefits = withId([
    {
      icon: <Palette size={iconSize} color={secondary500} />,
      title: colorTitle,
      description: colorDesc,
    },
    {
      icon: <Layout size={iconSize} color={secondary500} />,
      title: themeTitle,
      description: themeDesc,
    },
    {
      icon: <TextAa size={iconSize} color={secondary500} />,
      title: fontSizeTitle,
      description: fontSizeDesc,
    },
    {
      icon: <ArrowsOutLineVertical size={iconSize} color={secondary500} />,
      title: lineHeightTitle,
      description: lineHeightDesc,
    },
  ]);

  return (
    <Flex as="section" id="features">
      <SimpleGrid
        minChildWidth="12rem"
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
    <Flex>
      <SimpleGrid
        as="section"
        id="pricing"
        minChildWidth="18.75rem"
        spacing="5"
        maxW={{ base: "75%", lg: "80%" }}
        mx="auto"
      >
        {cards.map(({ id, ...props }) => (
          <PriceCard key={id} {...props} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export const GetTheAppNowSection: React.FC = () => {
  const [secondary500] = useToken("colors", ["secondary.500"]);

  const [h1, buttonText1, buttonText2] = useI18nToken("home", [
    "getTheAppNowSection.h2",
    "getTheAppNowSection.button.text1",
    "getTheAppNowSection.button.text2",
  ]);

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
          <DeviceFrameWithoutShapes
            display={{ base: "none", lg: "block" }}
            position="absolute"
            top="-38%"
          />

          <Stack ml={{ base: 0, lg: 72 }} spacing={"5"}>
            <Heading color="text.primary">{h1}</Heading>

            <Link
              py="2"
              px="3"
              as={HStack}
              border={`2px solid ${secondary500}`}
              borderRadius="md"
              alignSelf="flex-start"
              _hover={{ textDecoration: "none" }}
            >
              <AndroidLogo size={32} color={secondary500} />

              <Box color="text.primary">
                <Text fontSize="sm">{buttonText1}</Text>

                <Text fontWeight="bold">{buttonText2}</Text>
              </Box>
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

const Home: NextPage = () => {
  const [
    title,
    featuresDividerTitle,
    featuresDividerDivider,
    priceDividerTitle,
    priceDividerText,
  ] = useI18nToken("home", [
    "title",
    "featuresDivider.title",
    "featuresDivider.text",
    "priceDivider.title",
    "priceDivider.text",
  ]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Stack spacing={9} as="main">
        <WelcomeSection />

        <SectionDivider
          title={featuresDividerTitle}
          text={featuresDividerDivider}
        />

        <BenefitsSection />

        <SectionDivider title={priceDividerTitle} text={priceDividerText} />

        <PriceTableSection />

        <GetTheAppNowSection />
      </Stack>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home", "footer", "header"])),
  },
});

export default Home;
