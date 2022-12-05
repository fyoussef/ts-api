import { api } from "../src/services/axios";

test("Should test API", async () => {
  // test API connection
  const { status } = await api.get("/");

  expect(status).toBe(200);

  // test create barber
  const { data } = await api.post("/barber", {
    name: "Filipi",
  });

  expect(data.barber).toHaveProperty("name");

  // test if barber schedules were created
  /* const req = await api.get("/schedules");
  const { schedules } = req.data;
  expect(schedules).toHaveLength(20); */
});
