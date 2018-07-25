import test from "ava";
import {
    duplicateLinkList,
    splitDupLinkList
} from "../26-complex-link-list-clone";
import SinglyLinkedList from "../../../data-structures/01-singly-linked-list";

test("Test duplicate and split link list", t => {
    const linkList = new SinglyLinkedList();
    const list = [1, 2, 3];
    list.forEach(item => {
        linkList.addAtTail(item);
    });

    duplicateLinkList(linkList.head);

    t.deepEqual([...linkList], [1, 1, 2, 2, 3, 3]);

    const newHead = splitDupLinkList(linkList.head);
    const newLinkList = new SinglyLinkedList(newHead);

    t.deepEqual([...linkList], list);
    t.deepEqual([...newLinkList], list);
});
