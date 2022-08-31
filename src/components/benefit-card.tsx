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
      spacing={2}
      alignItems="center"
      bg="shape.gradient"
      borderRadius="base"
      px="4"
      py="2"
      boxShadow="inset 0 0 3px #ffffff"
    >
      <Box flexShrink={0}>{icon}</Box>

      <Box color="text.primary">
        <Text textTransform="capitalize" fontWeight="bold" fontSize="2xl">
          {title}
        </Text>

        <Text fontWeight="medium">{description}</Text>
      </Box>
    </HStack>
  );
};
