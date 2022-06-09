import { Box, Button } from "theme-ui";

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

//za input, site funkcii ne bea staveni vo <Input/> tuku vo <Box> nad input
// <Box
//       onClick={onClick}
//       onMouseOver={onMouseOver}
//       onMouseLeave={onMouseLeave}
//     >
//       <Button sx={sx}>{currentTip}</Button>
//     </Box>
