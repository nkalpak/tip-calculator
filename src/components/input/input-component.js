import { Box, IconButton, Image, Input } from "theme-ui";

export default function InputComponent({
  onMouseOver,
  onMouseLeave,
  sx,
  onInput,
  icon,
}) {
  // const [bill, setBill] = useState(0);
  // const [numberOfPeople, setNumberOfPeople] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image src={icon} sx={{ marginRight: "10px" }}></Image>
      <Input
        sx={{
          fontWeight: "700",
          backgroundSize: "200px",
          backgroundColor: "hsl(189, 41%, 97%)",
          ...sx,
        }}
        defaultValue={0}
        onInput={onInput}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      />
    </Box>
  );
}

//in order for the icon to be inside the input, I have to have a div component and in it put the icon as an image
//and the text as h3 or something similar. IconButton doesn't have a source, and in Input, you can't put other components
