import { Box, Label } from "theme-ui";

export default function CostComponent({ children, price, cost }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "20px 0",
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
          {children}
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
          fontSize: "40px",
          marginLeft: "200px",
        }}
      >
        {cost}
        {price}
      </Label>
    </Box>
  );
}
