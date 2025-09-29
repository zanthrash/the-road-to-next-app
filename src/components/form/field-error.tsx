import { ActionState } from "@/components/form/utils/to-action-state";

export const FieldError = ({
  actionState,
  name,
}: {
  actionState?: ActionState;
  name: string;
}) => {
  const message = actionState?.fieldErrors[name]?.[0];

  if (!message) {
    return null;
  }

  return <span className="text-sm text-red-600">{message}</span>;
};
