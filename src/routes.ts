import { NextFunction, Request, Response, Router } from "express";
import { prisma } from "./db/prismaClient";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({
    msg: "running",
  });
});

function validateBarberId(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  if (!id) {
    throw new Error("O id é obrigatório");
  }
  next();
}

routes.get("/barber/:id", validateBarberId, async (req, res) => {
  const id = req.params?.id;

  const barber = await prisma.barber.findFirst({
    where: {
      id,
    },
  });

  res.json({
    barber,
  });
});

routes.post("/barber", async (req, res) => {
  const { name } = req.body;

  const barber = await prisma.barber.create({
    data: {
      name,
    },
  });

  res.json({
    barber,
  });
});

routes.delete("/barber/:id", validateBarberId, async (req, res) => {
  const id = req.params.id;

  const barber = await prisma.barber.delete({
    where: {
      id,
    },
  });

  res.json(barber);
});

routes.get("/schedules", async (req, res) => {
  const schedules = await prisma.barber_Schedules.findMany();
  res.json({
    schedules,
  });
});

routes.post("/schedules", async (req, res) => {
  const { barber_id } = req.body;

  const hours = [
    { barber_id, hour: "09:00" },
    { barber_id, hour: "09:30" },
    { barber_id, hour: "10:00" },
    { barber_id, hour: "10:30" },
    { barber_id, hour: "11:00" },
    { barber_id, hour: "11:30" },
    { barber_id, hour: "12:00" },
    { barber_id, hour: "12:30" },
    { barber_id, hour: "13:00" },
    { barber_id, hour: "13:30" },
    { barber_id, hour: "14:00" },
    { barber_id, hour: "14:30" },
    { barber_id, hour: "15:00" },
    { barber_id, hour: "15:30" },
    { barber_id, hour: "16:00" },
    { barber_id, hour: "16:30" },
    { barber_id, hour: "17:00" },
    { barber_id, hour: "17:30" },
    { barber_id, hour: "18:00" },
    { barber_id, hour: "18:30" },
    { barber_id, hour: "19:00" },
  ];

  const schedules = await prisma.barber_Schedules.createMany({
    data: hours,
  });

  return res.json(schedules);
});

routes.delete("/schedules/:id", validateBarberId, async (req, res) => {
  const id = req.params.id;

  const deleted = await prisma.barber_Schedules.deleteMany({
    where: {
      barber_id: {
        equals: id,
      },
    },
  });

  res.json(deleted);
});

export { routes };
