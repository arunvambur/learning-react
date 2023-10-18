import React, { useContext } from "react";
import Color from "./Color";
import { useColors } from "../hooks/color-hook";
import { css } from "@emotion/css";

export default function ColorList() {
  const { colors } = useColors();

  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}
