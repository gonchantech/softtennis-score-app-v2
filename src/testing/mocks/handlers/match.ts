import { http, HttpResponse } from "msw";

import { API_URL } from "@/config/constants";

import { db } from "@/testing/mocks/db";
import { requireAuth } from "@/testing/mocks/utils";
import { Match, MatchResultMeta } from "@/types";

const saveMatchHandler = http.post(
  `${API_URL}/matches`,
  async ({ request }) => {
    let user;
    try {
      user = requireAuth({ req: request });
    } catch (error) {
      console.error("Error in requireAuth", error);
      user = null;
    }

    const data = (await request.json()) as Match;
    const matchId = crypto.randomUUID();
    console.log("data", data);
    const { matchMeta, points } = data;

    const matchResultMeta: MatchResultMeta = {
      ...matchMeta,
      id: matchId,
      ownerId: user?.id || "Guest User",
      teamAGames: points[points.length - 1]?.teamAGames,
      teamBGames: points[points.length - 1]?.teamBGames,
      savedAt: new Date(),
    };

    const savedMatch = db.matchMetas.create({
      ...matchResultMeta,
    });

    const savedPoints = points.map((point) =>
      db.points.create({
        id: crypto.randomUUID(),
        matchId,
        ...point,
      })
    );

    await new Promise((resolve) => setTimeout(resolve, 300));

    return new HttpResponse(
      JSON.stringify({
        match: savedMatch,
        points: savedPoints,
      }),
      {
        status: 201,
      }
    );
  }
);

const getMatchsHandler = http.get(`${API_URL}/matches`, async ({ request }) => {
  const user = requireAuth({ req: request });

  const matches = db.matchMetas.findMany({
    where: {
      ownerId: {
        equals: user?.id,
      },
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 300));

  return new HttpResponse(JSON.stringify(matches), {
    status: 200,
  });
});

const getMatchHandler = http.get(
  `${API_URL}/matches/:id`,
  async ({ params, request }) => {
    const user = requireAuth({ req: request });
    const matchId = params.id as string;

    console.log("matchId", matchId);
    console.log("user", user);

    const matchResultMeta = db.matchMetas.findFirst({
      where: {
        id: {
          equals: matchId,
        },
        ownerId: {
          equals: user?.id,
        },
      },
    });

    console.log("matchResultMeta", matchResultMeta);
    if (!matchResultMeta) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return new HttpResponse("Match not found", { status: 404 });
    }

    const points = db.points.findMany({
      where: {
        matchId: {
          equals: matchId,
        },
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 300));

    return new HttpResponse(
      JSON.stringify({
        data: {
          matchResultMeta,
          points,
        },
      }),
      {
        status: 200,
      }
    );
  }
);

export const matchHandlers = [
  saveMatchHandler,
  getMatchsHandler,
  getMatchHandler,
];
