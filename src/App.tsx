import Globalstyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import Routes from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <Globalstyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
