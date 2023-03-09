import { Button } from "@chakra-ui/react";
import { Undo } from "@carbon/icons-react";
import { usePainterStore } from "../../hooks/use-painter-store.hook";

const UndoRedoButtons = ({ display }) => {
  const { useUndo, useRedo } = usePainterStore();
  return (
    <>
      <Button
        display={display}
        width={"2rem"}
        height={"2rem"}
        padding={"0.25rem"}
        borderColor={"gray"}
        disabled={!useUndo}
        variant={"roundOutline"}
        onClick={() => useUndo()}
      >
        <Undo style={{ width: "2.1rem", height: "2.1rem", color: "grey" }} />
      </Button>
      <Button
        display={display}
        width={"2rem"}
        height={"2rem"}
        padding={"0.25rem"}
        fontSize={"0.75em"}
        variant={"roundOutline"}
        borderColor={"rgba(170, 170, 170, 1)"}
        disabled={!useRedo}
        transform={"matrix(-1, 0, 0, 1, 0, 0)"}
        onClick={() => useRedo()}
      >
        <Undo style={{ width: "2.1rem", height: "2.1rem", color: "grey" }} />
      </Button>
    </>
  );
};

export default UndoRedoButtons;
