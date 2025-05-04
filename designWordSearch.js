class TrieNode {
  constructor() {
    this.children = new Map();
    this.word = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let cur = this.root;
    for (const c of word) {
      if (!cur.children.has(c)) {
        cur.children.set(c, new TrieNode());
      }
      cur = cur.children.get(c);
    }
    cur.word = true;
  }

  search(word) {
    return this.dfs(word, 0, this.root);
  }

  dfs(word, i, node) {
    for (let j = i; j < word.length; j++) {
      const c = word[j];
      if (c === ".") {
        for (const child of node.children.values()) {
          if (this.dfs(word, j + 1, child)) return true;
        }
        return false;
      } else {
        if (!node.children.has(c)) return false;
        node = node.children.get(c);
      }
    }
    return node.word;
  }
}
