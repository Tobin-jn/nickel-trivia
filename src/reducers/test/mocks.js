export const mockState = {
      category: 'Animals',
      questions: {
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
        animals:[],
        vehicles: [],
        cartoons:[],
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


