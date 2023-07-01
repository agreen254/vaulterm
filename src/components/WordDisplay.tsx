import chunk from "../utils/chunk";

interface Props {
  words: string[] | undefined;
  selectedWord: string | undefined;
  setSelectedWord: (word: string) => void;
}

const WordDisplay = ({ words, selectedWord, setSelectedWord }: Props) => {
  return words ? (
    <div>
      <ul>
        {chunk(words, 2).map((chunk, idx) => (
          <li key={idx}>
            {chunk.map((word) => (
              <button
                className={
                  "px-5 py-3 text-2xl min-w-[32] m-2 hover:bg-gray-500" +
                  (selectedWord === word ? " bg-gray-600" : "")
                }
                key={word}
                onClick={(e) => {
                  if (selectedWord !== word) setSelectedWord(word);
                  else {
                    setSelectedWord("");
                  }
                }}
              >
                {word}
              </button>
            ))}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default WordDisplay;
