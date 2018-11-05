export const mockState = {
  questions: {
    geography:[
      {        
        category: "Geography",
        question: "Which city is the capital of the United States of America?",
        correct_answer: "Washington D.C",
        answers: [],
        id: 1,
        asked: false,
      },
      {
        category: "Geography",
        question: "What is the capital of the American state of Arizona?",
        correct_answer: "Phoenix",
        answers: [],
        id: 2,
        asked: false,
      }
    ]
  },
  category: 'animals',
  game: {
    score: 5,
    questionCount: 2
  },
  currentQuestion: {        
    category: "Geography",
    question: "Which city is the capital of the United States of America?",
    correct_answer: "Washington D.C",
    answers: [],
    id: 1,
    asked: false,
  }
}

export const mockQuestions = [
    {        
      category: "Geography",
      question: "Which city is the capital of the United States of America?",
      correct_answer: "Washington D.C",
      answers: [],
      id: 1,
      asked: false,
    },
    {
      category: "Geography",
      question: "What is the capital of the American state of Arizona?",
      correct_answer: "Phoenix",
      answers: [],
      id: 2,
      asked: false,
    }
  ]

export const mockQuestion = {        
    category: "Geography",
    question: "Which city is the capital of the United States of America?",
    correct_answer: "Washington D.C",
    answers: ['Washington D.C', 'Boston', 'NYC', 'LA'],
    id: 1,
    asked: false,
  }