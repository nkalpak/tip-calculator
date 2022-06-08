import { theme } from "../../lib/theme-ui";
import { Label } from "theme-ui";

export default function TitleComponent({ title, numberOfPeople }) {
  return (
    <Label
      sx={{
        color: "#5E7A7D",
        fontSize: "16px",
        fontFamily: "Space Mono",
        fontWeight: "700",
        marginBottom: "5px",
      }}
    >
      {title}
    </Label>
  );
}
