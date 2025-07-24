import { useState } from "react";
import { TextStats, type CharacterCounterProps } from "../types";
import TextInput from "../TextInput/TextInput";
import {
  characterCounter,
  readingTime,
  wordCounter,
} from "../utils/statCalculator";
import StatsDisplay from "../StatsDisplay/StatsDisplay";

export default function CharacterCounter({
  minWords,
  maxWords,
  targetReadingTime,
}: CharacterCounterProps) {
  //sets new stats to stat state
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  //sets new text to text state
  const newText = (newText: string) => {
    setText(newText.trim());
  };

  const updateStats = (text: string) => {
    const characterCount = characterCounter(text);
    const wordCount = wordCounter(text);
    const readingTimeValue = readingTime(wordCount);

    const updatedStats: TextStats = {
      characterCount,
      wordCount,
      readingTime: readingTimeValue,
    };

    setStats(updatedStats);
  };

  //state for text
  const [text, setText] = useState<string>();

  //state for stats

  return (
    <>
      <TextInput onTextChange={newText} />
      <StatsDisplay />
    </>
  );
}
