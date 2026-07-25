import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router";
import { queryClient } from "../main";
import { errorToast, successToast } from "@/utils/toast";

const useLogin = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/dashboard");
      successToast("Login successful!");
    },
    onError: (error) => {
      errorToast(
        error.response?.data?.message || "An error occurred while logging in.",
      );
    },
  });

  return mutation;
};

export default useLogin;
