import { saveNoteToFile } from "../../src/components/main/saveNoteTofile";

const dummyNotes = [
    {content: "whatever", index: 123},
    {content: "more nothing", index: 456},
    {content: "ok that's probably enough", index: 789}
];
const newContent = "replace one of the notes with another with this content";
const relativePath = "/balls.sack";

it("builds the right JSON content for writing", () => {
    const json = saveNoteToFile( //so this has require("react-native-fs") which fails, apparently because the file it imports is typescript and nodejs needs javascript ... works fine at runtime though...
        newContent,
        dummyNotes,
        1,
        relativePath
    );
    //expect(json).toBe("this isn't even json it should fail");
});