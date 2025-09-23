import { Badge, Card, Text, VStack } from "@chakra-ui/react";

interface StudentCardProps {
  nome: string;
  email: string;
  curso: string;
  status: "ativo" | "inativo";
}

export function StudentCard({ nome, email, curso, status }: StudentCardProps) {
  return (
    <Card.Root>
      <Card.Body>
        <VStack align="start">
          <Text fontWeight="bold">{nome}</Text>
          <Text fontSize="sm" color="gray.600">
            {email}
          </Text>
          <Text fontSize="sm">{curso}</Text>
          <Badge colorScheme={status === "ativo" ? "green" : "red"}>
            {status}
          </Badge>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
