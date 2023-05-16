import React from "react";
import { Container } from "../Content/styles";

/*
 * Forma atualizada de usar { children }
 * Criar uma interface que recebe children
 * do tipo React.ReactNode, após passa ela
 * como type para o componente
 */

interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <Container>{children}</Container>;
};

export default Content;
