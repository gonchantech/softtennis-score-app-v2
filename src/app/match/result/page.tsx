"use client";

import { Stack } from "@/components/stack";
import { useMatchMeta } from "@/context/match-meta/useMatchMeta";
import { useMatchState } from "@/context/match-state/useMatchState";
import {
  useSaveMatch,
  MatchResultComponent,
  MatchStatsComponent,
  PointHistory,
} from "@/features/match";
import { Match } from "@/types";
import { useEffect } from "react";
import { Button } from "@/components/button/Button";
import { useRouter } from "next/navigation";

export default function MatchResultPage() {
  const router = useRouter();
  const { state: matchMeta } = useMatchMeta();
  const { state: matchState } = useMatchState();
  const { points } = matchState;
  const saveMatch = useSaveMatch();

  useEffect(() => {
    saveMatch.submit({ match });
  }, []);

  const handleClick = () => {
    router.push("/");
  };

  const match: Match = {
    matchMeta,
    points,
  };

  return (
    <Stack direction="vertical" gap="md">
      <MatchResultComponent match={match} />
      <MatchStatsComponent match={match} />
      <PointHistory forResult={true} match={match} />
      <Button color="gray" size="md" onClick={handleClick} fullWidth>
        トップ画面へ戻る
      </Button>
    </Stack>
  );
}
