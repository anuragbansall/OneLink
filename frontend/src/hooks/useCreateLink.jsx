import { useNavigate } from "react-router";
import { createLink } from "../api/linkApi";
import { useMutation } from "@tanstack/react-query";
import { Bounce, toast } from "react-toastify";
import { errorToast, successToast } from "@/utils/toast";

const useCreateLink = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createLink,
    onSuccess: () => {
      navigate("/dashboard/my-links");
      successToast("Link created successfully!");
    },
    onError: (error) => {
      errorToast(
        error.response?.data?.message ||
          "An error occurred while creating the link.",
      );
    },
  });

  return mutation;
};

export default useCreateLink;
