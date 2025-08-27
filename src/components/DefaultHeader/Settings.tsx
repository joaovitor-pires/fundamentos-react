import { IconButton } from "@chakra-ui/react";
import { TbSettingsFilled } from "react-icons/tb";

export function Settings() {
  return (
    <IconButton variant="ghost" rounded="full">
      <TbSettingsFilled />
    </IconButton>
  );
}
