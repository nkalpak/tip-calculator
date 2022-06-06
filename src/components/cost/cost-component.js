import { Box, Flex, Text } from "theme-ui";

export default function CostComponent({ title, cost }) {
  return (
    <Flex>
      <Box>
        <Text
          sx={{
            color: "white",
          }}
        >
          {title}
        </Text>
        <Text
          sx={{
            color: "white",
          }}
        >
          /person
        </Text>
      </Box>
      <span
        style={{
          color: "hsl(172, 67%, 45%)",
          fontSize: "24px",
          padding: "0 25px",
        }}
      >
        {cost}
      </span>
    </Flex>
  );
}
