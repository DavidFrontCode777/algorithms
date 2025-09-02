class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }

    addToTheEnd(value) {
      const node = new Node(value);
      if (this.length === 0) {
        this.head = node;
      } else {
        let current = this.head;

        while (current.next) {
          current = current.next;
        }

        current.next = node;
      }
      this.length++;
    }

    insertInPosition(position, value) {
      if (position < 0 || position > this.length) {
        return "error";
      }
      const node = new Node(value);

      if (position === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let current = this.head;
        let prev = null;
        let index = 0;
        while (index < position) {
          prev = current;
          current = current.next;
          index++;
        }
        prev.next = node;
        node.next = current;
      }
      this.length++;
    }

    getNodeByPosition(position) {
      if (position < 0 || position > this.length) {
        return "error";
      }

      let current = this.head;
      let index = 0;
      while (index < position) {
        current = current.next;
        index++;
      }
      return current;
    }

    removeFromPosition(position) {
      if (position < 0 || position > this.length) {
        return "error";
      }

      let current = this.head;

      if (position === 0) {
        this.head = current.next;
      } else {
        let prev = null;
        let index = 0;

        while (index < position) {
          prev = current;
          current = current.next;
          index++;
        }
      }
      prev.next = current.next;
      this.length--;

      return current.value;
    }
  }

  const linkedList = new LinkedList();
  linkedList.addToTheEnd(1);
  linkedList.addToTheEnd(2);
  linkedList.addToTheEnd(3);
  linkedList.addToTheEnd(4);
  linkedList.addToTheEnd(5);
  linkedList.addToTheEnd(6);
  console.log("asdf 1", linkedList.getNodeByPosition(5));
  linkedList.insertInPosition(5, 7);
  console.log("asdf 1", linkedList.getNodeByPosition(5));