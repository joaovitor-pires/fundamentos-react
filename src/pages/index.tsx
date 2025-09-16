import { IndicatorCard } from "@/components/IndicatorCard";
import { CustomCard } from "@/components/CustomCard";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Card, ColorPalette, HStack, SimpleGrid} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiAward, BiCalendar } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { IoIosBook, IoMdCalendar, IoMdPeople } from "react-icons/io";
import { IoAlertCircle, IoPeopleSharp } from "react-icons/io5";

export default function Home() {
  const recentActivities = [
    {
      id: 1,
      type: "enrollment",
      title: "Nova matrícula: Maria Silva - Engenharia de Software",
      time: "2 min atrás"
    },
    {
      id: 2,
      type: "grade",
      title: "Notas lançadas: Cálculo I - Prof. João Santos",
      time: "15 min atrás"
    },
    {
      id: 3,
      type: "course",
      title: "Novo curso criado: Análise de Dados",
      time: "1 hora atrás"
    },
    {
      id: 4,
      type: "calendar",
      title: "Evento adicionado: Semana da Computação",
      time: "3 horas atrás"
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      color: "red",
      type: "exam",
      title: "Início das Provas Finais",
      dateTime: "15 de Dezembro às 08:00"
    },
    {
      id: 2,
      color: "green",
      type: "meeting",
      title: "Reunião de Coordenadores",
      dateTime: "18 de Dezembro às 14:00"
    },
    {
      id: 3,
      color: "orange",
      type: "deadline",
      title: "Fim do Semestre",
      dateTime: "20 de Dezembro às 17:00"
    },
  ];

  const iconMapActivities: Record<string, IconType> = {
    enrollment: IoPeopleSharp,
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
      title="Dashboard Acadêmico"
      description="Visão geral do sistema universitário"
    >
      <SimpleGrid row={2}>
        <HStack gap={8}>
          <IndicatorCard
            label="Total de Estudantes"
            value={2.847}
            indicator="+12% este mês"
            icon={IoPeopleSharp}
            colorPallete="blue"
          />

          <IndicatorCard
            label="Professores Ativos"
            value={198}
            indicator="+3% este mês"
            icon={FaGraduationCap}
            colorPallete="green"
          />

          <IndicatorCard
            label="Cursos Oferecidos"
            value={24}
            indicator="+2% este mês"
            icon={ImBooks}
            colorPallete="purple"
          />

          <IndicatorCard
            label="Taxa de Aprovação"
            value={0.892}
            style="percent"
            maximumFractionDigits={2}
            minimumFractionDigits={2}
            indicator="+2.1% este mês"
            icon={FaArrowTrendUp}
            colorPallete="orange"
          />
        </HStack>

        <HStack align="start" mt={8} gap={8}>
          <Card.Root>
            <Card.Header>
              <Card.Title>Atividades Recentes</Card.Title>
            </Card.Header>
            <Card.Body gap={8}>
              {recentActivities.map((activity) => {
                const ActivityIcon = iconMapActivities[activity.type] ?? AiFillQuestionCircle;
                return (
                  <CustomCard
                    key={activity.id}
                    colorPallete="blue"
                    icon={ActivityIcon}
                    title={activity.title}
                    description={activity.time}
                  />
                );
              })}
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <Card.Title>Próximos Eventos</Card.Title>
            </Card.Header>
            <Card.Body gap={8}>
              {upcomingEvents.map((event) => {
                const EventIcon = iconMapEvents[event.type] ?? AiFillQuestionCircle;
                return (
                  <CustomCard
                    key={event.id}
                    colorPallete={event.color as ColorPalette}
                    icon={EventIcon}
                    title={event.title}
                    description={event.dateTime}
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
