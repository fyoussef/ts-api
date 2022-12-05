import axios from "axios";
import { Router } from "express";
import { prisma } from "./db/prismaClient";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({
    msg: "running",
  });
});

routes.get("/schedules", async (req, res) => {
  const schedules = await prisma.barber_Schedules.findMany();
  res.json({
    schedules,
  });
});

routes.get("/barber/:barber", async (req, res) => {
  res.json({
    param: req.params,
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

/* routes.post("/schedules", async (req, res) => {
  await prisma.barber_Schedules.createMany({
    data: [
      {}
    ]
  })
}); */

export { routes };
