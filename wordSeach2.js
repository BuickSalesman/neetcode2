class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }

  addWord(word) {
    let cur = this;
    for (let c of word) {
      if (!(c in cur.children)) {
        cur.children[c] = new TrieNode();
      }
      cur = cur.children[c];
    }
    cur.endOfWord = true;
  }
}

class Solution {
  /**
   * @param {character[][]} board
   * @param {string[]} words
   * @return {string[]}
   */
  findWords(board, words) {
    const root = new TrieNode();
    for (const word of words) {
      root.addWord(word);
    }

    const rows = board.length,
      cols = board[0].length;

    const res = new Set(),
      visit = new Set();

    const dfs = (r, c, node, word) => {
      if (r < 0 || c < 0 || r >= rows || c >= cols || visit.has(`${r},${c}`) || !(board[r][c] in node.children)) {
        return;
      }

      visit.add(`${r},${c}`);

      node = node.children[board[r][c]];
      word += board[r][c];
      if (node.endOfWord) {
        res.add(word);
      }

      dfs(r + 1, c, node, word);
      dfs(r - 1, c, node, word);
      dfs(r, c + 1, node, word);
      dfs(r, c - 1, node, word);

      visit.delete(`${r},${c}`);
    };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dfs(r, c, root, "");
      }
    }

    return Array.from(res);
  }
}
