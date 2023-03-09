import { useToast } from "@chakra-ui/react";

/* used to stop duplication of 'toast({}) in components
props: 
 @setup:{
        title: "failed to copy",
        status: "error",
       }
*/
export const useCreateToast = () => {
  const toast = useToast();

  const createToast = (title, status, description = "") => {
    return toast({
      title,
      description,
      status,
      duration: 9000,
      isCloasable: true,
    });
  };

  return createToast;
};
