"use client";
import { Box } from "lucide-react";
import { Card } from "../ui/card";
import Balance from "./Balance";
import { AuthButton } from "./AuthButtom";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center px-4 max-md:py-4 rounded-md border border-blue-500">
      <div className="flex items-center gap-0;5">
        <h1 className="text-xl text-white max-md:text-lg font-black">Magic</h1>
        <Box className="size-7 max-md:size-6 text-blue-400" />
        <h1 className="text-xl text-white font-black">box</h1>
      </div>

      <Card className="bg-transparent border-none text-white max-md:hidden">
        <div className="flex gap-6 items-center text-blue-400/50 text-base font-semibold">
          <span className="text-white hover:text-white transition-all duration-300">
            Caixas
          </span>
          <span className="hover:text-white transition-all duration-300">
            Atualizador
          </span>
          <span className="hover:text-white transition-all duration-300">
            Saque
          </span>
          <span className="hover:text-white transition-all duration-300">
            Historico
          </span>
        </div>
      </Card>

      <div className="flex items-center gap-4">
        <div className="hidden">
          <Balance />
        </div>
        <div>
          <AuthButton />
        </div>
      </div>
    </div>
  );
}
