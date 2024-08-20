import { NextResponse } from "next/server";

import OpenAI from "openai";

const systemPrompt = `
You are a flashcard creator. Your task is to generate educational flashcards based on the provided content.
Each flashcard should have a question on one side and the corresponding answer on the other side.
Ensure the questions are clear and concise, and the answers are accurate and informative.
Consider different difficulty levels and topics to create a diverse set of flashcards.

Return in the following JSON format:
{
  "flashcards": {
  "front": str,
  "back": str
  }
}
`

export async function POST(req) {
  const openai = new OpenAI()
  const data = await req.text()

  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: data },
    ],
    model: 'gpt-4o',
    response_format: { type: 'json_object' },
  })

  // Parse the JSON response from the OpenAI API
  const flashcards = JSON.parse(completion.choices[0].message.content)

  // Return the flashcards as a JSON response
  return NextResponse.json(flashcards.flashcards)
}

