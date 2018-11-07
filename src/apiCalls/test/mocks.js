export const mockResults = { 
  results: [
    {
      category: "Geography",
      correct_answer: "city",
      difficulty: "easy",
      incorrect_answers: ["city", "city", "city"],
      question: "Which city is the capital of the United States of America?",
      type: "multiple",
    },
    {
      category: "Geography",
      correct_answer: "city",
      difficulty: "easy",
      incorrect_answers: ["city", "city", "city"],
      question: "What is the capital of the American state of Arizona?",
      type: "multiple",
    },
    {
      category: "Geography",
      correct_answer: "animal",
      difficulty: "easy",
      incorrect_answers: ["animal", "animal", "animal"],
      question: "The body of the Egyptian Sphinx was based on which animal?",
      type: "multiple",
    }
  ]
}

export const mockCleaned = [
  {
    category: "Geography",
    question: "Which city is the capital of the United States of America?",
    answers: ["city",  "city", "city", "city"],
    correct_answer: "city",
    id: 1,
    asked: false,
  },
  {
    category: "Geography",
    question: "What is the capital of the American state of Arizona?",
    answers: ["city", "city", "city", "city"],
    correct_answer: "city",
    id: 2,
    asked: false,
  },
  {
    category: "Geography",
    question: "The body of the Egyptian Sphinx was based on which animal?",
    answers: [ "animal", "animal", "animal", "animal", ],
    correct_answer: "animal",
    id: 3,
    asked: false,
  }
]