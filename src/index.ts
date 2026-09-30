import express, { type Express, type Request, type Response } from "express";
import cors from "cors";

import { type Pet, pets } from "./data/pets";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req: Request, res: Response<Pet[]>): void => {
  res.json(pets);
});

app.get(
  "/:id",
  (
    req: Request<{ id: string }>,
    res: Response<Pet | { message: string }>,
  ): void => {
    const id: number = +req.params.id;

    const pet: Pet | undefined = pets.find((p: Pet): boolean => p.id === id);
    if (!pet) {
      res.status(404).json({ message: "Pet not found" });
    } else {
      res.json(pet);
    }
  },
);

app.use((req: Request, res: Response<{ message: string }>): void => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, (): void => {
  console.log("Server is running on port: ", port);
});
