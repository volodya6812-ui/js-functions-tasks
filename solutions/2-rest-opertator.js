import _ from 'lodash';

// BEGIN
import sum from 'lodash/sum.js';

const average = (...args) => {
  if (args.length === 0) {
    return null;
  }
  return sum(args) / args.length;
};

export default average;
// END
