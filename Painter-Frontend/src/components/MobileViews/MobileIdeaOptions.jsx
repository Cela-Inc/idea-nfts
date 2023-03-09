import React from "react";
import CustomDrawer from "../CustomisationMenu/CustomDrawer";
import IdeaView from "../Painter/OptionsItems/IdeaView";

const MobileIdeaOptions = ({ isOpen, onClose }) => {
  return (
    <CustomDrawer
      isOpen={isOpen}
      size={"full"}
      body={
        <IdeaView
          onClose={() => {
            onClose();
          }}
        />
      }
      bodyStyles={{
        padding: 0,
      }}
    />
  );
};

export default MobileIdeaOptions;
