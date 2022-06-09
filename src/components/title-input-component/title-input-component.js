import TitleComponent from "../title/title-component";
import InputComponent from "../input/input-component";
import { Box, Label } from "theme-ui";
import { useState } from "react";

export default function TitleInputComponent({
  title,
  iconSource,
  onInput,
  value,
  checkValue,
}) {
  const [hoverInput, setHoverInput] = useState(false);

  let bill = 0;
  let numberOfPeople = 0;
  {
    title === "Bill" ? (bill = value) : (numberOfPeople = value);
  }

  return (
    <Box sx={{ margin: "10px 0" }}>
      <TitleComponent>{title}</TitleComponent>
      {checkValue === 0 ? (
        <Label sx={{ color: "#E17052" }}>Can't be zero</Label>
      ) : null}
      <InputComponent
        sx={{
          color: hoverInput ? "#26C2AE" : "#00474B",
          cursor: hoverInput ? "pointer" : "null",
        }}
        icon={iconSource}
        onMouseOver={() => {
          setHoverInput(true);
        }}
        onMouseLeave={() => {
          setHoverInput(false);
        }}
        onInput={onInput}
      />
    </Box>
  );
}
