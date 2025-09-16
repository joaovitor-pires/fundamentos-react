import { Flex, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import type { ColorPalette } from "@chakra-ui/react/styled-system";
import { IconType } from "react-icons";

interface CustomCardProps {
  title: string;
  description: string;
  icon: IconType;
  colorPallete: ColorPalette;
}

export function CustomCard({title, description, icon, colorPallete}: CustomCardProps) {
  return (
    <HStack _hover={{ backgroundColor: "gray.200", rounded: "md", _dark: { backgroundColor: "gray.800" } }} p={4} gap={6}>
      <Flex justify="center" align="center" backgroundColor={`${colorPallete}.100`} rounded="lg" p={4}>
        <Icon as={icon}size="xl" color={`${colorPallete}.700`} />
      </Flex>

      <VStack align="start" gap={1}>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </VStack>
    </HStack>
  );
}
