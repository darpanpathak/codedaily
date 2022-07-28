// 692. Top K Frequent Words
// Medium

// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = {};
  const result = [];
  const PQ = new PriorityQueue(compareFunc);

  for (let word of words) {
    if (map[word]) {
      map[word] += 1;
    } else {
      map[word] = 1;
    }
  }

  for (let [key, value] of Object.entries(map)) {
    PQ.insert({
      word: key,
      freq: value,
    });

    if (PQ.size() > k) {
      PQ.extract();
    }
  }

  while (PQ.size() > 0) {
    result.unshift(PQ.extract().word);
  }

  return result;
};

function compareFunc(a, b) {
  if (a.freq === b.freq) {
    return a.word < b.word ? 1 : -1;
  }
  return a.freq - b.freq;
}

class PriorityQueue {
  #data = [];
  constructor(compareFunc) {
    this.compareFunc = compareFunc;
  }

  insert(val) {
    this.#data.push(val);
    this.#data.sort(this.compareFunc);
  }

  size() {
    return this.#data.length;
  }

  extract() {
    return this.#data.shift();
  }
}

console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2));
console.log(
  topKFrequent(
    ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'],
    4
  )
);
console.log(topKFrequent(['the'], 4));
