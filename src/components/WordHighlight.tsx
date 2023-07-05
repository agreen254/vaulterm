import { Placement } from "../utils/interfaces";

interface Props {
  word: string;
  sameLetters: Placement[] | false;
}

const WordHighlight = ({ word, sameLetters }: Props) => {
  if (!sameLetters) return <li className="text-gray-600">{word}</li>;

  const shouldHighlight = (char: string, idx: number) => {
    const containsLetter = sameLetters.filter(
      (letter) => char === letter.character
    )[0];
    return (
      containsLetter &&
      containsLetter.indices.filter((index) => index === idx).length === 1
    );
  };

  const chars = [...word];
  return (
    <li>
      {chars.map((char, idx) => (
        <span
          key={"highlight" + idx}
          className={
            shouldHighlight(char, idx) ? "text-2xl shadow-sm bg-[#121212]" : ""
          }
        >
          {char}
        </span>
      ))}
    </li>
  );
};

export default WordHighlight;
