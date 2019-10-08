import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

// group in describe...why?? no beforeEach...eventually... we might have bunch of tests... oh just nice foresight
describe("saveComment", () => {
  it("has the correct type", () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const action = saveComment("New Comment");

    expect(action.payload).toEqual("New Comment");
  });
});
