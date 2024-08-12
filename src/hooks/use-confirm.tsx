import { useCallback } from "react";

interface ConfirmOptions {
  message?: string;
  onConfirm?: () => void;
}

export function useConfirm({ message, onConfirm }: ConfirmOptions) {
  const confirm = useCallback(() => {
    if (window.confirm(message)) {
      onConfirm?.();
    }
  }, [message, onConfirm]);

  return confirm;
}
