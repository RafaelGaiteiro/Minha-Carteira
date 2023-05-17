import React from "react";
import { Container } from "./styles";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];

  /*
   * Toda vez que mudar algum valor ele será capturado
   * pega o evento através de event: React.ChangeEvent
   * que recebe o elemento selecionado <HTMLSelectElement>
   */

  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}

const SelectInput = ({
  options,
  onChange,
  defaultValue,
}: ISelectInputProps) => {
  return (
    <Container>
      <select onChange={onChange} defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default SelectInput;
