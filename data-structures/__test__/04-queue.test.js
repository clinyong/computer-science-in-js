import test from "ava";
import Queue from "../04-queue";

test("traverse", t => {
    const list = [1, 2, 3];
    const queue = new Queue();

    list.forEach(item => queue.enqueue(item));

    t.deepEqual([...queue], list);
});
