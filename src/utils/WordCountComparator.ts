export default function WordCountComparator(
  minWords: number,
  maxWords: number,
  wordCount: number
): boolean {
  if (minWords > maxWords && wordCount >= minWords) return true;
  if (minWords == 0 && maxWords == 0) return true;
  if (minWords <= wordCount && maxWords >= wordCount) return true;
  return false;
}
