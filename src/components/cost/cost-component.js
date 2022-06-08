import { Box, Label } from "theme-ui";

export default function CostComponent({ price, title, cost }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          fontSize: "14px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Label
          sx={{
            color: "white",
            margin: 0,
            width: "150px",
          }}
        >
          {title}
        </Label>
        <Label
          sx={{
            color: "darkgray",
            margin: 0,
            width: "150px",
          }}
        >
          / person
        </Label>
      </Box>

      <Label
        sx={{
          color: "hsl(172, 67%, 45%)",
          fontSize: "35px",
          marginLeft: "200px",
        }}
      >
        {cost}
        {price}
      </Label>
    </Box>
  );
}
