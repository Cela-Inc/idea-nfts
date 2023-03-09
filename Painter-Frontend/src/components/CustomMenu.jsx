import { forwardRef, useStyleConfig, chakra } from "@chakra-ui/react";

const CustomMenu = forwardRef((props, ref) => {
  const { variant, ...rest } = props;
  const styles = useStyleConfig("CustomMenu", { variant });

  return <chakra.div ref={ref} __css={styles} {...rest} />;
});

export default CustomMenu;
