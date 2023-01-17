var searchBST = function(currentNode = root, val) {
    if (currentNode === null) return null;
      if (currentNode.val === val) return currentNode;
      if (val < currentNode.val) {
        return searchBST(currentNode.left, val)
      } else if(val > currentNode.val) {
        return searchBST(currentNode.right,val)
      }
};
