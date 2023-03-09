import { Image } from "@chakra-ui/react";

const SVG_Icon = (props) => {
  const { fileName, alt, ...rest } = props;

  return (
    <Image
      src={import.meta.env.VITE_ASSETS_PATH + "/svgs/" + fileName}
      alt={alt}
      {...rest}
    />
  );
};

export default SVG_Icon;
