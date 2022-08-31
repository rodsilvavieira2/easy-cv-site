import { nanoid } from "nanoid";

export function withId<T>(data: T[]): Array<T & { id: string }> {
  return data.map((item) => ({ ...item, id: nanoid() }));
}
