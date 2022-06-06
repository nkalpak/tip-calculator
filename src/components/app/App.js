import { Box, Button, Flex, Grid, Input } from "theme-ui";
import Title from "../title/title";
import InputComponent from "../input/input-component";
import iconDollar from "../images/icon-dollar.svg";
import TitleComponent from "../title/title";
import TipComponent from "../tip/tip";
import CostComponent from "../cost/cost-component";

export default function App() {
  return (
    <Box
      p={3}
      sx={{
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        p={3}
        sx={{
          borderRadius: "10px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          width: "50%",
        }}
      >
        {/*Left Card*/}
        <Box p={4}>
          <Box>
            <TitleComponent title="Bill" />
            <InputComponent inputCost="142.55" />
          </Box>

          <Box>
            <TitleComponent title="Select Tip %" />
            <Grid columns={3} gap={1}>
              <TipComponent tip="5%" />
              <TipComponent tip="10%" />
              <TipComponent tip="15%" />
              <TipComponent tip="25%" />
              <TipComponent tip="50%" />
              <TipComponent tip="Custom" />
            </Grid>
          </Box>

          <Box>
            <TitleComponent title="Number of People" />
            <InputComponent inputCost="5" />
          </Box>
        </Box>

        {/*Right card*/}
        <Box
          p={4}
          sx={{
            backgroundColor: "hsl(183, 100%, 15%)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <CostComponent title="Tip Amount" cost="13.00" />
            <CostComponent title="Total" cost="15.00" />
          </Box>

          <Button
            sx={{
              color: "hsl(183, 100%, 15%)",
              backgroundColor: "hsl(172, 67%, 45%)",
            }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

//<Box
//           sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 2,
//               mt: 4,
//           }}
//       >
//           <Text>Hello world</Text>
//           <Button>A button</Button>
//       </Box>
