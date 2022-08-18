import TitleComponent from "../title/title-component";
import InputComponent from "../input/input-component";
import {Box, Label} from "theme-ui";

export default function TitleInputComponent({
                                                title,
                                                iconSource,
                                                onInput,
                                                value,
                                            }) {

    return (
        <>
            {parseInt(value) === 0 || value === "" ?
                (
                    <Box sx={{}}>
                        <Box sx={{
                            display: "flex"
                        }}>
                            <TitleComponent>{title}</TitleComponent>
                            <Label sx={{color: "#E17052", fontSize: "14px", marginLeft: "20px"}}>Can't be zero</Label>
                        </Box>

                        <InputComponent
                            sx={{
                                color: "#E17052",
                            }}
                            icon={iconSource}
                            onInput={onInput}

                        />
                    </Box>
                ) : (
                    <Box>
                        <TitleComponent>{title}</TitleComponent>
                        <InputComponent
                            sx={{
                                color: "#00474B"
                            }}
                            icon={iconSource}
                            onInput={onInput}
                        />
                    </Box>
                )

            }
        </>
    )
}