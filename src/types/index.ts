export interface User {
  id: string
  email: string
  name: string
  userType: 'trainer' | 'client'
  createdAt: string
  updatedAt: string
}

export interface Trainer extends User {
  bio: string
  specialization: string
  yearsOfExperience: number
  profileImage: string
  clientsCount: number
}

export interface Client extends User {
  trainerId: string
  age: number
  gender: string
  height: number
  weight: number
  goal: string
  medicalConditions: string[]
  workoutExperience: 'beginner' | 'intermediate' | 'advanced'
  dietaryRestrictions: string[]
  profileImage: string
}

export interface WorkoutPlan {
  id: string
  clientId: string
  trainerId: string
  title: string
  description: string
  duration: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  content: string
  exercises: Exercise[]
  createdAt: string
  updatedAt: string
  pdfUrl?: string
}

export interface Exercise {
  id: string
  name: string
  sets: number
  reps: number
  duration?: number
  rest: number
  instructions: string
  image?: string
}

export interface NutritionPlan {
  id: string
  clientId: string
  trainerId: string
  title: string
  description: string
  calorieTarget: number
  macros: {
    protein: number
    carbs: number
    fats: number
  }
  content: string
  meals: Meal[]
  createdAt: string
  updatedAt: string
  pdfUrl?: string
}

export interface Meal {
  id: string
  name: string
  ingredients: string[]
  calories: number
  macros: {
    protein: number
    carbs: number
    fats: number
  }
  recipe: string
}

export interface ProgressEntry {
  id: string
  clientId: string
  trainerId: string
  date: string
  weight: number
  measurements: {
    chest?: number
    waist?: number
    hips?: number
    arm?: number
    thigh?: number
  }
  bodyFatPercentage?: number
  photos: string[]
  notes: string
  workoutsCompleted: number
  mealsLogged: number
}

export interface Subscription {
  id: string
  userId: string
  stripeSubscriptionId: string
  status: 'active' | 'canceled' | 'past_due'
  plan: 'pro' | 'premium'
  price: number
  billingCycle: 'monthly' | 'yearly'
  startDate: string
  endDate?: string
  createdAt: string
  updatedAt: string
}

export interface Message {
  id: string
  senderId: string
  recipientId: string
  content: string
  type: 'text' | 'image' | 'plan'
  attachmentUrl?: string
  isRead: boolean
  createdAt: string
}
