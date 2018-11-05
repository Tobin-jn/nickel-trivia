export const mockState = {
  category: 'Animals',
  questions: {
    animals:[],
    cartoons:[],
    generalKnowledge:[],
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
    ],
    history:[],
    vehicles: [],
  },
  currentQuestion: {
    category: "Geography",
    question: "If soccer is called football in England, what is American football called in England?",
    correct_answer: "American football",
    id: 12,
    asked: true,
  },
  game: {
    questionCount: 1,
    score: 0,
  }
}

export const mockQuestion = {
  category: "Geography",
  question: "What is the capital of the American state of Arizona?",
  correct_answer: "Phoenix",
  answers: [],
  id: 2,
  asked: false,
}

export const mockCurrentQuestion = {
  category: "Geography",
  question: "What is the capital of the American state of Arizona?",
  correct_answer: "Phoenix",
  answers: [],
  id: 2,
  asked: true,
}

export const mockGeneralQuestion = [{
  category: "General Knowledge",
  answers: [],
  question: "What is the most common surname Wales?",
  correct_answer: "Jones",
  id: 4,
  asked: false,
}]

export const mockUpdatedQuestions = {
    animals:[],
    cartoons:[],
    generalKnowledge:[
      {
        category: "General Knowledge",
        answers: [],
        question: "What is the most common surname Wales?",
        correct_answer: "Jones",
        id: 4,
        asked: false,
      }
    ],
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
    ],
    history:[],
    vehicles: [],
  }

export const mockToggle = { 
  animals:[],
  cartoons:[],
  generalKnowledge:[
    {
      category: "General Knowledge",
      answers: [],
      question: "What is the most common surname Wales?",
      correct_answer: "Jones",
      id: 4,
      asked: false,
    }
  ],
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
        asked: true,
      }
    ],
  history:[],
  vehicles: [],
}



