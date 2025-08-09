import { Moon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

function ThemeToggle() {
  return (
    <Button
      variant="outline"
      className="rounded-full w-8 h-8 border font-medium text-sm border-gray-600"
    >
      <Moon />
    </Button>
  );
}

export default ThemeToggle;
