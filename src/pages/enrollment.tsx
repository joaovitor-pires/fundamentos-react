import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Enrollment() {
  return (
    <DefaultLayout
      tittle="Matricula Acadêmica"
      descripition="Matricula"
    >
      <Heading color="red"> Enrollment </Heading>
    </DefaultLayout>
  );
}

