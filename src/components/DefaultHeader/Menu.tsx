import { Button, CloseButton, Drawer, IconButton, Kbd, Portal } from "@chakra-ui/react";
import { TiThMenu } from "react-icons/ti";

export function Menu() {
  return (
    <Drawer.Root placement="start" size="md">
      <Drawer.Trigger asChild>
        <IconButton variant="ghost" rounded="full" >
          <TiThMenu />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Sistema Acadêmico</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
              Press the <Kbd>esc</Kbd> key to close the drawer.
            </Drawer.Body>

            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Drawer.ActionTrigger>
                <Button>Save</Button>
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
