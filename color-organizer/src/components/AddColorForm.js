import React, { useRef, useState } from "react";
import Color from "./Color";
import { useInput } from "../hooks/UseInput";

export default function AddColorForm({ onNewColor = (f) => f }) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
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
