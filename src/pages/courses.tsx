import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Courses() {
  return (
    <DefaultLayout
      tittle="Cursos Acadêmico"
      descripition="Cursos"
    >
      <Heading color="red"> Courses </Heading>
    </DefaultLayout>
  );
}
