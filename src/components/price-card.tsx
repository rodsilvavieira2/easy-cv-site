import { CheckCircle } from "phosphor-react";

import {
  Box,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
  Flex,
} from "@chakra-ui/react";

export interface PriceCardProps {
  amount: string;
  period: string;
  title: string;
  description: string;
  benefits: string[];
}

export const PriceCard: React.FC<PriceCardProps> = ({
  benefits,
  description,
  period,
  title,
  amount,
}) => {
  return (
    <Stack
      spacing={6}
      minH="23.125rem"
      px="7"
      py="16"
      borderRadius="md"
      shadow="2xl"
    >
      <Text
        textTransform="capitalize"
        fontSize="2xl"
        fontWeight="bold"
        color="gray.800"
      >
        {title}
      </Text>

      <Flex alignItems="center">
        <Text
          lineHeight="1"
          fontWeight="bold"
          fontSize="4xl"
          color="text.secondary"
        >
          {amount}
        </Text>
        <Text alignSelf="flex-end" fontWeight="semibold" color="gray.700">
          {" "}
          /{period}
        </Text>
      </Flex>

      <Box>
        <Text color="text.secondary" fontWeight="medium">
          {description}
        </Text>
      </Box>

      <List>
        {benefits.map((item) => (
          <ListItem
            key={item}
            color="text.secondary"
            fontWeight="medium"
            textTransform="capitalize"
          >
            <ListIcon
              as={CheckCircle}
              color="primary.500"
              fontSize="lg"
              weight="bold"
            />

            {item}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
