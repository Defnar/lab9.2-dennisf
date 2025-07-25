import { useState } from "react";
import type { TextStats, CharacterCounterProps } from "../types";
import TextInput from "../TextInput/TextInput";
import {
  characterCounter,
  readingTime,
  wordCounter,
} from "../utils/statCalculator";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import WordCountComparator from "../utils/WordCountComparator";

export default function CharacterCounter({
  minWords = 0,
  maxWords = 0,
  targetReadingTime = 0,
  showReadingTime = false,
}: CharacterCounterProps) {
  //state for stats
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
    minWords: minWords,
    maxWords: maxWords,
  });

  //state for text
  const [text, setText] = useState<string>();

  //sets new text to text state
  const updateText = (newText: string) => {
    setText(newText.trim());
    updateStats(newText.trim());
  };

  //sets new stats to stat state
  const updateStats = (text: string) => {
    const characterCount = characterCounter(text);
    const wordCount = wordCounter(text);
    const readingTimeValue = readingTime(wordCount);

    const updatedStats: TextStats = {
      characterCount,
      wordCount,
      readingTime: readingTimeValue,
      minWords,
      maxWords,
    };

    setStats(updatedStats);
  };

  //sets withinwordcount to true or false
  const withinWordCount = WordCountComparator(
    minWords,
    maxWords,
    stats.wordCount
  );

  //checks time to ensure time is past bound
  const metReadingTarget = stats.readingTime >= targetReadingTime;

  return (
    <>
      <TextInput onTextChange={updateText} initialValue={text} />
      <StatsDisplay
        stats={stats}
        showReadingTime={showReadingTime}
        withinWordCount={withinWordCount}
        withinReadingTime={metReadingTarget}
      />
    </>
  );
}
