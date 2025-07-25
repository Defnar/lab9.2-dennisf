import type { StatsDisplayProps } from "../types";
import { formattedReadingTime } from "../utils/statCalculator";

export default function StatsDisplay({
  stats,
  showReadingTime = true,
  withinWordCount = true,
  withinReadingTime = true,
}: StatsDisplayProps) {
  const statDisplayStyles = {
    withinBounds: { color: "green" },
    outOfBounds: { color: "red" },
  };

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
            withinWordCount
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
          <p
            style={
              withinReadingTime
                ? statDisplayStyles.withinBounds
                : statDisplayStyles.outOfBounds
            }
          >
            {showReadingTime ? formattedReadingTime(stats.wordCount) : ""}
          </p>
        </div>
      )}
    </>
  );
}
