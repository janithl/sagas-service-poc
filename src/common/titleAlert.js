export default function titleAlert(message, duration = 5000, frequency = 500) {
  const originalTitle = window.document.title;

  /** flash message */
  const interval = setInterval(() => {
    window.document.title =
      window.document.title === originalTitle ? message : originalTitle;
  }, frequency);

  /** clear flashing and reset */
  setTimeout(() => {
    clearInterval(interval);
    window.document.title = originalTitle;
  }, duration);
}
