import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Teachers() {
  return (
    <DefaultLayout
      tittle="Professores"
      descripition="Professores"
    >
      <Heading color="red"> Teachers </Heading>
    </DefaultLayout>
  );
}
