const postorderTraversal = function(root) {
    if(!root) return [];

    const stack = [root];
    const result = [];
    while(stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
    
    return result.reverse();
};


// Recursive Solution


const postorderTraversal = function(root) {
    const result = [];
    const recursive = (node) => {
        if(!node) return;

        if(node.left) recursive(node.left);
        if(node.right) recursive(node.right);
        result.push(node.val);
    }

    recursive(root);
    return result;
};