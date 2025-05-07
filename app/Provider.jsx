import { supabase } from "@/services/supabaseClient";
import { UserDetailsContext } from "@/userDetailsContext";
import React, { useContext, useEffect } from "react";

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    createNewUser();
  }, []);
  const createNewUser = () => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      let { data: Users, error } = await supabase
        .from("Users")
        .select("*")
        .eq("email", user?.email);

      if (Users.length === 0) {
        const { data, error } = await supabase.from("Users").insert([
          {
            name: user?.user_metadata?.name,
            email: user?.email,
            picture: user?.user_metadata?.picture,
          },
        ]);

        setUser(data);
        return;
      }
      setUser(Users[0]);
    });
  };
  return (
    <UserDetailsContext.provider value={{ user, setUser }}>
      <div>{children}</div>;
    </UserDetailsContext.provider>
  );
};

export default Provider;

export const useUser = () => {
  const context = useContext(UserDetailsContext);
  return context;
};
