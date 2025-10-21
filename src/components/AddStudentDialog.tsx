import { Button, CloseButton, Dialog, Input, Portal } from "@chakra-ui/react";
import { AddButton } from "./HeaderTable/AddButton";
import { Field } from "./ui/field";

export function AddStudentDialog() {
  return (
    <Dialog.Root lazyMount>
      <Dialog.Trigger asChild>
        <AddButton>
          Novo Estudante
        </AddButton>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Novo Estudante</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Field label="Nome Completo">
                <Input placeholder="Informe o nome completo" />
              </Field>
              Oi
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancelar</Button>
              </Dialog.ActionTrigger>
              <Button>Criar Estudante</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
