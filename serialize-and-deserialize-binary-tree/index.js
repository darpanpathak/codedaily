// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {array}
 */
var serialize = function (root) {
  if (!root) {
    return null;
  }

  const data = [];

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      const val = node.val;
      const left = node.left;
      const right = node.right;

      data.push(val);
      queue.push(left);
      queue.push(right);
    } else {
      data.push(null);
    }
  }

  while (data.length > 0 && data[data.length - 1] === null) {
    data.pop();
  }

  return JSON.stringify(data);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) {
    return null;
  }

  // data = JSON.parse(data);

  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  const root = new TreeNode(data.shift());
  const queue = [root];

  while (data.length > 0) {
    const node = queue.shift();

    let val = data.shift();
    if (typeof val !== 'undefined' && val !== null) {
      node.left = new TreeNode(val);
      queue.push(node.left);
    }

    val = data.shift();
    if (typeof val !== 'undefined' && val !== null) {
      node.right = new TreeNode(val);
      queue.push(node.right);
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const input = [
  4,
  -7,
  -3,
  null,
  null,
  -9,
  -3,
  9,
  -7,
  -4,
  null,
  6,
  null,
  -6,
  -6,
  null,
  null,
  0,
  6,
  5,
  null,
  9,
  null,
  null,
  -1,
  -4,
  null,
  null,
  null,
  -2,
];

const response = serialize(deserialize(input));
console.log(response);
