import { QueryClient, useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/authApi";
import { useNavigate } from "react-router";
import { queryClient } from "../main";
import { errorToast, successToast } from "@/utils/toast";

const useRegister = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/dashboard");
      successToast("Registration successful!");
    },
    onError: (error) => {
      errorToast(
        error.response?.data?.message || "An error occurred while registering.",
      );
    },
  });

  return mutation;
};

export default useRegister;
