import {Box, Button, Grid} from "theme-ui";
import iconDollar from "../images/icon-dollar.svg";
import iconPerson from "../images/icon-person.svg";
import TitleComponent from "../title/title-component";
import TipComponent from "../tip/tip-component";
import CostComponent from "../cost/cost-component";
import {useState} from "react";
import TitleInputComponent from "../title-input-component/title-input-component";

export default function App() {

    //inputs for calculations
    let [bill, setBill] = useState(0);
    let [selectedTip, setSelectedTip] = useState(0);
    let [numberOfPeople, setNumberOfPeople] = useState(0);

//calculations for the calculator
    let tipInDecimal = selectedTip / 100;
    let totalPerPerson = ((bill / numberOfPeople) * (1 + tipInDecimal)).toFixed(2);
    let totalTip = bill * tipInDecimal;
    let tipPerPerson = (totalTip / numberOfPeople).toFixed(2);

//check if the Reset button is clicked so the calculations can be set to 0
    const [clickButton, setClickedButton] = useState(false);

//array of tip components
    const tips = ["5%", "10%", "15%", "25%", "50%", "70%"];

//used for checking the selected tip component and changing the style
    const [clickId, setClickedId] = useState(null);

    let tipComponents;
    {
        tipComponents = tips.map((tip, index) => {

            return (
                <TipComponent
                    key={tip}
                    sx={{
                        backgroundColor: clickId === index ? "#26C2AE" : "#00474B",
                        color: clickId === index ? "#00474B" : "white",
                        fontSize: "20px",
                        "&:hover": {
                            cursor: "pointer",
                            backgroundColor: "#9FE8DF",
                            color: "#00474B"
                        }
                    }}
                    currentTip={tip}
                    onClick={() => {
                        setSelectedTip(parseInt(tip));
                        setClickedId(index);
                        setClickedButton(false);
                    }}

                />
            )
        });
    }

    return (
        <Box
            p={5}
            sx={{
                backgroundColor: "hsl(185, 41%, 84%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
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
                        <CostComponent price={clickButton ? 0 : tipPerPerson} cost="$">
                            Tip Amount
                        </CostComponent>
                        <CostComponent price={clickButton ? 0 : totalPerPerson} cost="$">
                            Total
                        </CostComponent>
                    </Box>

                    <Button
                        sx={{
                            color: "#00474B",
                            textTransform: "uppercase",
                            backgroundColor: "#26C2AE",
                            cursor: "pointer"
                        }}
                        onClick={() => {
                            setClickedButton(true);
                        }}
                    >
                        Reset
                    </Button>
                </Box>
            </Box>
        </Box>
    );

}