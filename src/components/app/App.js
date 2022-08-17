import {Box, Button, Grid} from "theme-ui";
import iconDollar from "../images/icon-dollar.svg";
import iconPerson from "../images/icon-person.svg";
import TitleComponent from "../title/title-component";
import TipComponent from "../tip/tip-component";
import CostComponent from "../cost/cost-component";
import {useState} from "react";
import TitleInputComponent from "../title-input-component/title-input-component";

export default function App() {

    let [bill, setBill] = useState(0);
    let [selectedTip, setSelectedTip] = useState(0);
    let [numberOfPeople, setNumberOfPeople] = useState(0);


    let tipInDecimal = parseInt(selectedTip) / 100;
    let totalPerPerson = ((parseInt(bill) / parseInt(numberOfPeople)) * (1 + tipInDecimal)).toFixed(2);
    let totalTip = parseInt(bill) * tipInDecimal;
    let tipPerPerson = (totalTip / parseInt(numberOfPeople)).toFixed(2);

    //default style for the clicked tip buttons
    const [hoverButton, setHoverButton] = useState(false);

    const [tipPerPersonState, setTipPerPersonState] = useState(tipPerPerson);
    const [totalPerPersonState, setTotalPerPersonState] = useState(totalPerPerson);

    //going through all tip components
    const tips = ["5%", "10%", "15%", "25%", "50%", "70%"];

    const [clickId, setClickedId] = useState(null);

    let tipComponents;
    {
        tipComponents = tips.map((tip, index) => {

            return (
                <TipComponent
                    key={tip}
                    sx={{
                        //   ? "#26C2AE"
                        //   : "hsl(183, 100%, 15%)",
                        backgroundColor: clickId === index ? "#9FE8DF" : "hsl(183, 100%, 15%)",
                        color: clickId === index ? "#00474B" : "white",
                        cursor: "pointer",
                        fontSize: "20px",
                    }}
                    currentTip={tip}
                    onClick={() => {
                        setSelectedTip(parseInt(tip));
                        setClickedId(index);
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
                        <CostComponent price={tipPerPerson} cost="$">
                            Tip Amount
                        </CostComponent>
                        <CostComponent price={totalPerPerson} cost="$">
                            Total
                        </CostComponent>
                    </Box>

                    <Button
                        sx={{
                            color: "#00474B",
                            backgroundColor: hoverButton ? "#9FE8DF" : "#26C2AE",
                            cursor: "pointer",
                            textTransform: "uppercase"
                        }}
                        onMouseOver={() => {
                            setHoverButton(true);
                        }}
                        onMouseLeave={() => {
                            setHoverButton(false);
                        }}
                        onClick={() => {
                        }}
                    >
                        Reset
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}