import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  // a primeira coluna ocupa 250px e a segunda o restante
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    "AS MH"
    "AS CT";

  height: 100vh;
`;
