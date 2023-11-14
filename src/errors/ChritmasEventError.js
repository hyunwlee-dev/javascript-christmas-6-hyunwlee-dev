import { ERROR_MESSAGE } from '../constants/index.js';

class ChritmasEventError extends Error {
  constructor(message) {
    super(`${ERROR_MESSAGE.error} ${message}`);
  }
}

export default ChritmasEventError;
