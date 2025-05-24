"use client";
import styles from "./MatchStats.module.css";
import { Match } from "@/types";
import { RallyLengthStats } from "./rallyLengthStats";
import { ServeStats } from "./serveStats";
import { PlayerStats } from "./playerStats";

interface MatchStatsProps {
  match: Match;
}

export const MatchStatsComponent: React.FC<MatchStatsProps> = ({ match }) => {
  const { points, matchMeta } = match;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>試合統計</h2>
      <PlayerStats points={points} matchMeta={matchMeta} />
      <RallyLengthStats points={points} />
      <ServeStats points={points} matchMeta={matchMeta} />
    </div>
  );
};
