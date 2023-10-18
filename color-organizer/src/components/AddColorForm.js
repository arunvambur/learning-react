import React, { useRef, useState } from "react";
import Color from "./Color";
import { useInput } from "../hooks/useinput-hook";
import { useColors } from "../hooks/color-hook";

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors();

  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle("");
    resetColor("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="color title ..."
        required
        {...titleProps}
      />
      <input type="color" required {...colorProps} />
      <button>Add</button>
    </form>
  );
}
