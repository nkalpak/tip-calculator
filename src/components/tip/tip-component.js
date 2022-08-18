import { Button } from "theme-ui";

export default function TipComponent({
  currentTip,
  onClick,
  onMouseOver,
  onMouseLeave,
  sx,
}) {
  return (
    <Button
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      sx={sx}
    >
      {currentTip}
    </Button>
  );
}