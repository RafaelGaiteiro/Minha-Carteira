import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};

  padding: 25px;

  /* Trava a tela e coloca scroll
  * Primeiro define o height do Content 
  * pela diferença do height do MainHeader
  */
  height: calc(100vh - 70px);
  // overflow-y - usado na vertical
  overflow-y: scroll;

/* -- ! ESSE RECURSO NÃO ESTÁ FUNCIONANDO ! -- */

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;
