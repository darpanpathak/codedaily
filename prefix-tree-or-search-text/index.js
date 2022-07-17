class Trie {
  root = new TrieNode(null);

  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!node.children[char]) {
        node.children[char] = new TrieNode(char, node);
      }

      node = node.children[char];

      if (word.length - 1 === i) {
        node.isEnd = true;
      }
    }

    return this.root;
  }

  search(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        return false;
      } else {
        node = node.children[word[i]];
      }
    }

    return node.isEnd;
  }

  find(prefix) {
    let node = this.root;
    const output = [];

    for (let i = 0; i < prefix.length; i++) {
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        return output;
      }
    }

    this.findAllWords(node, output, prefix);

    return output;
  }

  findAllWords(node, output, prefix) {
    if (node.isEnd) {
      output.push(prefix);
    }

    const keys = Object.keys(node.children);

    for (let i = 0; i < keys.length; i++) {
      this.findAllWords(
        node.children[keys[i]],
        output,
        prefix + node.children[keys[i]].key
      );
    }

    return output;
  }
}

class TrieNode {
  constructor(key, parent = null, isEnd = false) {
    this.isEnd = isEnd;
    this.key = key;
    this.children = {};
  }
}

function main() {
  const trie = new Trie();
  trie.insert('apple');
  trie.insert('dog');
  trie.insert('deer');
  trie.insert('deal');

  console.log(trie.search('deer'));
  console.log(trie.find('de'));
  console.log(trie.find('a'));
}

main();
