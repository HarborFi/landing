import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledBar = styled.div`
  display: flex;
  align-items: center;
`;

const StyledItem = styled.div`
  margin: 0 2em;
  color: #506690;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    color: #6c8aec;
  }
`;

export const Menu = () => {
  return (
    <StyledBar>
      <StyledItem>Home</StyledItem>
      <StyledItem>FAQ</StyledItem>
    </StyledBar>
  );
};
