import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode } from "react";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemeProvider>
  );
};
