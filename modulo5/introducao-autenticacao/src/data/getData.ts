import { AuthenticationData, USER_ROLES } from "../types";
import * as jwt from "jsonwebtoken"

const expiresIn = "5min";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
    role:payload.role
  };
  return result;
};