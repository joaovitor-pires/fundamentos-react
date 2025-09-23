import { Button, HStack, Input, InputGroup, Portal, Select, SimpleGrid } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import type { ListCollection } from "@chakra-ui/react";

export type StatusOption = {
  label: string;
  value: "todos" | "ativo" | "inativo";
};

interface StudentsFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  status: ListCollection<StatusOption>;
  onStatusChange?: (value: "todos" | "ativo" | "inativo") => void;
}

export function StudentsFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: StudentsFiltersProps) {
  return (
    <SimpleGrid row={2} rowGap={4}>
      <InputGroup flex={1} startElement={<LuSearch />}>
        <Input
          placeholder="Busque por Nome, E-mail ou Curso..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </InputGroup>

      <HStack justify="space-between" wrap="wrap">
        <Select.Root
          collection={status}
          size="sm"
          width="320px"
          onValueChange={(value) => {
            const selected = Array.isArray(value) ? value[0] : value;
            onStatusChange?.(selected as "todos" | "ativo" | "inativo");
          }}
        >
          <Select.HiddenSelect />
          <Select.Label>Selecione o Status</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Status" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {status.items.map((item) => (
                  <Select.Item item={item} key={item.value}>
                    {item.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>

        <Button variant="outline">Filtros</Button>
        <Button variant="outline">Exportar</Button>
        <Button variant="outline">Novo Estudante</Button>
      </HStack>
    </SimpleGrid>
  );
}
