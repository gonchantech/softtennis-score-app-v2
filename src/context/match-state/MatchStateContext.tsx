"use client";
import { createContext } from "react";
import { MatchState, RawPointInput, MatchLength, Player } from "@/types";
import { MatchStateAction } from "./types/MatchStateAction";
import { defaultMatchState } from "./constants/defaultMatchState";

export const MatchStateContext = createContext<{
  state: MatchState;
  dispatch: React.Dispatch<MatchStateAction>;
  setInitialStateFromCache: (matchState: MatchState) => void;
  addPoint: (
    pointData: RawPointInput,
    matchLength: MatchLength,
    initialServer: Player
  ) => void;
  changeServer: (server: Player) => void;
  removeLatestPoint: () => void;
  completeMatch: () => void;
  resetMatchState: () => void;
}>({
  state: defaultMatchState,
  dispatch: () => null,
  setInitialStateFromCache: () => null,
  addPoint: () => null,
  removeLatestPoint: () => null,
  changeServer: () => null,
  completeMatch: () => null,
  resetMatchState: () => null,
});
