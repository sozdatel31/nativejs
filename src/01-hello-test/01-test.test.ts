import {mult, splitIntoWords, sum} from "./01-test";
let a: number
let b: number
let c: number

beforeEach(()=> {
    a = 1;
    b = 2;
    c = 3;
})
test("sum should be correct", () => {


    let result = sum(a, b);
    let result2 = sum(c, a)

    expect(result).toBe(3);
    expect(result2).toBe(4)
})


test("multiplay should be correct", () => {


    let result = mult(a, b);
    let result2 = mult(b, c)

    expect(result).toBe(2);
    expect(result2).toBe(6)
})

test("splitting into words should be correct", () => {
    const sent1 = "Hello my friend"
    const sent2 = "JS - my friend!"

    const result = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result.length).toBe(3);
    expect(result[0]).toBe("hello");
    expect(result[1]).toBe("my");
    expect(result[2]).toBe("friend");


        expect(result2.length).toBe(4);
        expect(result2[0]).toBe("js");
        expect(result2[1]).toBe("-");
        expect(result2[2]).toBe("my");
        expect(result2[3]).toBe("friend");
}
)