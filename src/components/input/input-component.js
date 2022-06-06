import { Box } from "theme-ui";

export default function InputComponent({ imgSource, inputCost }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "hsl(189, 41%, 97%)",
        padding: "10px 15px",
        borderRadius: "5px",
      }}
    >
      <img src={imgSource} alt="dollar image" />
      <h4
        style={{
          color: "hsl(183, 100%, 15%)",
          margin: "0",
          fontSize: "20px",
        }}
      >
        {inputCost}
      </h4>
    </Box>
  );
}
