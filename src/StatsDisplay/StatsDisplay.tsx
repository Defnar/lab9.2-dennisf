import type { StatsDisplayProps } from "../types";
import { formattedReadingTime } from "../utils/statCalculator";

export default function StatsDisplay({
  stats,
  showReadingTime = true,
}: StatsDisplayProps) {
  const statDisplayStyles = {
    withinBounds: { color: "green" },
    outOfBounds: { color: "red" },
  };

  let withinBounds = true;

  if (stats.maxWords && stats.maxWords > 0) {
    if (stats.wordCount < stats.minWords || stats.wordCount > stats.maxWords)
      withinBounds = false;
  }

  return (
    <>
      <div>
        <p>Characters</p>
        <p>{stats.characterCount}</p>
      </div>
      <div>
        <p>Words</p>
        <p
          style={
            withinBounds
              ? statDisplayStyles.withinBounds
              : statDisplayStyles.outOfBounds
          }
        >
          {stats.wordCount}
        </p>
        {stats.maxWords > 0 && (
          <p>
            Min: {stats.minWords} | Max: {stats.maxWords}
          </p>
        )}
      </div>
      {showReadingTime && (
        <div>
          <p>Reading Time</p>
          <p>{showReadingTime ? formattedReadingTime(stats.wordCount) : ""}</p>
        </div>
      )}
    </>
  );
}
