const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor(){
    this.front = null;
   
  }

  getUnderlyingList() {
   return this.front
  }
  isEmpty(){
    return !this.front
  }

  enqueue( value) {
   
    if (this.isEmpty()) {
      this.front = new ListNode(value)
      return;
    }else{
      let node = this.front;
      while(node.next)node = node.next;
      node.next = new ListNode(value)
    }
   
  }

  dequeue() {
    
    if(this.isEmpty()){
      return undefined
    }
   let value = this.front.value;
   this.front = this.front.next;
   return value
  }

}
