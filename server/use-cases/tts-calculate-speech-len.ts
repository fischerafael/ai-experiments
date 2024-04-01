import { calculateChars } from "./calculate-chars";

const CHARS_PER_S = 15;

export const ttsCalculateSpeechLenInS = (text: string) => {
  const charsLen = calculateChars(text);
  return charsLen / CHARS_PER_S;
};
