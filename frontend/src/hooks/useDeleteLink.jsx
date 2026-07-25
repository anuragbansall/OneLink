import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { deleteLink } from "../api/linkApi";
import { queryClient } from "../main";
import { errorToast, successToast } from "@/utils/toast";

const useDeleteLink = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (id) => deleteLink(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["links"]);
      navigate("/dashboard/my-links");
      successToast("Link deleted successfully!");
    },
    onError: (error) => {
      errorToast(
        error.response?.data?.message ||
          "An error occurred while deleting the link.",
      );
    },
  });

  return mutation;
};

export default useDeleteLink;
