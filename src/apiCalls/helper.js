export const generalKnowledge = { amount: 50, category: 9}
  
export const geography = { amount: 50, category: 22}

export const history = { amount: 40, category: 23}
  
export const cartoons = { amount: 18, category: 32 }

export const animals = { amount: 9, category: 27}

export const vehicles = { amount: 17, category: 26}

export const cleanQuestions = (questions) => {
  return questions
}


// general https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple      9     50
// geography https://opentdb.com/api.php?amount=50&category=22&difficulty=easy&type=multiple   22    50
// history https://opentdb.com/api.php?amount=40&category=23&difficulty=easy&type=multiple     23    40
// cartoons https://opentdb.com/api.php?amount=28&category=32&difficulty=easy&type=multiple    32    18
// animals https://opentdb.com/api.php?amount=9&category=27&difficulty=easy&type=multiple      27    9    
// vehicles https://opentdb.com/api.php?amount=17&category=28&difficulty=easy&type=multiple    26    17