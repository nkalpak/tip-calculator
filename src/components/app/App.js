import { Box, Button, Grid } from "theme-ui";
import iconDollar from "../images/icon-dollar.svg";
import iconPerson from "../images/icon-person.svg";
import TitleComponent from "../title/title-component";
import TipComponent from "../tip/tip-component";
import CostComponent from "../cost/cost-component";
import { useState } from "react";
import TitleInputComponent from "../title-input-component/title-input-component";

//check Strict Mode for if the components are ok

export default function App() {
  //  function for saving the bill and numberOfPeople input, and the selected tip
  const [bill, setBill] = useState(0);
  let [selectedTip, setSelectedTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const integerBill = parseFloat(bill);
  const integerSelectedTip = parseFloat(selectedTip);
  const integerNumberOfPeople = parseFloat(numberOfPeople);

  //  hover style for the button
  const [hoverButton, setHoverButton] = useState(false);

  //default style for reset button and clicked tip button
  const [buttonsStyle, setButtonsStyle] = useState(false);

  //going through all tip components
  const tips = ["5%", "10%", "15%", "25%", "50%", "70%"];
  let tipComponents = tips;
  {
    tipComponents = tips.map((tip) => {
      return (
        <TipComponent //nz kako da napravam sekoe poedinechno da ima efekt
          key={tip}
          sx={{
            backgroundColor: buttonsStyle ? "#9FE8DF" : "hsl(183, 100%, 15%)",
            // backgroundColor: buttonsStyle treba da e ovoj stil za clicked, ama nez kako
            //   ? "#26C2AE"
            //   : "hsl(183, 100%, 15%)",
            color: buttonsStyle ? "#00474B" : "white",
            cursor: buttonsStyle ? "pointer" : null,
            fontSize: "20px",
          }}
          currentTip={tip}
          onClick={() => {
            setSelectedTip(parseInt(tip));
            setButtonsStyle(true);
          }}
          onMouseOver={() => {
            setButtonsStyle(true);
          }}
          onMouseLeave={() => {
            setButtonsStyle(false);
          }}
        />
      );
    });
  }

  return (
    <Box
      p={5}
      sx={{
        backgroundColor: "hsl(185, 41%, 84%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        p={4}
        sx={{
          borderRadius: "10px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/*Left Card*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "300px",
            marginRight: "40px",
          }}
        >
          <TitleInputComponent
            title="Bill"
            iconSource={iconDollar}
            onInput={(e) => {
              setBill(e.target.value);
            }}
            value={bill}
          />

          <Box mt={3} mb={3}>
            <TitleComponent>Select Tip %</TitleComponent>
            <Grid columns={3} gap={2}>
              {tipComponents}
            </Grid>
          </Box>

          <TitleInputComponent
            title="Number of People"
            iconSource={iconPerson}
            onInput={(e) => {
              setNumberOfPeople(e.target.value);
            }}
            value={numberOfPeople}
          />
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
            width: "350px",
          }}
        >
          <Box>
            <CostComponent price={tipAmount} cost="$">
              Tip Amount
            </CostComponent>
            <CostComponent price={total} cost="$">
              Total
            </CostComponent>
          </Box>

          <Button
            sx={{
              color: "#00474B",
              backgroundColor: hoverButton ? "#9FE8DF" : "#26C2AE",
              cursor: hoverButton ? "pointer" : null,
              textTransform: "uppercase",
            }}
            onClick={() => {
              setTipAmount(0);
              setTotal(0);
            }}
            onMouseOver={() => {
              setHoverButton(true);
            }}
            onMouseLeave={() => {
              setHoverButton(false);
            }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
// the tip amount formula (totalBill - bill) / numberOfPeople
//  the total formula totalBill / numberOfPeople

// {
//                 numberOfPeople === 0 ? showlabel : dontShowlabel
//               } vo input component vtoriot

//ne znam kako e formulata za price, treba da ja najdam
// const totalBill = (cost, tip) => {
//   const tipForBill = (cost / 100) * tip; //(200 / 100) * 5%
//   console.log(cost + tipForBill);
//   return cost + tipForBill;
// };
// const sum =
// (totalBill(integerBill, integerSelectedTip) - integerBill) /
// integerNumberOfPeople;

// setTipAmount((totalBill - bill) / numberOfPeople);
