import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  padding: 1em;
  width: 100%;
  margin: 0 auto;
  max-width: 1140px;
  @media screen and (min-width: 768px) {
    padding: 1em 2em;
  }
  @media screen and (min-width: 1024px) {
    padding: 1em 4em;
  }
  @media screen and (min-width: 1280px) {
    padding: 1em 12em;
  }
  @media screen and (min-width: 1440px) {
    padding: 1em 20em;
  }
  @media screen and (min-width: 1440px) {
    padding: 1em 20em;
  }
`;

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: LayoutProps) => {
  return <StyledLayout>{children}</StyledLayout>;
};
