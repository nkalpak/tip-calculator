import { Button } from "theme-ui";

export default function TipComponent({ tip }) {
  return (
    <Button
      sx={{
        color: "white",
        backgroundColor: "hsl(183, 100%, 15%)",
      }}
    >
      {tip}
    </Button>
  );
}
