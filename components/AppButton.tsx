import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5em 1em;
  font-weight: 400;
  color: white;
  border-radius: 18px;
  background-color: black;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  &:hover {
    background: #272729;
  }
`;

export const AppButton = () => {
  return <StyledButton>Launch App</StyledButton>;
};
