import type { TextInputProps } from "../types";

export default function TextInput({
  onTextChange,
  placeholder = "start typing...",
  initialValue = "",
}: TextInputProps) {
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(event.target.value);
  };

  return (
    <textarea
      placeholder={placeholder}
      value={initialValue}
      onChange={handleTextChange}
      rows={6}
    />
  );
}
