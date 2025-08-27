import { IconButton } from "@chakra-ui/react";
import { TbHelpHexagonFilled } from "react-icons/tb";

export function Help() {
  return (
    <IconButton variant="ghost" rounded="full">
      <TbHelpHexagonFilled />
    </IconButton>
  );
}
