import { textToSpeech } from "@/server/use-cases/text-to-speech";
import type { NextApiRequest, NextApiResponse } from "next";

const DEFAULT_NAME = new Date().toISOString();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("[text]", req.body.text);
    const file = await textToSpeech(req.body.text);

    console.log("[file]", file);

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${DEFAULT_NAME}-tts.mp3`
    );

    return res.status(201).send(file);
  } catch (e: any) {
    return res.status(500).json({
      error: e.message,
    });
  }
}
