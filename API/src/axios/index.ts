import axios from "axios";
import { application } from "express";
export const api = axios.create({
  baseURL: process.env.API,
  headers: {
    "Content-type": "application/json",
  },
});
