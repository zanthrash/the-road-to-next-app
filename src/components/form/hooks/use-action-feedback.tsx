import { useEffect, useRef } from "react";
import { ActionState } from "@/components/form/utils/to-action-state";

type OnArgs = {
  actionState: ActionState;
};

type UseActionFeedbackOptions = {
  onSuccess?: (onArgs: OnArgs) => void;
  onError?: (onArgs: OnArgs) => void;
};

const useActionFeedback = (
  actionState: ActionState,
  options: UseActionFeedbackOptions,
) => {
  const prevTimestampRef = useRef(actionState.timestamp);
  const isUpdated = actionState.timestamp !== prevTimestampRef.current;

  useEffect(() => {
    if (!isUpdated) return;

    if (actionState.status === "SUCCESS") {
      options.onSuccess?.({ actionState });
    }

    if (actionState.status === "ERROR") {
      options.onError?.({ actionState });
    }

    prevTimestampRef.current = actionState.timestamp;
  }, [actionState, options, isUpdated]);
};

export { useActionFeedback };
