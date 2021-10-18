const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }


  add(data) {
    this.root = addWithin(this.root, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.root, data);
    function searchWithin(node, data){
      if(!node){
        return false
      }
      if(node.data ===data){
        return true
      }
      return data< node.data? searchWithin(node.left,data):searchWithin(node.right, data)
    }
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return null;
  }

  
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      let minNode = node.right;
      while (minNode.left) {
        minNode = minNode.left;
      }
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data);
      return node;
    }
  }

  min() {
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
};
