import test from "ava";
import SinglyLinkedList from "../01-singly-linked-list";

test("addAtHead", t => {
    const linkList = new SinglyLinkedList();
    const testList = [1, 2, 3];
    testList.forEach(item => {
        linkList.addAtHead(item);
    });

    t.deepEqual([...linkList], testList.reverse());
});

test("addAtTail", t => {
    const linkList = new SinglyLinkedList();
    const testList = [1, 2, 3];
    testList.forEach(item => {
        linkList.addAtTail(item);
    });

    t.deepEqual([...linkList], testList);
});

test("removeAtTail after addAtHead", t => {
    const linkList = new SinglyLinkedList();
    const testList = [1, 2, 3];
    testList.forEach(item => {
        linkList.addAtHead(item);
    });
    linkList.removeAtTail();

    t.deepEqual(
        [...linkList],
        testList.reverse().slice(0, testList.length - 1)
    );
});

test("removeAtHead after addAtTail", t => {
    const linkList = new SinglyLinkedList();
    const testList = [1, 2, 3];
    testList.forEach(item => {
        linkList.addAtTail(item);
    });
    linkList.removeAtHead();

    t.deepEqual([...linkList], testList.slice(1));
});

test("remove at empty link list", t => {
    const linkList = new SinglyLinkedList();

    const val1 = linkList.removeAtHead();
    const val2 = linkList.removeAtTail();
    const newList = [...linkList];

    t.is(val1, val2);
    t.is(newList.length, 0);
});
