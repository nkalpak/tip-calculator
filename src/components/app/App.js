import { Box, Button, Text } from "theme-ui";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        mt: 4,
      }}
    >
      <Text>Hello world</Text>
      <Button>A button</Button>
    </Box>
  );
}

export default App;
