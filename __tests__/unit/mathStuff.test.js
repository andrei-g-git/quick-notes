import { getRandomNumberUpTo } from "../../src/utils/mathStuff";

it("picks integer between 0 and passed number", () => {
    const result = getRandomNumberUpTo(19);
    const isInteger = Number.isInteger(result);
    expect(isInteger).toBeTruthy();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(19);
});