import { todo } from "./todo";
test("check jest", () => {
  expect(todo("title", "description", "date", "priority")).toBe(undefined);
});
