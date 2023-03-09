import { Input } from "@chakra-ui/react";

const UnderlinedInput = (props) => {
  const { placeHolder, setInputText, inputText, ...rest } = props;

  return (
    <Input
      variant='flushed'
      onChange={(e) => setInputText(e.target.value)}
      value={inputText}
      placeholder={placeHolder}
      borderBottom={"1px"}
      borderStyle={"solid"}
      borderColor={"black.borderColor"}
      fontWeight={400}
      fontSize={"18px"}
      paddingLeft={4}
      _placeholder={{
        color: "#3a3a3a",
        fontWeight: "400",
        opacity: 1,
      }}
      _focusVisible={{
        borderColor: "#000",
        borderBottomWidth: "2px",
      }}
      width={"90%"}
      {...rest}
    />
  );
};

export default UnderlinedInput;
