export const mockResults = { 
  results: [
    {
      category: "Geography",
      correct_answer: "Washington D.C",
      difficulty: "easy",
      incorrect_answers: ["Seattle", "Albany", "Los Angeles"],
      question: "Which city is the capital of the United States of America?",
      type: "multiple",
    },
    {
      category: "Geography",
      correct_answer: "Phoenix",
      difficulty: "easy",
      incorrect_answers: ["Montgomery", "Tallahassee", "Raleigh"],
      question: "What is the capital of the American state of Arizona?",
      type: "multiple",
    },
    {
      category: "Geography",
      correct_answer: "Lion",
      difficulty: "easy",
      incorrect_answers: ["Bull", "Horse", "Dog"],
      question: "The body of the Egyptian Sphinx was based on which animal?",
      type: "multiple",
    }
  ]
}

export const mockCleaned = [
  {
    category: "Geography",
    question: "Which city is the capital of the United States of America?",
    answers: ["Seattle",  "Los Angeles", "Albany", "Washington D.C"],
    correct_answer: "Washington D.C",
    id: 1,
    asked: false,
  },
  {
    category: "Geography",
    question: "What is the capital of the American state of Arizona?",
    answers: ["Montgomery", "Raleigh", "Tallahassee", "Phoenix"],
    correct_answer: "Phoenix",
    id: 2,
    asked: false,
  },
  {
    category: "Geography",
    question: "The body of the Egyptian Sphinx was based on which animal?",
    answers: [ "Horse", "Dog", "Bull", "Lion", ],
    correct_answer: "Lion",
    id: 3,
    asked: false,
  }
]