import { Card, SimpleGrid, VStack } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { useState } from "react";
import { createListCollection, ListCollection } from "@chakra-ui/react";
import { StudentsFilters, StatusOption } from "@/components/StudentsFilters";
import { StudentCard } from "@/components/StudentCard";

const status: ListCollection<StatusOption> = createListCollection<StatusOption>({
  items: [
    { label: "Todos", value: "todos" },
    { label: "Ativos", value: "ativo" },
    { label: "Inativos", value: "inativo" },
  ],
});

const studentsMock = [
  { id: 1, nome: "Ana Souza", email: "ana.souza@email.com", curso: "Engenharia de Software", status: "ativo" },
  { id: 2, nome: "Carlos Lima", email: "carlos.lima@email.com", curso: "Sistemas de Informação", status: "inativo" },
  { id: 3, nome: "Mariana Santos", email: "mariana.santos@email.com", curso: "Ciência da Computação", status: "ativo" },
];

export default function Students() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"todos" | "ativo" | "inativo">("todos");

  const filteredStudents = studentsMock.filter((student) => {
    const matchSearch =
      student.nome.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()) ||
      student.curso.toLowerCase().includes(search.toLowerCase());

    const matchStatus = statusFilter === "todos" || student.status === statusFilter;

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
            <StudentsFilters
              search={search}
              onSearchChange={setSearch}
              status={status}
              onStatusChange={setStatusFilter}
            />
          </Card.Body>
        </Card.Root>

        <SimpleGrid gap={6}>
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              nome={student.nome}
              email={student.email}
              curso={student.curso}
              status={student.status as "ativo" | "inativo"}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </DefaultLayout>
  );
}
