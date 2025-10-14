import { Card, ColorPalette, HStack, SimpleGrid } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiAward, BiCalendar } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { IoIosBook, IoMdCalendar, IoMdPeople } from "react-icons/io";
import { IoAlertCircle, IoPeopleSharp } from "react-icons/io5";
import { CustomCard } from "@/components/CustomCard";
import { IndicatorCard } from "@/components/IndicatorCard";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  const recentActivities = [
    {
      id: 1,
      type: "enrollment",
      title: "Nova matrícula: Maria Silva - Engenharia de Software",
      time: "2 min atrás",
    },
    {
      id: 2,
      type: "grade",
      title: "Notas lançadas: Cálculo I - Prof. João Santos",
      time: "15 min atrás",
    },
    {
      id: 3,
      type: "course",
      title: "Novo curso criado: Análise de Ddoas",
      time: "1 hora atrás",
    },
    {
      id: 4,
      type: "calendar",
      title: "Evento adicionado: Semana da Computação",
      time: "2 horas atrás",
    },
  ];

  const customCard = [
    {
      id: 1,
      color: "blue",
      type: "exam",
      title: "Inicio das Provas Finais",
      dateTime: "15 Dez 2025 as 08:00",
    },
    {
      id: 2,
      color: "red",
      type: "meeting",
      title: "Reunião de Coordenadores",
      dateTime: "18 Dez 2025 as 14:00",
    },
    {
      id: 3,
      color: "orange",
      type: "deadline",
      title: "Fim de Semestre",
      dateTime: "20 Dez 2025 as 17:00",
    },
  ];

  const iconMapActivities: Record<string, IconType> = {
    enrollment: IoMdPeople,
    grade: BiAward,
    course: IoIosBook,
    calendar: BiCalendar,
  };

  const iconMapEvents: Record<string, IconType> = {
    exam: IoAlertCircle,
    meeting: IoMdPeople,
    deadline: IoMdCalendar,
  };

  return (
    <DefaultLayout
      tittle="Dashboard Acadêmico"
      descripition="Visão geral do sistema universitáro"
    >
      <SimpleGrid row={2}>
        <HStack gap={8}>
          <IndicatorCard
            label="Total de Estudantes"
            value={2342}
            indicator="-32% este mes"
            icon={IoPeopleSharp}
            colorPallete="blue"
          />

          <IndicatorCard
            label="Professor Ativos"
            value={53}
            indicator="+1% este mes"
            icon={FaGraduationCap}
            colorPallete="green"
          />

          <IndicatorCard
            label="Cursos Oferecidos"
            value={17}
            indicator="+3% este mes"
            icon={ImBooks}
            colorPallete="red"
          />

          <IndicatorCard
            label="Taxa de Aprovação"
            value={0.23}
            style="percent"
            minimumFractionDigits={2}
            maximumFractionDigits={2}
            indicator="+12% este mes"
            icon={FaArrowTrendUp}
            colorPallete="orange"
          />
        </HStack>

        <HStack mt={8} gap={8} alignItems="flex-start">
          <Card.Root>
            <Card.Header>
              <Card.Title>Atividades recentes</Card.Title>
            </Card.Header>
            <Card.Body gap={6}>
              {recentActivities.map((activity) => {
                const ActivityIcon =
                  iconMapActivities[activity.type] ?? AiFillQuestionCircle;
                return (
                  <CustomCard
                    key={activity.id}
                    color="blue"
                    icon={ActivityIcon}
                    title={activity.title}
                    time={activity.time}
                  />
                );
              })}
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <Card.Title>Proximos Eventos</Card.Title>
            </Card.Header>
            <Card.Body gap={6}>
              {customCard.map((events) => {
                const EventsIcon =
                  iconMapEvents[events.type] ?? AiFillQuestionCircle;
                return (
                  <CustomCard
                    key={events.id}
                    color={events.color as ColorPalette}
                    icon={EventsIcon}
                    title={events.title}
                    time={events.dateTime}
                  />
                );
              })}
            </Card.Body>
          </Card.Root>
        </HStack>
      </SimpleGrid>
    </DefaultLayout>
  );
}
