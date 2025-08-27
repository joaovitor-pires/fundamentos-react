import { Image } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode"
import logoPreto from "../../../public/assets/logo-cesul-black.png";
import logoBranco from "../../../public/assets/logo-cesul-white.png";

export function Logo() {
  const { colorMode } = useColorMode();
  return (
    <>
      {
        colorMode === 'dark' ?
        <Image w="130px" h="60px" src={logoBranco.src} /> :
        <Image w="130px" h="60px" src={logoPreto.src} />
      }
    </>

  )
}
