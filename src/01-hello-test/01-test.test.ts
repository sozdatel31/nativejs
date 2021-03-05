import {sum} from "./01-test";

test("sum should be correct", ()=> {
    let a = 1
    let b = 2
    let c = 3

    let result = sum(a, b);
    let result2 = sum(c,a)

    expect(result).toBe(3);
    expect(result2).toBe(4)
})