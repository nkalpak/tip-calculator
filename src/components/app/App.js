import { Box, Button, Flex, Grid, Input } from "theme-ui";
import Title from "../title/title-component";
import InputComponent from "../input/input-component";
import iconDollar from "../images/icon-dollar.svg";
import iconPerson from "../images/icon-person.svg";
import TitleComponent from "../title/title-component";
import TipComponent from "../tip/tip-component";
import CostComponent from "../cost/cost-component";

//just checking if the push works
export default function App() {
  return (
    <Box
      p={3}
      sx={{
        backgroundColor: " hsl(185, 41%, 84%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/*Left Card*/}
        <Box
          p={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "350px",
          }}
        >
          <Box>
            <TitleComponent title="Bill" />
            <InputComponent imgSource={iconDollar} inputCost="142.55" />
          </Box>

          <Box mt={3} mb={3}>
            <TitleComponent title="Select Tip %" />
            <Grid columns={3} gap={2}>
              <TipComponent tip="5%" />
              <TipComponent tip="10%" />
              <TipComponent tip="15%" />
              <TipComponent tip="25%" />
              <TipComponent tip="50%" />
              <TipComponent tip="75%" />
            </Grid>
          </Box>

          <Box>
            <TitleComponent title="Number of People" />
            <InputComponent imgSource={iconPerson} inputCost="5" />
          </Box>
        </Box>

        {/*Right card*/}
        <Box
          p={4}
          m={4}
          sx={{
            backgroundColor: "hsl(183, 100%, 15%)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "350px",
          }}
        >
          <Box>
            <CostComponent title="Tip Amount " cost="$4.27" />
            <CostComponent title="Total" cost="$32.79" />
          </Box>

          <Button
            sx={{
              color: "hsl(183, 100%, 15%)",
              backgroundColor: "hsl(172, 67%, 45%)",
            }}
          >
            RESET
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
