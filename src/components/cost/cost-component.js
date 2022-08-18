import {Box, Label} from "theme-ui";

export default function CostComponent({children, price, cost}) {
    return (
        <Box
        sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px"
        }}>
            {/*labels before price*/}
            <Box
                sx={{
                    fontSize: "14px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Label
                    sx={{
                        color: "white",
                        width: "150px",
                    }}
                >
                    {children}
                </Label>
                <Label
                    sx={{
                        color: "darkgray",
                        width: "150px",
                    }}
                >
                    / person
                </Label>
            </Box>

            {/*price*/}
            <Label
                sx={{
                    color: "#26C2AE",
                    fontSize: "30px",
                    marginLeft: "160px"
                }}
            >
                {cost}
                {price}
            </Label>
        </Box>
    );
}
