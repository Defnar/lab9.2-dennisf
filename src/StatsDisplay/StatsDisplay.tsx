
import type { StatsDisplayProps } from "../types";
import { formattedReadingTime } from "../utils/statCalculator";

export default function StatsDisplay({
  stats,
  showReadingTime = true,
  
}: StatsDisplayProps) {
  return (
    <>
      <div>
        <p>Characters</p>
        <p>{stats.characterCount}</p>
      </div>
      <div>
        <p>Words</p>
        <p>{stats.wordCount}</p>
        {stats.maxWords > 0 && <p>Min: {stats.minWords} | Max: {stats.maxWords}</p>}
      </div>
      <div>
        <p>Reading Time</p>
        <p>{showReadingTime ? formattedReadingTime(stats.readingTime) : ""}</p>
      </div>
    </>
  );
}
