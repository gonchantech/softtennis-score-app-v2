import { Player } from "./player";
import { PointData } from "./point";

export interface MatchState {
  teamAScore: number;
  teamBScore: number;
  teamAGames: number;
  teamBGames: number;
  currentServerTeam: "A" | "B";
  currentServer: Player;
  servesLeft: number;
  isDeuce: boolean;
  isAdvantage: boolean;
  advantageTeam?: "A" | "B";
  currentGame: number;
  points: PointData[];
  isMatchComplete: boolean;
  isGameComplete: boolean;
}
