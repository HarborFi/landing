import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import { Menu } from "./Menu";
import { AppButton } from "./AppButton";

// assets
import { Logo } from "./Logo";
const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const Nav = () => {
  const [word, setWord] = useState("Nav");

  useEffect(() => {
    fetch(window.location.href + `/api/hello`)
      .then((res) => res.json())
      .then((json) => setWord(json.name));
  }, []);

  return (
    <StyledNav>
      <Logo isDark={true} />
      <Menu />
      <AppButton />
    </StyledNav>
  );
};
