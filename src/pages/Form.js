import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import { useState } from "react";

export default function Form() {
  const [isDark, setDark] = useState(false);

  return (
    <div>
      <Header colorState={isDark} />
      <Content colorState={isDark} setColor={setDark} />
    </div>
  );
}
