import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement, ReactElement, SVGProps } from "react";

type PlaceholderProps = {
  label: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>, "svg">;
  button?: ReactElement<HTMLButtonElement>;
};
export const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex flex-1 self-center flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, {
        className: "w-16 h-16",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: "h-10",
      })}
    </div>
  );
};
