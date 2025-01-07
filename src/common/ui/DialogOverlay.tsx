import { css } from "@emotion/react";
import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

export const DialogOverlay = ({ children, onClose }: Props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #00000033;
      `}>
      {children}
    </div>
  );
};
