function Node(data) {
    this.data = data;
    this.next = null;
    this.pre = null;
}

module.exports = class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    addAtHead(data) {
        const node = new Node(data);

        if (this.head) {
            node.next = this.head;
            this.head.pre = node;
            this.head = node;
        } else {
            this.head = node;
        }
    }

    addAtTail(data) {
        const node = new Node(data);

        if (this.head) {
            let tailNode = this.head;

            while (tailNode.next !== null) {
                tailNode = tailNode.next;
            }

            tailNode.next = node;
            node.pre = tailNode;
        } else {
            this.head = node;
        }
    }

    removeAtHead() {
        if (this.head) {
            const data = this.head.data;
            this.head = this.head.next;
            this.head.pre = null;

            return data;
        } else {
            return null;
        }
    }

    removeAtTail() {
        if (this.head) {
            let tailNode = this.head;
            let data;
            while (tailNode.next !== null) {
                tailNode = tailNode.next;
            }

            data = tailNode.data;
            tailNode.pre.next = null;

            return data;
        } else {
            return null;
        }
    }

    reverse() {
        let node = this.head;

        return {
            *[Symbol.iterator]() {
                while (node.next !== null) {
                    node = node.next;
                }

                while (node !== null) {
                    yield node.data;
                    node = node.pre;
                }
            }
        };
    }

    *[Symbol.iterator]() {
        let head = this.head;
        while (head !== null) {
            yield head.data;
            head = head.next;
        }
    }
};
