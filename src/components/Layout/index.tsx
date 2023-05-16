import React from "react";
import { Grid } from "./styles";

// ../ sai da pasta
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  );
};

export default Layout;
