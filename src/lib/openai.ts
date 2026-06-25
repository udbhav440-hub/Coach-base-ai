import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateWorkoutPlan(clientData: any): Promise<string> {
  const prompt = `Generate a detailed 4-week workout plan for:
  - Age: ${clientData.age}
  - Experience Level: ${clientData.experienceLevel}
  - Goal: ${clientData.goal}
  - Available Days: ${clientData.availableDays}
  - Equipment: ${clientData.equipment}
  
  Include warm-up, exercises with sets/reps, rest periods, and progression tips.`

  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
    max_tokens: 2000,
  })

  return response.choices[0].message.content || ''
}

export async function generateNutritionPlan(clientData: any): Promise<string> {
  const prompt = `Generate a detailed nutrition plan for:
  - Age: ${clientData.age}
  - Goal: ${clientData.goal}
  - Dietary Restrictions: ${clientData.dietaryRestrictions}
  - Activity Level: ${clientData.activityLevel}
  - Current Weight: ${clientData.weight}kg
  
  Include daily calorie target, macro breakdown, meal timing, and sample meals.`

  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
    max_tokens: 2000,
  })

  return response.choices[0].message.content || ''
}

export async function generateFollowupMessage(clientName: string, progress: any): Promise<string> {
  const prompt = `Generate a personalized WhatsApp follow-up message for ${clientName} based on their progress:
  - Current Week: ${progress.week}
  - Workouts Completed: ${progress.workoutsCompleted}
  - Weight Change: ${progress.weightChange}kg
  - Notes: ${progress.notes}
  
  Keep it motivational, concise, and actionable. Use emoji appropriately.`

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.8,
    max_tokens: 500,
  })

  return response.choices[0].message.content || ''
}

export async function generateInstagramContent(topic: string): Promise<string[]> {
  const prompt = `Generate 3 engaging Instagram post ideas about fitness topic: ${topic}.
  Format as JSON array with objects containing 'caption' and 'hashtags' fields.
  Make captions motivational and actionable.`

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.8,
    max_tokens: 1000,
  })

  try {
    const jsonMatch = response.choices[0].message.content?.match(/\[.*\]/s)
    return JSON.parse(jsonMatch?.[0] || '[]')
  } catch {
    return []
  }
}
