import { Flex, Group, IconButton, Image, Separator } from "@chakra-ui/react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";
import { TbHelpHexagonFilled, TbSettingsFilled } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";
import { Avatar } from "@/components/ui/avatar";
import { useColorMode } from "@/components/ui/color-mode";
import logoPreto from "../../../public/assets/logo-cesul-black.png";
import logoBranco from "../../../public/assets/logo-cesul-white.png";

export function DefaultHeader() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex flexDir="column">
      <Flex w="full" justify="space-between" borderBottomWidth={1} py={2} px={4} >
        <Flex align="center" gap={4}>
          <IconButton variant="ghost" rounded="full" >
            <TiThMenu />
          </IconButton>
          {colorMode === "dark" ? (
            <Image w="130px" h="60px" src={logoBranco.src} />
          ) : (
            <Image w="130px" h="60px" src={logoPreto.src} />
          )}
        </Flex>

        <Group>
          <IconButton variant="ghost" rounded="full">
            <IoNotificationsSharp />
          </IconButton>

          <IconButton variant="ghost" rounded="full">
            <TbHelpHexagonFilled />
          </IconButton>

          <IconButton variant="ghost" rounded="full">
            <TbSettingsFilled />
          </IconButton>

          <IconButton variant="ghost" rounded="full" onClick={toggleColorMode}>
            {colorMode === "dark" ? <IoMdMoon /> : <IoMdSunny />}
          </IconButton>

          <Separator h={6} orientation="vertical" mx={2} />

          <Avatar
            name="João Vitor"
            colorPalette="purple"
            src="https://avatars.githubusercontent.com/u/128654876?v=4"
          />
        </Group>
      </Flex>
     </Flex>
  );
}
