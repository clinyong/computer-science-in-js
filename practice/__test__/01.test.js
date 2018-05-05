import test from "ava";
import { decimalToHex, hexToDecimal } from "../01-number-conversion";

test("decimal to hex", t => {
    t.is(decimalToHex(314156), "0x4CB2C");
    t.is(hexToDecimal("0x7af"), "1967");
});
