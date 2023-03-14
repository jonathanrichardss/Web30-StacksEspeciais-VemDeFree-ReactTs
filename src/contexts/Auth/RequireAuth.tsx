import { useContext } from "react";
import { SignIn } from "../../Pages/SignIn/SignIn";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <SignIn />;
  }

  return children;
};
