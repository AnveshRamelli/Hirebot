"use client";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import Image from "next/image";
import React from "react";

const Login = () => {
  // Sign in with Google
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.log("Error : ", error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center border rounded-2xl p-8">
        <Image
          src={"/logo.jpg"}
          width={250}
          height={100}
          alt="logo"
          className="width-[180px]"
        />
        <div className="flex flex-col items-center">
          <Image
            src={"/login.jpg"}
            width={600}
            height={400}
            alt="login"
            className="w-[400px] h-[250px] rounded-2xl"
          />
          <h2 className="text-2xl font-bold text-center mt-4">
            Welcome to HireBot
          </h2>
          <p className="text-gray-500 text-center">
            Sign in with Google Authentication
          </p>
          <Button
            className="mt-7 w-full cursor-pointer"
            onClick={signInWithGoogle}
          >
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
