import { isDate } from 'util/types';

/**
 * Checks if the value is not empty.
 * @param {any} value - The value to check.
 * @returns {boolean} - Whether the value is not empty.
 */
export default function notEmpty(value) {
  // If value isn't an object: check if it's truthy
  if (typeof value !== 'object') {
    return !!value;
  }

  // Null is empty but unfortunately it's an object
  if (value === null) {
    return false;
  }

  // Date is not empty but it doesn't have any keys
  if (isDate(value)) {
    return true;
  }

  // For other objects: check if they have any keys
  return Object.keys(value).length > 0;
}
