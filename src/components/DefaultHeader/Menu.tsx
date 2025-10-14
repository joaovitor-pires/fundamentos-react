import { CloseButton, Drawer, IconButton, Portal, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaCalendarAlt, FaGraduationCap, FaUserPlus } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { ImBooks } from "react-icons/im";
import { IoMdExit, IoMdMenu } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { signOut } from "@/contexts/SessionContext";
import { NavigationItem } from "./NavegationItem";

export function Menu() {
  const router = useRouter();
  return (
    <Drawer.Root placement="start" size="md">
      <Drawer.Trigger asChild>
        <IconButton variant="ghost" rounded="full">
          <IoMdMenu />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Cesul - Sistema Acâdemico</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
              <VStack>
                <NavigationItem
                  icon={<RiDashboardFill />}
                  label="Dashboard"
                  onClick={() => router.push("/")}
                  defaultChecked={router.asPath === '/'}
                />

                <NavigationItem
                  icon={<IoPeopleSharp />}
                  label="Estudantes"
                  onClick={() => router.push("/students")}
                  defaultChecked={router.asPath === '/students'}
                />

                <NavigationItem
                  icon={<FaGraduationCap />}
                  label="Professores"
                  onClick={() => router.push("/teachers")}
                  defaultChecked={router.asPath === '/teachers'}
                />

                <NavigationItem
                  icon={<ImBooks />}
                  label="Cursos"
                  onClick={() => router.push("/courses")}
                  defaultChecked={router.asPath === '/courses'}
                />

                <NavigationItem
                  icon={<GrNotes />}
                  label="Notas"
                  onClick={() => router.push("/grades")}
                  defaultChecked={router.asPath === '/grades'}
                />

                <NavigationItem
                  icon={<FaUserPlus />}
                  label="Matriculas"
                  onClick={() => router.push("/enrollment")}
                  defaultChecked={router.asPath === '/enrollment'}
                />

                <NavigationItem
                  icon={<FaCalendarAlt />}
                  label="Calendarios"
                  onClick={() => router.push("/calender")}
                  defaultChecked={router.asPath === '/calender'}
                />
              </VStack>
            </Drawer.Body>

            <Drawer.Footer>
              <NavigationItem
                icon={<IoMdExit />}
                label="Sair"
                onClick={signOut}
              />
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
