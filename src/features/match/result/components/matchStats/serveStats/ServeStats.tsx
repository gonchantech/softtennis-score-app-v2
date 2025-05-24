"use client";
import styles from "./ServeStats.module.css";
import React from "react";
import { PointData, MatchMeta } from "@/types";
import { ServeStatsTable } from "./serveStatsTable";
import { calculateServeStats } from "../../../domain";

interface ServeStatsProps {
  points: PointData[];
  matchMeta: MatchMeta;
}

export const ServeStats: React.FC<ServeStatsProps> = ({
  points,
  matchMeta,
}) => {
  const serveStats = calculateServeStats(points, matchMeta);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>サーブ統計</h3>
      <ServeStatsTable serveStats={serveStats} />
    </div>
  );
};
