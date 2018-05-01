import test from "ava";
import { Queue, Stack } from "../07-queue-stack";

test("test queue", t => {
    const q = new Queue();

    t.is(q.deleteHead(), undefined);

    q.appendTail(1);
    q.appendTail(2);
    q.appendTail(3);

    t.is(q.deleteHead(), 1);
    t.is(q.deleteHead(), 2);

    q.appendTail(4);

    t.is(q.deleteHead(), 3);
    t.is(q.deleteHead(), 4);
    t.is(q.deleteHead(), undefined);
});

test("test stack", t => {
    const s = new Stack();

    t.is(s.deleteHead(), undefined);

    s.appendTail(1);
    s.appendTail(2);
    s.appendTail(3);

    t.is(s.deleteHead(), 3);
    t.is(s.deleteHead(), 2);

    s.appendTail(4);

    t.is(s.deleteHead(), 4);
    t.is(s.deleteHead(), 1);
    t.is(s.deleteHead(), undefined);
});
