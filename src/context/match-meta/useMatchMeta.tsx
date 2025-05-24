"use client";

import { useContext } from "react";
import { MatchMetaContext } from "./MatchMetaContext";

export const useMatchMeta = () => {
  const context = useContext(MatchMetaContext);
  if (!context) {
    throw new Error("useMetaState must be used within a MatchMetaProvider");
  }
  return context;
};
