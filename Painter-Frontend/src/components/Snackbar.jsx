import { Alert, AlertIcon } from "@chakra-ui/react";
import { useEffect, memo } from "react";
import { usePainterStore } from "../hooks/use-painter-store.hook";

const Snackbar = () => {
  const { alertOptions } = usePainterStore();

  useEffect(() => {
    setTimeout(() => {
      usePainterStore.setState({
        alertOptions: { ...alertOptions, showAlert: false },
      });
    }, 5000);
  }, [alertOptions?.showAlert]);

  return (
    <>
      {alertOptions?.showAlert && (
        <Alert
          position={"absolute"}
          top={0}
          variant='solid'
          zIndex={10}
          status={alertOptions.type}
        >
          <AlertIcon />
          {alertOptions.message}
        </Alert>
      )}
    </>
  );
};

export default memo(Snackbar);
