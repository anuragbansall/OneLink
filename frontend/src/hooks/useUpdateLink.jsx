import { useNavigate } from "react-router";
import { updateLink } from "../api/linkApi";
import { errorToast, successToast } from "@/utils/toast";

const useUpdateLink = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: updateLink,
    onSuccess: () => {
      navigate("/dashboard");
      successToast("Link updated successfully!");
    },
    onError: (error) => {
      errorToast(
        error.response?.data?.message ||
          "An error occurred while updating the link.",
      );
    },
  });

  return mutation;
};

export default useUpdateLink;
