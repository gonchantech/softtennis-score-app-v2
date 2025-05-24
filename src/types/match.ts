import { MatchMeta, MatchResultMeta } from "./matchMeta";
import { PointData } from "./point";

export interface Match {
  matchMeta: MatchMeta;
  points: PointData[];
}

export interface MatchResult {
  matchResultMeta: MatchResultMeta;
  points: PointData[];
}
