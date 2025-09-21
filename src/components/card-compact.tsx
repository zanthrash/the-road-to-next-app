import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardCompactFormProps = {
  title: string;
  description: string;
  content: ReactNode;
  className?: string;
  footer?: ReactNode;
};

export const CardCompact = ({
  title,
  description,
  content,
  className,
  footer,
}: CardCompactFormProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content ? content : null}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};
