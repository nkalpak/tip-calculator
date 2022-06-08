import { Box, Button, Flex, Grid, Input } from "theme-ui";
import InputComponent from "../input/input-component";
import iconDollar from "../images/icon-dollar.svg";
import iconPerson from "../images/icon-person.svg";
import TitleComponent from "../title/title-component";
import TipComponent from "../tip/tip-component";
import CostComponent from "../cost/cost-component";
import { useState } from "react";

export default function App() {
  //ne znam kako e formulata za price, treba da ja najdam
  const totalBill = (cost, tip) => {
    let calc1 = cost * tip;
    calc1 /= 10;
    return calc1 * cost;
  };

  //  function for saving the bill and numberOfPeople input, and the selected tip
  const [bill, setBill] = useState(0);
  let [selectedTip, setSelectedTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  //for the second card
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // setTipAmount((totalBill - bill) / numberOfPeople);

  //  hover style for the button
  const [hoverButton, setHoverButton] = useState(false);

  // hover style for the tip buttons
  const [hoverTip, setHoverTip] = useState(false);

  // hover style for the input bill
  const [hoverInputBill, setHoverInputBill] = useState(false);

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
                borderStyle: hoverInputBill
                  ? "hsl(172, 67%, 45%)"
                  : "transparent",
              }}
              imgSource={iconDollar}
              onInput={(e) => {
                setBill(e.target.value);
              }}
            />
          </Box>

          <Box mt={3} mb={3}>
            <TitleComponent title="Select Tip %" />
            <Grid columns={3} gap={2}>
              <TipComponent
                style={{
                  backgroundColor: hoverTip
                    ? "hsl(172, 67%, 45%)"
                    : "hsl(183, 100%, 15%)",
                  cursor: hoverTip ? "pointer" : null,
                }}
                tip="5%"
                onClick={() => {
                  setSelectedTip(5);
                }}
                onMouseOver={() => {
                  setHoverTip(true);
                }}
                onMouseLeave={() => {
                  setHoverTip(false);
                }}
              />
              <TipComponent
                style={{
                  backgroundColor: hoverTip
                    ? "hsl(172, 67%, 45%)"
                    : "hsl(183, 100%, 15%)",
                  cursor: hoverTip ? "pointer" : null,
                }}
                tip="10%"
                onClick={() => {
                  setSelectedTip(10);
                }}
                onMouseOver={() => {
                  setHoverTip(true);
                }}
                onMouseLeave={() => {
                  setHoverTip(false);
                }}
              />
              <TipComponent
                style={{
                  backgroundColor: hoverTip
                    ? "hsl(172, 67%, 45%)"
                    : "hsl(183, 100%, 15%)",
                  cursor: hoverTip ? "pointer" : null,
                }}
                tip="15%"
                onClick={() => {
                  setSelectedTip(15);
                }}
                onMouseOver={() => {
                  setHoverTip(true);
                }}
                onMouseLeave={() => {
                  setHoverTip(false);
                }}
              />
              <TipComponent
                style={{
                  backgroundColor: hoverTip
                    ? "hsl(172, 67%, 45%)"
                    : "hsl(183, 100%, 15%)",
                  cursor: hoverTip ? "pointer" : null,
                }}
                tip="25%"
                onClick={() => {
                  setSelectedTip(25);
                }}
                onMouseOver={() => {
                  setHoverTip(true);
                }}
                onMouseLeave={() => {
                  setHoverTip(false);
                }}
              />
              <TipComponent
                style={{
                  backgroundColor: hoverTip
                    ? "hsl(172, 67%, 45%)"
                    : "hsl(183, 100%, 15%)",
                  cursor: hoverTip ? "pointer" : null,
                }}
                tip="50%"
                onClick={() => {
                  setSelectedTip(50);
                }}
                onMouseOver={() => {
                  setHoverTip(true);
                }}
                onMouseLeave={() => {
                  setHoverTip(false);
                }}
              />
              <TipComponent
                style={{
                  backgroundColor: hoverTip
                    ? "hsl(172, 67%, 45%)"
                    : "hsl(183, 100%, 15%)",
                  cursor: hoverTip ? "pointer" : null,
                }}
                tip="75%"
                onClick={() => {
                  setSelectedTip(75);
                }}
                onMouseOver={() => {
                  setHoverTip(true);
                }}
                onMouseLeave={() => {
                  setHoverTip(false);
                }}
              />
            </Grid>
          </Box>

          <Box>
            <TitleComponent title="Number of People" />
            <InputComponent
              imgSource={iconPerson}
              onClick={() => {}}
              onInput={(e) => {
                setNumberOfPeople(e.target.value);
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
            <CostComponent price={tipAmount} title="Tip Amount " cost="$" />
            <CostComponent price={total} title="Total" cost="$" />
          </Box>

          <Button
            sx={{
              color: "hsl(183, 100%, 15%)",
              backgroundColor: hoverButton
                ? "hsl(189, 41%, 97%)"
                : "hsl(172, 67%, 45%)",
              cursor: hoverButton ? "pointer" : null,
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
            RESET
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
// the tip amount formula (totalBill - bill) / numberOfPeople
//  the total formula totalBill / numberOfPeople
