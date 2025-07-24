//helper functions to calculate stats
export const readingTime = (wordCount: number) => {
  const adultAverageReadSpeed = 183;
  return Math.floor(wordCount / adultAverageReadSpeed);
};

export const characterCounter = (text: string) => {
  return text.length;
};

export const wordCounter = (text: string) => {
  return text.split(" ").length;
};
