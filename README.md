# Readme Instructions
- Example usage with documentation
- A README.md file explaining how to use the components

# Answers
## Documentation
- Pass CharacterCounter into the main app area with the following props, all optional:
  ```
  minWords: a number representing the minimum amount of words that should be typed into the text area
  maxWords: a number representing the maximum amount of words that should be typed into the text area
  targetReadingTime: a number representing however many minutes should be met by time to read the text (calculated using average reading speed of 183 WPM)
  showReadingTime: boolean determining whether the reading time should be displayed or not on the stat display
  ```
  
- for example, if you pass something like
    ```
    function App() {
    return (
      <>
        <CharacterCounter
          minWords={25}
          maxWords={100}
          targetReadingTime={0}
          showReadingTime={true}
        />
      </>
    )
  }
  ```
the displayed program will show character count, word count, and time to read the text currently typed in.  As you type in more, you will see these values increase.  Based on these settings, as long as the word count is between 25 and 100, the number will turn green.  when it is no longer between those bounds, it will turn red.  If we put a value into targetReadingTime greater than 0, the time to read value will remain red until the app calculates time to read above the value you input here.
    - Note:  if maxWords is less than minWords, or if maxwords is 0, the word count will be green as long as the word count is higher than the minWords prop.

## How to use the components
- CharacterCounter takes text, and passes the setText usestate to a text area component, which updates the text through a function to feed data back into the state.
- CharacterCounter uses helper functions to take those words and calculte time to read, and whether or not the wordCount value exists within min and maxword values.
- minWord, maxWord, wordCount, booleans for whether to display reading time, whether within the bounds of minword/maxword, and whether the text meets the targetreadtime are passed to statdisplay
- statdisplay displays all of these stats which update in realtime as a person types and backspaces in the textbox.
