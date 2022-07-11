import User from "./types/User";
import UserNacionality, { LOCATION, NACIONALITY } from "./types/UserNacionality";
import Casino from "./types/UserNacionality"
import Result from "./types/UserNacionality"


export function performPurchase(user: User, value: number): User | undefined {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value
    }
  }
  return undefined
}

export function verifyAge(casino: Casino, users: UserNacionality[]): Result {
  const allowed: UserNacionality[] = [];
  const unallowed: UserNacionality[] = [];

  for (const user of users) {
    if (casino.location === LOCATION.EUA) {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
      break;
    }
  }
  return {
    brazilians: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
    },
    americans: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
    },
  }
}






