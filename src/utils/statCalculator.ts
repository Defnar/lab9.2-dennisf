//helper functions to calculate stats
const adultAverageReadSpeed = 183;

export const readingTime = (wordCount: number) => {
  console.log(wordCount / adultAverageReadSpeed)
  return Math.floor(wordCount / adultAverageReadSpeed);
};

export const characterCounter = (text: string) => {
  //this removes extra white spaces
  text = text.replace(/\s+/g, " ").trim();

  return text.length;
};

export const wordCounter = (text: string) => {
  //this removes extra white spaces
  text = text.replace(/\s+/g, " ").trim();

  return text.split(" ").length;
};

export const formattedReadingTime = (wordCount: number): string => {
  const timePercent = wordCount / adultAverageReadSpeed;
  const minutes = Math.floor(timePercent);
  const seconds = Math.round((timePercent - minutes) * 60);
  const secondsString = seconds.toString().padStart(2, "0");


  return `${minutes}:${secondsString}`;
};
