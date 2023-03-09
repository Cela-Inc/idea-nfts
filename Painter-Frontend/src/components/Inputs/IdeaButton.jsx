import { Button } from "@chakra-ui/react";
const IdeaButton = (props) => {
  return (
    <Button {...props} onClick={() => props.onClick()} variant={"ideaButton"}>
      {props.children}
    </Button>
  );
};

export default IdeaButton;
