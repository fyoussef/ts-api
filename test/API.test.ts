import { api } from "../src/services/axios";

test("should test API", async () => {
  // test API connection
  const { status } = await api.get("/");

  expect(status).toBe(200);
});

describe("should test barber routes", () => {
  var barber_id: string;
  it("should create barber", async () => {
    // test create barber
    const { data } = await api.post("/barber", {
      name: "Filipi",
    });
    const barber = data.barber;
    expect(barber).not.toBeUndefined();
    barber_id = barber.id;
  });

  it("should get barber", async () => {
    const { data } = await api.get("/barber/" + barber_id);
    const barberData = data.barber;

    expect(barberData).not.toBeUndefined();
  });

  it("should delete barber", async () => {
    const { data } = await api.delete("/barber/" + barber_id);

    expect(data).not.toBeUndefined();
  });
});

describe("should test schedules routes", () => {
  var barber_id: string;
  it("should create schedule to one barber", async () => {
    // create barber
    const { data } = await api.post("/barber", {
      name: "Filipi",
    });
    const barber = data.barber;
    barber_id = barber.id;

    const { data: schedulesCreated } = await api.post("/schedules", {
      barber_id: barber.id,
    });
    const count = schedulesCreated.count;

    expect(count).toBe(21);
  });

  it("should delete all schedules of barber", async () => {
    const { data: deletedData } = await api.delete("/schedules/" + barber_id);
    const count = deletedData.count;

    expect(count).toBe(21);

    // delete barber
    await api.delete("/barber/" + barber_id);
  });
});
