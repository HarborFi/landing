import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import { Menu } from "./Menu";
import { AppButton } from "./AppButton";

const StyledNav = styled.nav`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    padding: 2em;
  }
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
      <div>Logo</div>
      <Menu />
      <AppButton />
    </StyledNav>
  );
};
