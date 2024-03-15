// highlightSearch.js

function highlightSearchResults(searchQuery, content, surroundingLength = 50) {
  if (!searchQuery || !content) return content;

  const regex = new RegExp(`(${searchQuery})`, "gi");

  const match = regex.exec(content);

  if (!match) {
    console.log("No match found");
    return cropContent(content);
  }
  console.log("match");

  const matchStart = match.index;
  const matchEnd = matchStart + match[0].length;

  const start = Math.max(matchStart - surroundingLength, 0);
  const end = Math.min(matchEnd + surroundingLength, content.length);

  const surroundedText = content.substring(start, end);

  const regex2 = new RegExp(`${searchQuery}`, "gi");

  const highlightWord = surroundedText.replace(regex2, (match) => {
    return `<span class="highlighted">${match}</span>`;
  });
  return highlightWord;
}

function cropContent(content, surroundingLength) {
  if (!content) return content;

  const start = 0;
  const end = Math.min(surroundingLength, content.length);

  const surroundedText = content.substring(start, end);

  return surroundedText;
}
