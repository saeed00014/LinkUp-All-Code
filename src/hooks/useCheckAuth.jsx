import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../axios/axios";
import Login from "@/app/login/page";

const useCheckAuth = ({ value }) => {
  const checkAuth = useQuery({
    queryKey: [value],
    queryFn: async () => {
      const response = await baseURL.get("/auth");
      return response;
    },
  });

  if (!checkAuth.isPending && !checkAuth.data.data.login) {
    return <Login />;
  }
  if (!checkAuth.isPending && checkAuth.data.data.login) {
    return;
  }
};

export default useCheckAuth;
