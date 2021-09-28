import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import { Menu } from "./Menu";
import { AppButton } from "./AppButton";

// assets
import { Logo } from "./Logo";
const StyledNav = styled.nav`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    padding: 2em;
  }
`;
const StyledImage = styled.svg`
  width: auto;
  height: 50px;
  max-width: inherit;
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
