import { Button } from "theme-ui";

export default function TipComponent({
  tip,
  onClick,
  onMouseOver,
  onMouseLeave,
  style,
}) {
  return (
    <Button
      sx={style}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {tip}
    </Button>
  );
}
