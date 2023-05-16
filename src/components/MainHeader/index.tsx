import React, { useMemo } from "react";
import { Contaiter, Profile, UserName, Welcome } from "./styles";
import emojis from "../../utils/emojis";
import Toggle from "../Toggle";

const MainHeader: React.FC = () => {
  
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Contaiter>
      <Toggle/>
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Rafael Krämer</UserName>
      </Profile>
    </Contaiter>
  );
};

export default MainHeader;
