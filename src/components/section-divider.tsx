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
      <Stack spacing={2} alignItems="center">
        <Heading
          fontSize="lg"
          as="h3"
          color="text.secondary"
          fontWeight="medium"
          textAlign="center"
          textTransform="capitalize"
        >
          {title}
        </Heading>

        <Heading as="h4" color="text.title" fontSize="3xl" textAlign="center">
          {text}
        </Heading>
      </Stack>
    </Center>
  );
};
