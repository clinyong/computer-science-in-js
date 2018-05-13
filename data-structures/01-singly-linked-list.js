function Node(data) {
    this.data = data;
    this.next = null;
}

module.exports = class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addAtHead(data) {
        const node = new Node(data);

        if (this.head) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
        }

        return node;
    }

    addAtTail(data) {
        const node = new Node(data);

        if (this.head) {
            let tailNode = this.head;

            while (tailNode.next !== null) {
                tailNode = tailNode.next;
            }

            tailNode.next = node;
        } else {
            this.head = node;
        }

        return node;
    }

    removeAtHead() {
        if (this.head) {
            const data = this.head.data;
            this.head = this.head.next;

            return data;
        } else {
            return null;
        }
    }

    removeAtTail() {
        if (this.head) {
            let tailNode = this.head;
            let data;
            if (tailNode.next == null) {
                data = tailNode.data;
                tailNode = null;
            } else {
                while (tailNode.next.next !== null) {
                    tailNode = tailNode.next;
                }
                data = tailNode.next.data;
                tailNode.next = null;
            }

            return data;
        } else {
            return null;
        }
    }

    *[Symbol.iterator]() {
        let head = this.head;
        while (head !== null) {
            yield head.data;
            head = head.next;
        }
    }
};
