import { Box, HStack, Text } from "@chakra-ui/react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  description,
  icon,
  title,
}) => {
  return (
    <HStack
      spacing={3}
      alignItems="center"
      bg="shape.gradient"
      borderRadius="base"
      minH="28"
      px="4"
      py="2"
      boxShadow="inset 0 0 3px #ffffff"
    >
      <Box flexShrink={0}>{icon}</Box>

      <Box color="text.primary">
        <Text
          textTransform="capitalize"
          fontWeight="bold"
          fontSize={{ base: "lg", lg: "2xl" }}
        >
          {title}
        </Text>

        <Text fontWeight="medium" fontSize={{ base: "sm", lg: "md" }}>
          {description}
        </Text>
      </Box>
    </HStack>
  );
};
