// src/features/scoring/result/components/matchStats/playerStats/PlayerStats.tsx
"use client";
import styles from "./PlayerStats.module.css";
import React from "react";
import { PointData, MatchMeta } from "@/types";
import { PlayerStatCard } from "./playarStatsCard";
import { calculatePlayerStats } from "../../../domain";

interface PlayerStatsProps {
  points: PointData[];
  matchMeta: MatchMeta;
}

export const PlayerStats: React.FC<PlayerStatsProps> = ({
  points,
  matchMeta,
}) => {
  const playerStats = calculatePlayerStats(points, matchMeta);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>選手別獲得ポイント</h3>
      <div className={styles.cardsContainer}>
        {playerStats.map((playerStat) => (
          <PlayerStatCard key={playerStat.player} playerStat={playerStat} />
        ))}
      </div>
    </div>
  );
};
