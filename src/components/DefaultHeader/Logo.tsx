import { useColorMode } from "../ui/color-mode"

import logoBranco from "../../../public/assets/logo-cesul-branco.png";
import logoPreto from "../../../public/assets/logo-cesul-preta.png";

import { Image } from "@chakra-ui/react";

export function Logo(){
  const {colorMode} = useColorMode();
  return (
    <>
      {
        colorMode === 'dark' ?
        <Image w="130px" h="60px" src={logoBranco.src} /> :
        <Image w="110px" h="60px" src={logoPreto.src} />
      }

    </>
  )
}
