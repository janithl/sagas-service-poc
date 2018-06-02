/* eslint no-console: ["error", { allow: ["log", "error"] }] */

const log = (...messages) => console.log(...messages);

const error = (...messages) => console.error(...messages);

export default { log, error };
