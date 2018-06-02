/* eslint no-console: ["error", { allow: ["log", "error"] }] */

const log = message => console.log(message);

const error = errorMessage => console.error(errorMessage);

export default { log, error };
