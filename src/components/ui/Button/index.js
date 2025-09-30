import React from "react";
import * as SC from "./styles";

export const Button = ({ children, onClick, ...props }) => (
  <SC.Button onClick={onClick} {...props}>
    {children}
  </SC.Button>
);
