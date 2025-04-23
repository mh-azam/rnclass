import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}
// This hook provides access to the user context, allowing components to access user data and authentication methods.
// It uses the useContext hook to retrieve the context value and throws an error if used outside of a UserProvider.
// This ensures that components using this hook are properly wrapped in the UserProvider, which provides the necessary context value.
// The hook returns the context value, which includes user data and authentication methods.
// This allows components to easily access user information and perform authentication actions without needing to pass props down through the component tree.
