import { Box, Text } from "theme-ui";

export default function CostComponent({ title, cost }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          fontSize: "14px",
        }}
      >
        <h4
          style={{
            color: "white",
            margin: 0,
          }}
        >
          {title}
        </h4>
        <h5
          style={{
            color: "darkgray",
            margin: 0,
          }}
        >
          / person
        </h5>
      </Box>

      <h2
        style={{
          color: "hsl(172, 67%, 45%)",
          fontSize: "35px",
        }}
      >
        {cost}
      </h2>
    </Box>
  );
}
