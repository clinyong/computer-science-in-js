import test from "ava";
import inc from "../12-inc-string-num";

test("inc string num", t => {
    t.is(inc("99", 2).overflow, true);
    t.is(inc("999", 2).overflow, true);

    t.is(inc("1", 2).result, "2");
    t.is(inc("19", 2).result, "20");
});
