import { IconButton } from "@chakra-ui/react";
import { TiThMenu } from "react-icons/ti";

export function Menu() {
  return (
    <IconButton variant="ghost" rounded="full" >
      <TiThMenu />
    </IconButton>
  );
}
