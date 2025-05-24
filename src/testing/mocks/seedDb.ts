import { db } from "./db";
import { testData } from "../testData";

export const seedDb = () => {
  const userCount = db.user.count();
  if (userCount > 0) return;

  testData.users.forEach((user) => {
    db.user.create(user);
  });

  testData.matchMeta.forEach((matchMeta) => {
    db.matchMetas.create(matchMeta);
  });

  testData.point.forEach((point) => {
    db.points.create(point);
  });
};
