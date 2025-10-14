import { Flex, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { DefaultHeader } from "@/components/DefaultHeader";

type DefaultLayoutProps = {
  children: ReactNode;
  tittle: string;
  descripition: string;
}

export function DefaultLayout({ children, tittle, descripition }: DefaultLayoutProps) {
  return (
    <Flex flexDir="column" p={8}>
      <DefaultHeader />

      <Flex flexDir="column">
        <Heading fontSize="3xl" mb="4" >{tittle}</Heading>

        <Text color="fg.muted" fontSize="md" mb="4">{descripition}</Text>

      {children}
      </Flex>
    </Flex>
  );
}
