import test from "ava";
import delNode from "../13-del-link-list-node";
import SinglyLinkedList from "../../../data-structures/01-singly-linked-list";

test("delete link list node - invalid input", t => {
    const linkList = new SinglyLinkedList();

    t.is(delNode(linkList.head, null).length, 0);
    t.is(delNode(null, linkList.head).length, 0);
    t.is(delNode(null, null).length, 0);
});

test("delete link list node - one node", t => {
    const linkList = new SinglyLinkedList();
    const node = linkList.addAtHead(1);

    t.is(delNode(linkList.head, node).length, 0);
});

test("delete link list node - not at tail", t => {
    let linkList = new SinglyLinkedList();
    linkList.addAtTail(1);
    let node = linkList.addAtTail(2);
    linkList.addAtTail(3);
    linkList.addAtTail(4);

    t.deepEqual(delNode(linkList.head, node), [1, 3, 4]);

    linkList = new SinglyLinkedList();
    linkList.addAtTail(1);
    node = linkList.addAtTail(2);
    linkList.addAtTail(3);
    t.deepEqual(delNode(linkList.head, node), [1, 3]);
});

test("delete link list node - at tail", t => {
    let linkList = new SinglyLinkedList();
    linkList.addAtTail(1);
    linkList.addAtTail(2);
    linkList.addAtTail(3);
    let node = linkList.addAtTail(4);

    t.deepEqual(delNode(linkList.head, node), [1, 2, 3]);
});
