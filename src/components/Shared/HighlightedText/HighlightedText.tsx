import { StyledHighlightedText } from './HighlightedTextStyle';

interface IHighlightTextProps {
  text: string;
  highlightText?: string | string[];
}

export const HighlightText = ({ text, highlightText }: IHighlightTextProps) => {
  if (highlightText) {
    const highlight = Array.isArray(highlightText)
      ? highlightText.join(' ')
      : highlightText;

    const textArr = text.split(' ');

    const newText = textArr.map((word) => {
      if (highlight.includes(word)) {
        return `<span style="color:#ff0101">${word}</span>`;
      }
      return word;
    });

    const changedText = newText.join(' ');
    return (
      <StyledHighlightedText
        dangerouslySetInnerHTML={{ __html: changedText }}
      ></StyledHighlightedText>
    );
  } else {
    return <StyledHighlightedText>{text}</StyledHighlightedText>;
  }
};
