import { useState } from "react";

function processText(text, maxLength = 30, isShowingMore) {
  if (text.length <= maxLength) {
    return [false, text];
  } else {
    const textToShow = isShowingMore ? text : `${text.slice(0, maxLength)}...`;

    return [true, textToShow];
  }
}

function ShowMoreHook({ children, maxLength }) {
  const [isShowingMore, setIsShowingMore] = useState(false);
  const [mustBeTruncated, textToShow] = processText(
    children,
    maxLength,
    isShowingMore
  );

  return (
    <>
      <span>{textToShow} </span>
      {mustBeTruncated && (
        <span
          style={{ color: "red" }}
          onClick={() =>
            setIsShowingMore((oldIsShowingMore) => !oldIsShowingMore)
          }
        >
          {isShowingMore ? "Nascondi" : "Mostra altro"}
        </span>
      )}
    </>
  );
}

export default ShowMoreHook;
