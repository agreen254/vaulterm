export interface Guess {
  word: string;
  numCorrect: number;
}

// my original choice for this name was "Location"
// but apparently "Location" is a keyword in MongoDB
// and will throw an error if a custom interface
// bears its name
// https://stackoverflow.com/questions/54254763/missing-the-following-properties-from-type-location-location-ancestororigins
export interface Placement {
  character: string;
  indices: number[];
}

export interface ValidationErrors {
  tooLongError: string;
  tooShortError: string;
  illegalCharError: string;
  unequalLengthsError: string;
}

export interface GlobalState {
  events: string[];
  guesses: Guess[];
  selectedEntry: string;
  words: string[];
}
