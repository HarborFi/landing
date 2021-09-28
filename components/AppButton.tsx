import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #3ce39b;
  padding: 0.75em 1em;
  box-shadow: 0 0.5rem 1.5rem rgba(22, 28, 45, 0.1) !important;
  color: white;
  border-radius: 0.375rem;
  line-height: 1.6;
  border: none;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    background-color: #28d98d;
  }
`;

export const AppButton = () => {
  return <StyledButton>Launch App</StyledButton>;
};
