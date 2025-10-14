import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Grades() {
  return (
    <DefaultLayout
      tittle="Notas Acadêmica"
      descripition="Notas"
    >
      <Heading color="red"> Grades </Heading>
    </DefaultLayout>
  );
}

