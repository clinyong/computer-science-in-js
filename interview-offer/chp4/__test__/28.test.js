import test from "ava";
import { permutation } from "../28-string-permutation";

test("Permutation of an input string", t => {
    const result = permutation("abc");
    t.deepEqual(result, ["abc", "acb", "bac", "bca", "cba", "cab"]);
});
