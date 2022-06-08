import { Box, Button, Grid } from "theme-ui";
import InputComponent from "../input/input-component";
import iconDollar from "../images/icon-dollar.svg";
import iconPerson from "../images/icon-person.svg";
import TitleComponent from "../title/title-component";
import TipComponent from "../tip/tip-component";
import CostComponent from "../cost/cost-component";
import { useState } from "react";

export default function App() {
  //  function for saving the bill and numberOfPeople input, and the selected tip
  const [bill, setBill] = useState(0);
  let [selectedTip, setSelectedTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const integerBill = parseInt(bill);
  const integerSelectedTip = parseInt(selectedTip);
  const integerNumberOfPeople = parseInt(numberOfPeople);

  //  hover style for the button
  const [hoverButtonAndTip, setHoverButtonAndTip] = useState(false);

  // hover style for the input bill
  const [hoverInputBill, setHoverInputBill] = useState(false);

  //default style for reset button and clicked tip button
  const [buttonsStyle, setButtonsStyle] = useState(false);

  //going through all tip components
  const tips = ["5%", "10%", "15%", "25%", "50%", "70%"];
  let tipComponents = tips;
  {
    tipComponents = tips.map((tip) => {
      return (
        <TipComponent
          key={tip}
          style={{
            backgroundColor: hoverButtonAndTip
              ? "#9FE8DF"
              : "hsl(183, 100%, 15%)",
            // backgroundColor: buttonsStyle treba da e ovoj stil za clicked, ama nez kako
            //   ? "#26C2AE"
            //   : "hsl(183, 100%, 15%)",
            color: hoverButtonAndTip ? "#00474B" : "white",
            cursor: hoverButtonAndTip ? "pointer" : null,
          }}
          currentTip={tip}
          onClick={() => {
            setSelectedTip(parseInt(tip));
            setButtonsStyle(true);
          }}
          onMouseOver={() => {
            setHoverButtonAndTip(true);
          }}
          onMouseLeave={() => {
            setHoverButtonAndTip(false);
          }}
        />
      );
    });
  }

  return (
    <Box
      p={3}
      sx={{
        backgroundColor: "hsl(185, 41%, 84%)",
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
            <InputComponent
              sx={{
                color: hoverInputBill ? "#26C2AE" : "#00474B",
                cursor: hoverInputBill ? "pointer" : null,
              }}
              imgSource={iconDollar}
              onInput={(e) => {
                setBill(e.target.value);
              }}
              onMouseOver={() => {
                setHoverInputBill(true);
              }}
              onMouseLeave={() => {
                setHoverInputBill(false);
              }}
            />
          </Box>

          <Box mt={3} mb={3}>
            <TitleComponent title="Select Tip %" />
            <Grid columns={3} gap={2}>
              {tipComponents}
              {/*{tips.map((tip) => {*/}
              {/*  return (*/}
              {/*    <TipComponent*/}
              {/*      key={tip}*/}
              {/*      style={{*/}
              {/*        backgroundColor: hoverButtonAndTip*/}
              {/*          ? "#9FE8DF"*/}
              {/*          : "hsl(183, 100%, 15%)",*/}
              {/*        // backgroundColor: buttonsStyle treba da e ovoj stil za clicked, ama nez kako*/}
              {/*        //   ? "#26C2AE"*/}
              {/*        //   : "hsl(183, 100%, 15%)",*/}
              {/*        color: hoverButtonAndTip ? "#00474B" : "white",*/}
              {/*        cursor: hoverButtonAndTip ? "pointer" : null,*/}
              {/*      }}*/}
              {/*      currentTip={tip}*/}
              {/*      onClick={() => {*/}
              {/*        setSelectedTip(parseInt(tip));*/}
              {/*        setButtonsStyle(true);*/}
              {/*      }}*/}
              {/*      onMouseOver={() => {*/}
              {/*        setHoverButtonAndTip(true);*/}
              {/*      }}*/}
              {/*      onMouseLeave={() => {*/}
              {/*        setHoverButtonAndTip(false);*/}
              {/*      }}*/}
              {/*    />*/}
              {/*  );*/}
              {/*})}*/}
            </Grid>
          </Box>

          <Box>
            <TitleComponent title="Number of People" />
            <InputComponent
              sx={{
                color: hoverInputBill ? "#26C2AE" : "#00474B",
                cursor: hoverInputBill ? "pointer" : null,
              }}
              imgSource={iconPerson}
              onInput={(e) => {
                setNumberOfPeople(e.target.value);
              }}
              onMouseOver={() => {
                setHoverInputBill(true);
              }}
              onMouseLeave={() => {
                setHoverInputBill(false);
              }}
            />
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
            <CostComponent price={0} title="Tip Amount " cost="$" />
            <CostComponent price={0} title="Total" cost="$" />
          </Box>

          <Button
            sx={{
              color: "#00474B",
              backgroundColor: hoverButtonAndTip ? "#9FE8DF" : "#26C2AE",
              cursor: hoverButtonAndTip ? "pointer" : null,
              textTransform: "uppercase",
            }}
            onClick={() => {
              setTipAmount(0);
              setTotal(0);
            }}
            onMouseOver={() => {
              setHoverButtonAndTip(true);
            }}
            onMouseLeave={() => {
              setHoverButtonAndTip(false);
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
