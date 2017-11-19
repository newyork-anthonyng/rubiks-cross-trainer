import getRandomSolve from "./";

jest.mock("random-number-in-range", () => () => 0);
jest.mock("./scrambles", () => [
  ["ERENIOBFBRLBNJNLHQJNL"],
  ["BNHBLQBQBLDAKOCLMJFC"],
  ["AHKMCDBDMHMEHPKPEBH"],
  ["QKBLNDHENFIQJOKAREMK"],
  ["NBJBJQNBFHJCRECPAKQIK"],
  ["DNIPLCRKPEBNQJQDQBHK"],
  ["HEGQCQHECQBFGJBQCOFO"],
  ["JQNFQEQBQLFPJIPDAJOB"]
]);

it("should return a random scramble when asking for a one-move solve", () => {
  const result = getRandomSolve(1);

  expect(result).toMatchSnapshot();
});

it("should return a random scramble when asking for a two-move solve", () => {
  const result = getRandomSolve(2);

  expect(result).toMatchSnapshot();
});

it("should return a random scramble when asking for a three-move solve", () => {
  const result = getRandomSolve(3);

  expect(result).toMatchSnapshot();
});

it("should return a random scramble when asking for a four-move solve", () => {
  const result = getRandomSolve(4);

  expect(result).toMatchSnapshot();
});

it("should return a random scramble when asking for a five-move solve", () => {
  const result = getRandomSolve(5);

  expect(result).toMatchSnapshot();
});

it("should return a random scramble when asking for a six-move solve", () => {
  const result = getRandomSolve(6);

  expect(result).toMatchSnapshot();
});

it("should return a random scramble when asking for a seven-move solve", () => {
  const result = getRandomSolve(7);

  expect(result).toMatchSnapshot();
});

it("should return a random scramble when asking for a eight-move solve", () => {
  const result = getRandomSolve(8);

  expect(result).toMatchSnapshot();
});

it("should not explode when asking for scrambles more than eight moves", () => {
  const result = getRandomSolve(9);

  expect(result).toEqual(undefined);
});

it("should not explode when asking for a 0-move solve", () => {
  const result = getRandomSolve(0);

  expect(result).toEqual(undefined);
});

it("should not explode when passing undefined as an argument", () => {
  const result = getRandomSolve();

  expect(result).toEqual(undefined);
});
