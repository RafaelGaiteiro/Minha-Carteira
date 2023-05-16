import styled from "styled-components";
import ReactSwitch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
`;

/* Personalização de componente existente
 * Exportação => cria uma constante => nome do estilo => styled
 * => (NomeDoComponente) => propriedade attrs permite editar as
 * propriedades desse componente => <NomeDaInterfacePadrão>
 */
export const ToggleSelector = styled(ReactSwitch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning,
  })
)<ReactSwitchProps>`
  margin: 0 7px;
`;
