import { PropsWithChildren } from "react";
import { toast } from "sonner";
import { useActionFeedback } from "@/components/form/hooks/use-action-feedback";
import { ActionState } from "@/components/form/utils/to-action-state";

type FormProps = PropsWithChildren<{
  action: (payload: FormData) => void;
  actionState: ActionState;
}>;

export const Form = ({ children, action, actionState }: FormProps) => {
  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      if (actionState.message) {
        toast.success(actionState.message);
      }
    },
    onError: ({ actionState }) => {
      if (actionState.message) {
        toast.error(actionState.message);
      }
    },
  });
  return (
    <form action={action} className="flex flex-col gap-y-2">
      {children}
    </form>
  );
};
