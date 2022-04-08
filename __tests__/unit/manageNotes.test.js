import {
    deleteNote,
    addNote
} from "../../src/utils/manageNotes";

const dummyNotes = [
    {a: "aaaaaaa", b: 1111},
    {a: "bbbbbbb", b: 2222},
    {a: "ccccccc", b: 3333},
    {a: "ddddddd", b: 4444}
]

// afterEach(() => {

// });

describe("deleteNote", () => {
    it("deletes the correct note", () => {
        const trimmedNotes = deleteNote(dummyNotes, 1);
        expect(trimmedNotes).toHaveLength(3);
        expect(trimmedNotes[1].a).toBe("ccccccc")
    });
});

describe("addNote", () => {
    it("adds the correct note", () => {
        const newText = "this text has been added";
        const expandedNotes = addNote(newText, dummyNotes, 4);
        expect(expandedNotes).toHaveLength(5);
        expect(expandedNotes[4].content).toBe("this text has been added");
        expect(expandedNotes[4].id).toBeGreaterThan(999);
    });

    it("adds a valid random color", () => {
        const notes = addNote("blah", dummyNotes, 4);
        const color = notes[4].color;
        expect(typeof color).toBe("string");
        const hasColorSubstring = color.includes(
            "blue" ||
            "orange" ||
            "purple" ||
            "green" ||
            "pink" ||
            "red" ||
            "yellow"
        );
        console.log(color)
        expect(hasColorSubstring).toBeTruthy();
    });
});
