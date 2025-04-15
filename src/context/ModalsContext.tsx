"use client";

import React from "react";

type ModalsContextType = {
  lockModal: boolean;
  setLockModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalsContext = React.createContext<ModalsContextType>({
  lockModal: false,
  setLockModal: () => {},
  deleteModal: false,
  setDeleteModal: () => {},
});
