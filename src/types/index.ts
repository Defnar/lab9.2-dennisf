export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
  minWords: number;
  maxWords: number;
}

export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
  withinWordCount: boolean;
  withinReadingTime: boolean;
}

export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
  showReadingTime?: boolean;
}
