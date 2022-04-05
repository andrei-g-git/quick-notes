import React from "react";
import { render, cleanup } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { makeStore } from "../../src/redux/makeStore";
import Editor from "../../src/components/editor/Editor";

afterEach(cleanup);

describe("<Editor />", () => {
    it("adds item at correct array position", () => {
        // const { getTestById } = render(       ---- this actually won't need to alter the notes list, just callback with the note content and index ... maybe not even the index
        //     <Editor store={makeStore()} />
        // );
        
    });
});