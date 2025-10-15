import { VStack } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { HeaderTable } from "@/components/HeaderTable";
import { Table } from "@/components/Table";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { api } from "@/services/apiClient";

type Student = {
  fullname: string;
  email: string;
  course: string;
  semester: string;
  status: string;
  enrollment: string;
};

export default function Students() {
  const data: Student[] = [
    {
      fullname: "Ana Silva",
      email: "ana.silva@example.com",
      course: "Engenharia de Software",
      semester: "3º semestre",
      status: "Ativo",
      enrollment: "20232001",
    },
    {
      fullname: "Bruno Souza",
      email: "bruno.souza@example.com",
      course: "Administração",
      semester: "5º semestre",
      status: "Ativo",
      enrollment: "20222145",
    },
    {
      fullname: "Carla Pereira",
      email: "carla.pereira@example.com",
      course: "Design Gráfico",
      semester: "1º semestre",
      status: "Inativo",
      enrollment: "20231003",
    },
    {
      fullname: "Diego Almeida",
      email: "diego.almeida@example.com",
      course: "Medicina",
      semester: "7º semestre",
      status: "Ativo",
      enrollment: "20211987",
    },
    {
      fullname: "Elisa Costa",
      email: "elisa.costa@example.com",
      course: "Direito",
      semester: "2º semestre",
      status: "Ativo",
      enrollment: "20232456",
    },
  ];

  const columnHelper = createColumnHelper<Student>();

  const columns = [
    columnHelper.accessor("fullname", {
      header: "Nome completo",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: "E-mail",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("course", {
      header: "Curso",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("semester", {
      header: "Semestre",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("enrollment", {
      header: "Matrícula",
      cell: (info) => info.getValue(),
    }),
  ];

  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    async function load() {
      const { data } = await api.get("/students");

      setStudents(data.students);
    }

    load();
  }, []);

  return (
    <DefaultLayout
      tittle="Gestão de Estudantes"
      descripition="Gerencie informações dos estudantes matrículados"
    >
      <VStack align="start">
        <HeaderTable />

        <Table data={data} columns={columns} />
      </VStack>
    </DefaultLayout>
  );
}
