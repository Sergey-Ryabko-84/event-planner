import React, { useState } from "react";

export type MousePositionType = {
  x: number;
  y: number;
};

type Return = {
  isDialogOpen: boolean;
  mousePosition: MousePositionType | null;
  handleDialogOpen: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleDialogClose: () => void;
};

export const useDialog = (): Return => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState<MousePositionType | null>(null);

  const handleDialogOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    const { clientX: x, clientY: y } = event;
    setMousePosition({ x, y });
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setMousePosition(null);
  };

  return {
    isDialogOpen,
    mousePosition,
    handleDialogOpen,
    handleDialogClose
  };
};
