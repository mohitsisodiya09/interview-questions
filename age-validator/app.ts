const express = require("express");
import { NextFunction, Request, Response } from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

// Middleware
const validateDOB = (req: Request, res: Response, next: NextFunction) => {
  const dob = req.params.dob;
  if (!dob) {
    return res.status(400).send({ message: "DOB is required" });
  }

  const dobDate = new Date(dob as string); // Format - YYYY-MM-DD
  const currentDate = new Date();

  // Calculate the user's age
  let age = currentDate.getFullYear() - dobDate.getFullYear();
  const monthDifference = currentDate.getMonth() - dobDate.getMonth();
  const dayDifference = currentDate.getDate() - dobDate.getDate();

  // Adjust age if the current date is before the user's birthday this year
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  // Determine if the user is older than 16
  res.locals.ageValid = age >= 16 ? true : false;
  next();
};

app.get("/entry/:dob", validateDOB, (req: Request, res: Response) => {
  const message = res.locals.ageValid ? "Welcome" : "Under Aged";
  res.status(200).send({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
