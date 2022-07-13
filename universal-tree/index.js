// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

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

var is_unival = (root, val) => {
  if (!root) {
    return true;
  }

  if (
    (root.left != null && root.left.val !== val) ||
    (root.right != null && root.right.val !== val)
  ) {
    return false;
  }

  if (is_unival(root.left, val) && is_unival(root.right, val)) {
    return true;
  }
};

var universal_subtree = (root) => {
  if (!root) {
    return 1;
  }

  const queue = [root];
  let count = 0;

  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      const left = node.left;
      const right = node.right;

      queue.push(left);
      queue.push(right);

      const unival = is_unival(node, node.val);

      if (unival) {
        count++;
      }
    }
  }

  return count;
};

const input1 = deserialize([0, 1, 0, null, null, 1, 0, 1, 1]);
const input2 = deserialize([
  'a',
  'a',
  'a',
  null,
  null,
  'a',
  'a',
  null,
  null,
  'A',
]);
const input3 = deserialize([
  'a',
  'c',
  'b',
  null,
  null,
  'b',
  'b',
  null,
  null,
  'b',
]);

console.log(universal_subtree(input1));
console.log(universal_subtree(input2));
console.log(universal_subtree(input3));
