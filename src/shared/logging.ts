import log from 'electron-log/renderer';

console.log({ log });
console.log = log.log;
console.debug = log.debug;
console.error = log.error;
console.warn = log.warn;
console.trace = log.verbose;
