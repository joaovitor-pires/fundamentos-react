import { IndicatorCard } from "@/components/IndicatorCard";
import { RecentActivity } from "@/components/RecentActivity";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Card, HStack} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiAward, BiCalendar } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { IoIosBook } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";

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

  const iconMap: Record<string, IconType> = {
    enrollment: IoPeopleSharp,
    grade: BiAward,
    course: IoIosBook,
    calendar: BiCalendar,
  };

  return (
    <DefaultLayout
      title="Dashboard Acadêmico"
      description="Visão geral do sistema universitário"
    >
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

      <HStack mt={8}>
        <Card.Root>
          <Card.Header>
            <Card.Title>Atividades Recentes</Card.Title>
          </Card.Header>
          <Card.Body gap={10}>
            {recentActivities.map((activity) => {
              const ActivityIcon = iconMap[activity.type] ?? AiFillQuestionCircle;
              return (
                <RecentActivity
                  key={activity.id}
                  colorPallete="blue"
                  icon={ActivityIcon}
                  title={activity.title}
                  time={activity.time}
                />
              );
            })}
          </Card.Body>
        </Card.Root>
      </HStack>
    </DefaultLayout>
  );
}
