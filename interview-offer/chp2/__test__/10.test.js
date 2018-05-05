import test from "ava";
import countOne from "../10-count-one";

test("count one", t => {
    t.is(countOne(0), 0);
    t.is(countOne(9), 2);
    t.is(countOne(-1), 32);
});
