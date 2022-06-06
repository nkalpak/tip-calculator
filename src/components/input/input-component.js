import { Box, Image, Input } from "theme-ui";

export default function InputComponent({ inputCost }) {
  return (
    <Box
      sx={{
        color: "hsl(183, 100%, 15%)",
      }}
    >
      {inputCost}
    </Box>
  );
}
