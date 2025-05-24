import { factory, primaryKey } from "@mswjs/data";
import { uid } from "@/utils/uid";

const models = {
  user: {
    id: primaryKey(uid),
    name: String,
    password: String,
  },
  matchMetas: {
    id: primaryKey(uid),
    ownerId: String,
    matchLength: Number,
    teamAName: String,
    teamBName: String,
    playerA1Name: String,
    playerA2Name: String,
    playerB1Name: String,
    playerB2Name: String,
    initialServer: String,
    teamAGames: Number,
    teamBGames: Number,
  },
  points: {
    id: primaryKey(uid),
    matchId: String,
    server: String,
    firstServeIn: Boolean,
    rallyLength: String,
    player: String,
    playType: String,
    ballCourse: String,
    errorCause: String,
    timestamp: Number,
    gameNumber: Number,
    teamAScore: Number,
    teamBScore: Number,
    teamAGames: Number,
    teamBGames: Number,
  },
};

export const db = factory(models);
