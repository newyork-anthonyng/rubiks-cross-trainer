import randomNumberGenerator from "random-number-in-range";
import scrambles from "./scrambles";

const MoveNamesWCA = [
  "R",
  "R2",
  "R'",
  "F",
  "F2",
  "F'",
  "L",
  "L2",
  "L'",
  "B",
  "B2",
  "B'",
  "U",
  "U2",
  "U'",
  "D",
  "D2",
  "D'"
];

// level is expected to be one-index, and not zero-index
const getWhiteCrossScramble = level => {
  const currentScrambleLevel = scrambles[level - 1];
  if (!currentScrambleLevel) {
    return undefined;
  }

  const randomIndex = randomNumberGenerator(0, currentScrambleLevel.length - 1);
  const currentScramble = currentScrambleLevel[randomIndex];

  let textScramble = "";

  for (let i = 0; i < currentScramble.length; i += 1) {
    textScramble +=
      MoveNamesWCA[currentScramble[i].charCodeAt(0) - "A".charCodeAt(0)];

    if (i !== currentScramble.length - 1) {
      textScramble += " ";
    }
  }

  return textScramble;
};

export default getWhiteCrossScramble;
