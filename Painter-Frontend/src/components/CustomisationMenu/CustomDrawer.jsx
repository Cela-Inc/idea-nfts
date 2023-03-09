import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@chakra-ui/react";

const CustomDrawer = ({
  body,
  footer,
  isOpen,
  placement,
  onClose,
  size,
  header,
  headerStyles,
  bodyStyles,
}) => {
  return (
    <Drawer size={size} isOpen={isOpen} placement={placement} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader {...headerStyles}>{header}</DrawerHeader>
        <DrawerBody
          {...bodyStyles}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },

            "&::-webkit-scrollbar-track": {
              display: "none",
            },
            "&::-webkit-scrollbar-thumb": {
              display: "none",
            },
          }}
        >
          {body}
        </DrawerBody>

        <DrawerFooter marginBottom={5} justifyContent={"center"}>
          {footer}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
