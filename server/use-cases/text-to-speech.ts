import { openai } from "../external/open.ai";

const DEFAULT_NAME = new Date().toISOString();

export const textToSpeech = async (
  text: string,
  name: string = DEFAULT_NAME
) => {
  const response = await openai.audio.speech.create({
    model: "tts-1",
    voice: "shimmer",
    input: text,
    response_format: "mp3",
    speed: 1,
  });

  const file = Buffer.from(await response.arrayBuffer());

  return file;
};
