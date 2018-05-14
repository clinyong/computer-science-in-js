import test from "ava";
import mergeIncLinkList from "../17-merge-inc-link-list";
import SinglyLinkedList from "../../../data-structures/01-singly-linked-list";

/**
 * @param {number[]} list
 */
function createLinkList(list) {
    const linkList = new SinglyLinkedList();
    list.forEach(i => linkList.addAtTail(i));
    return linkList.head;
}

function convertToNormalList(head) {
    const linkList = new SinglyLinkedList(head);
    return [...linkList];
}

test("merge two inc link list", t => {
    const h1 = mergeIncLinkList(
        createLinkList([1, 3, 5]),
        createLinkList([2, 4, 6])
    );
    t.deepEqual(convertToNormalList(h1), [1, 2, 3, 4, 5, 6]);

    const h2 = mergeIncLinkList(createLinkList([1, 3, 5]), createLinkList([2]));
    t.deepEqual(convertToNormalList(h2), [1, 2, 3, 5]);

    const h3 = mergeIncLinkList(createLinkList([1]), createLinkList([2, 5]));
    t.deepEqual(convertToNormalList(h3), [1, 2, 5]);

    const h4 = mergeIncLinkList(
        createLinkList([1, 5]),
        createLinkList([2, 3, 4])
    );
    t.deepEqual(convertToNormalList(h4), [1, 2, 3, 4, 5]);

    const h5 = mergeIncLinkList(null, createLinkList([2, 3, 4]));
    t.deepEqual(convertToNormalList(h5), [2, 3, 4]);

    const h6 = mergeIncLinkList(createLinkList([2, 3, 4]), null);
    t.deepEqual(convertToNormalList(h6), [2, 3, 4]);

    const h7 = mergeIncLinkList(createLinkList([1, 2]), createLinkList([2]));
    t.deepEqual(convertToNormalList(h7), [1, 2, 2]);

    const h8 = mergeIncLinkList(createLinkList([1]), createLinkList([2]));
    t.deepEqual(convertToNormalList(h8), [1, 2]);
});
