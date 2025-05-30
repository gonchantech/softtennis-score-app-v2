import "@testing-library/jest-dom";

import { queryClient } from "@/lib/reactQuery";
import { seedDb } from "@/testing/mocks/seedDb";
import { server } from "@/testing/mocks/server";

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
  seedDb();
});

afterAll(() => server.close());

afterEach(async () => {
  queryClient.clear();
  server.resetHandlers();
});
