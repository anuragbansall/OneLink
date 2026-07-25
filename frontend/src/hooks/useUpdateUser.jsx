import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../api/authApi";
import { queryClient } from "../main";
import { errorToast, successToast } from "@/utils/toast";

const useUpdateUser = () => {
  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      successToast("User updated successfully!");
    },
    onError: (error) => {
      errorToast(
        error.response?.data?.message ||
          "An error occurred while updating the user.",
      );
    },
  });

  return mutation;
};

export default useUpdateUser;
