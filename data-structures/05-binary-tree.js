function checkInputList(list) {
    if (!list || !Array.isArray(list) || list.length === 0) {
        throw new Error("Invalid argument.");
    }
}

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function postOrderTraverse(root) {
    let list = [];
    if (root.left) {
        list = list.concat(postOrderTraverse(root.left));
    }
    if (root.right) {
        list = list.concat(postOrderTraverse(root.right));
    }
    list.push(root.data);

    return list;
}

function middleOrderTraverse(root) {
    let list = [];
    if (root.left) {
        list = list.concat(middleOrderTraverse(root.left));
    }
    list.push(root.data);
    if (root.right) {
        list = list.concat(middleOrderTraverse(root.right));
    }

    return list;
}

function preOrderTraverse(root) {
    let list = [];
    list.push(root.data);
    if (root.left) {
        list = list.concat(preOrderTraverse(root.left));
    }
    if (root.right) {
        list = list.concat(preOrderTraverse(root.right));
    }

    return list;
}

class BinaryTree {
    /**
     * Given inorder and postorder traversal of a tree, construct the binary tree.
     * @param {number[]} inOrderList
     * @param {number[]} postOrderList
     */
    constructor(inOrderList, postOrderList) {
        this.inOrderMap = {};
        inOrderList.forEach((item, index) => {
            this.inOrderMap[item] = index;
        });

        this.root = this.buildTree(inOrderList, postOrderList);
    }

    /**
     * Given inorder and postorder traversal of a tree, construct the binary tree.
     * @param {number[]} inOrderList
     * @param {number[]} postOrderList
     */
    buildTree(inOrderList, postOrderList) {
        if (inOrderList.length === 0) {
            return null;
        }

        const rootData = postOrderList[postOrderList.length - 1];
        const index = inOrderList.findIndex(item => item === rootData);

        const root = new Node(rootData);

        root.left = this.buildTree(
            inOrderList.slice(0, index),
            postOrderList.slice(0, index)
        );

        root.right = this.buildTree(
            inOrderList.slice(index + 1),
            postOrderList.slice(index, postOrderList.length - 1)
        );

        return root;
    }

    preOrderTraverse() {
        return preOrderTraverse(this.root);
    }

    middleOrderTraverse() {
        return middleOrderTraverse(this.root);
    }

    postOrderTraverse() {
        return postOrderTraverse(this.root);
    }
}

module.exports = {
    Node,
    BinaryTree,
    preOrderTraverse,
    middleOrderTraverse,
    postOrderTraverse
};
