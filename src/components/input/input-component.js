import {Box, Image, Input} from "theme-ui";

export default function InputComponent({
                                           onMouseOver,
                                           onMouseLeave,
                                           sx,
                                           onInput,
                                           icon,
                                       }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Image src={icon} sx={{marginRight: "10px"}}></Image>
            <Input
                sx={{
                    fontWeight: "700",
                    backgroundSize: "200px",
                    backgroundColor: "hsl(189, 41%, 97%)",
                    color: "#00474B",
                    ...sx
                }}

                defaultValue={0}
                onInput={onInput}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
            />
        </Box>
    );
}