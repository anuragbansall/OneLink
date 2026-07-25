import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../api/authApi";
import { useNavigate } from "react-router";
import { queryClient } from "../main";
import { errorToast, successToast } from "@/utils/toast";

const useLogout = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: ["user"] });
      queryClient.removeQueries({ queryKey: ["user"] });
      navigate("/");
      successToast("Logout successful!");
    },
    onError: (error) => {
      errorToast(
        error.response?.data?.message || "An error occurred while logging out.",
      );
    },
  });

  return mutation;
};

export default useLogout;
