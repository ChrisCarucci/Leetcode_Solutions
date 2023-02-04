// Runtime: 59ms    Beats: 98.18%    Memory: 44.4MB    Beats: 87.81%

const maxDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.right),maxDepth(root.left)) 
};