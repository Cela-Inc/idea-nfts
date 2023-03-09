import { usePainterStore } from "../../hooks/use-painter-store.hook";
import CustomDrawer from "../CustomisationMenu/CustomDrawer";
import CanvasOptionsView from "../Painter/OptionsItems/CanvasOptionsView";

const MobileCanvasOptions = ({ isOpen, setView }) => {
  return (
    <CustomDrawer
      isOpen={isOpen}
      onClose={() => setView("OPTIONS")}
      size={"full"}
      body={
        <CanvasOptionsView
          setView={(view) => usePainterStore.setState({ optionsView: view })}
        />
      }
      bodyStyles={{
        padding: 0,
      }}
    />
  );
};

export default MobileCanvasOptions;
