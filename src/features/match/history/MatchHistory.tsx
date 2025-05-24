"use client";

import styles from "./MatchHistory.module.css";
import { useMatches } from "../api/getMatches";
import { MatchHistoryList } from "./matchHistoryList";
import { Stack } from "@/components/stack/Stack";

type MatchHistoryProps = {
  onViewDetails: (matchId: string) => void;
};

export const MatchHistory: React.FC<MatchHistoryProps> = ({
  onViewDetails,
}) => {
  const { data: matches, isLoading } = useMatches();

  return (
    <Stack direction="vertical" gap="sm">
      <h2 className={styles.title}>Match History</h2>

      <MatchHistoryList
        matches={matches}
        isLoading={isLoading}
        onViewDetails={onViewDetails}
      />
    </Stack>
  );
};
