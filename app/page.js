"use client";
import { Button } from "@/components/ui/button";
import Provider from "./provider";

export default function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
  function Home() {
    return (
      <div>
        <h1>Hirebot</h1>
        <Button className="bg-red-500 m-2 w-24 text-3xl px-16 py-6 cursor-pointer">
          Test
        </Button>
      </div>
    );
  }
}
