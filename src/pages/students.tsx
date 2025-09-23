import { Badge, Button, Card, createListCollection, HStack, Input, InputGroup, Portal, Select, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { LuSearch } from "react-icons/lu";
import { useState } from "react";

const status = createListCollection({
  items: [
    { label: "Todos", value: "todos" },
    { label: "Ativos", value: "ativo" },
    { label: "Inativos", value: "inativo" },
  ],
})

const studentsMock = [
  {
    id: 1,
    nome: "Ana Souza",
    email: "ana.souza@email.com",
    curso: "Engenharia de Software",
    status: "ativo",
  },
  {
    id: 2,
    nome: "Carlos Lima",
    email: "carlos.lima@email.com",
    curso: "Sistemas de Informação",
    status: "inativo",
  },
  {
    id: 3,
    nome: "Mariana Santos",
    email: "mariana.santos@email.com",
    curso: "Ciência da Computação",
    status: "ativo"
  },
]

export default function Students() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");

  const filteredStudents = studentsMock.filter((student) => {
    const matchSearch =
      student.nome.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()) ||
      student.curso.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "todos" || student.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie informações dos estudantes matrículados"
    >
      <VStack align="stretch">
        <Card.Root w="full">
          <Card.Body>
            <SimpleGrid row={2} rowGap={4}>
              <InputGroup flex={1} startElement={<LuSearch />}>
                <Input placeholder="Busque por Nome, E-mail ou Curso..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </InputGroup>

              <HStack justify="space-between" wrap="wrap">
                <Select.Root
                  collection={status}
                  size="sm"
                  width="320px"
                >
                  <Select.HiddenSelect />
                  <Select.Label>Selecione o Status</Select.Label>
                  <Select.Control>
                    <Select.Trigger>
                      <Select.ValueText placeholder="Status" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>
                  <Portal>
                    <Select.Positioner>
                      <Select.Content>
                        {status.items.map((status) => (
                          <Select.Item item={status} key={status.value}>
                            {status.label}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select.Root>

                <Button variant="outline">Filtros</Button>
                <Button variant="outline">Exportar</Button>
                <Button variant="outline">Novo Estudante</Button>
              </HStack>
            </SimpleGrid>
          </Card.Body>
        </Card.Root>

        <SimpleGrid gap={6}>
          {filteredStudents.map((student) => (
            <Card.Root key={student.id}>
              <Card.Body>
                <VStack align="start" >
                  <Text fontWeight="bold">{student.nome}</Text>
                  <Text fontSize="sm" color="gray.600">
                    {student.email}
                  </Text>
                  <Text fontSize="sm">{student.curso}</Text>
                  <Badge
                    colorScheme={student.status === "ativo" ? "green" : "red"}
                  >
                    {student.status}
                  </Badge>
                </VStack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </VStack>
    </DefaultLayout>
  );
}
