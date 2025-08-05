import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `Tu es l'assistant virtuel d'Open The Box, une entreprise de location d'espaces professionnels et de domiciliation d'entreprise au Togo.

Informations sur Open The Box :
- Nous proposons des bureaux, salles de réunion, espaces de coworking à Lomé
- Services de domiciliation d'entreprise avec adresse professionnelle
- Prix : 240.000 F CFA/an pour la domiciliation complète
- Services inclus : réception courrier, permanence téléphonique, CVthèque, réseau de partenaires
- Localisation : Agbalépédogan, Lomé, près des institutions publiques
- Contact : +228 91 28 04 54, contact@openthebox.space
- Horaires : Lun-Dim 8h-20h

Règles importantes :
1. Réponds toujours en français
2. Sois professionnel, amical et serviable
3. Donne des informations précises sur nos services
4. Si tu ne sais pas quelque chose, invite à contacter directement
5. Garde tes réponses concises mais informatives
6. Utilise le "tu" pour être plus proche du client
7. Mentionne nos coordonnées si pertinent

Exemples de questions fréquentes :
- "Quels sont vos tarifs ?" → Explique les 240.000 F CFA/an et les services inclus
- "Où êtes-vous situés ?" → Agbalépédogan, Lomé, près des institutions
- "Quels services proposez-vous ?" → Location d'espaces + domiciliation
- "Comment vous contacter ?" → Téléphone et email`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const response =
      completion.choices[0]?.message?.content ||
      "Désolé, je n'ai pas pu traiter votre demande.";

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
