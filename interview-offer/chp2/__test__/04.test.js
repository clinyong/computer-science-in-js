import test from "ava";
import replaceBlank from "../04";

const input = "We are happy";
test("replace blank", t => {
    const output = replaceBlank(input.split(""));

    t.is(input.replace(/\s/g, "%20"), output.join(""));
});

test("new list length", t => {
    const output = replaceBlank(input.split(""));

    t.is(output.length, input.length + 4);
});
