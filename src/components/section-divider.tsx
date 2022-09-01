import { Center, Heading, Stack } from "@chakra-ui/react";

interface SectionDividerProps {
  title: string;
  text: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  text,
  title,
}) => {
  return (
    <Center minH="8.75rem">
      <Stack w="full" spacing={2} alignItems="center">
        <Heading
          fontSize={{ base: "md", lg: "lg" }}
          as="h3"
          color="text.secondary"
          fontWeight="medium"
          textAlign="center"
          textTransform="capitalize"
        >
          {title}
        </Heading>

        <Heading
          as="h4"
          maxW={{ base: "70%", lg: "50%" }}
          w="full"
          color="text.title"
          fontSize={{ base: "2xl", lg: "3xl" }}
          textAlign="center"
        >
          {text}
        </Heading>
      </Stack>
    </Center>
  );
};
