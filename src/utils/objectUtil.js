/**
 * Check if object is empty or not.
 *
 * @param {Object} object
 */
export const isEmpty = (object) => {
	return !object || (Object.entries(object).length === 0 && object.constructor === Object);
};
