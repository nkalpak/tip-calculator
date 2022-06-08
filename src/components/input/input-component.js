import { Box, Input } from "theme-ui";
import iconDollar from "../images/icon-dollar.svg";

export default function InputComponent({ onClick, imageSource, onInput }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "5px",
      }}
      onClick={onClick}
      onInput={onInput}
    >
      {/*<img src={imgSource} alt="dollar image" />*/}
      <Input
        sx={{
          color: "hsl(183, 100%, 15%)",
          fontWeight: "700",
          backgroundImage: { imageSource },
          backgroundSize: "200px",
          backgroundColor: "hsl(189, 41%, 97%)",
          borderStyle: "transparent",
        }}
        defaultValue={0}
      />
    </Box>
  );
}

//ne moze ova dole vaka, slikata nemozam da ja stavam vo Input
//<Box
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         backgroundColor: "hsl(189, 41%, 97%)",
//         padding: "10px 15px",
//         borderRadius: "5px",
//         fontWeight: "700",
//       }}
//       onClick={onClick}
//     >
//       <img src={imgSource} alt="dollar image" />
//       <Input
//         sx={{
//           color: "hsl(183, 100%, 15%)",
//           fontWeight: "700",
//           width: "70px",
//           borderStyle: "none",
//         }}
//         defaultValue={inputCost}
//       />
//     </Box>

//prethodnoto reshenie
//   <Box
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         backgroundColor: "hsl(189, 41%, 97%)",
//         padding: "10px 15px",
//         borderRadius: "5px",
//       }}
//       onClick={onClick}
//     >
//       <img src={imgSource} alt="dollar image" />
//       <h4
//         style={{
//           color: "hsl(183, 100%, 15%)",
//           margin: "0",
//           fontSize: "20px",
//         }}
//       >
//         {inputCost}
//       </h4>
//     </Box>
