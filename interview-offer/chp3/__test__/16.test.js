import test from "ava";
import reverseLinkList from "../16-reverse-link-list";
import SinglyLinkedList from "../../../data-structures/01-singly-linked-list";

test("reverse link list", t => {
    const linkList = new SinglyLinkedList();

    linkList.addAtTail(1);
    linkList.addAtTail(2);
    linkList.addAtTail(3);
    linkList.addAtTail(4);
    linkList.addAtTail(5);

    const newLinkList = new SinglyLinkedList(reverseLinkList(linkList.head));
    t.deepEqual([...newLinkList], [5, 4, 3, 2, 1]);
});

test("reverse link list - single item", t => {
    const linkList = new SinglyLinkedList();

    linkList.addAtTail(1);

    const newLinkList = new SinglyLinkedList(reverseLinkList(linkList.head));
    t.deepEqual([...newLinkList], [1]);
});

test("reverse link list - null head", t => {
    t.is(reverseLinkList(null), null);
});
