import * as jwt from "jsonwebtoken"
import { authenticationData } from "../services/types";

const expiresIn = "10min";

const getData = (token: string): authenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
    role:payload.role
  };
  return result;
}; 