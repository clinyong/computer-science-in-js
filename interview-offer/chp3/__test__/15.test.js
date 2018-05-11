import test from "ava";
import findNode from "../15-find-link-list-node";
import SinglyLinkedList from "../../../data-structures/01-singly-linked-list";

test("find link list node", t => {
    const linkList = new SinglyLinkedList();

    linkList.addAtTail(1);
    linkList.addAtTail(2);
    linkList.addAtTail(3);
    linkList.addAtTail(4);
    linkList.addAtTail(5);

    t.is(findNode(linkList.head, 1).data, 5);
    t.is(findNode(linkList.head, 2).data, 4);
    t.is(findNode(linkList.head, 3).data, 3);
    t.is(findNode(linkList.head, 4).data, 2);
});

test("find link list node - k is bigger than length", t => {
    const linkList = new SinglyLinkedList();

    linkList.addAtTail(1);
    linkList.addAtTail(2);

    t.is(findNode(linkList.head, 3), null);
});
