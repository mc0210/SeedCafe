export function deleteContent(content) {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
