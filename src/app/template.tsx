import { PropsWithChildren } from "react";
import { RedirectToast } from "@/components/redirect-toast";

type TemplateProps = PropsWithChildren;

export default function RootTemplate({ children }: TemplateProps) {
  console.log("RootTemplate rendered");
  return (
    <>
      <>{children}</>
      <RedirectToast />
    </>
  );
}
