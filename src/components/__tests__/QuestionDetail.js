import React from "react";
import renderer from "react-test-renderer";
import { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";

describe("The Question Detail Component", () => {
  describe("The Container Element", () => {
    describe("mapStateToProps", () => {
      it("should map the state to props correctly", () => {
        const sampleQuestion = {
          question_id: 42,
          body: "Some body"
        };
        const appState = {
          questions: [sampleQuestion]
        };
        const ownProps = {
          question_id: 42
        };
        const componentState = mapStateToProps(appState, ownProps);

        expect(componentState).toEqual(sampleQuestion);
      });
    });
  });
  describe("The display element", () => {
    it("should not regress", () => {
      const tree = renderer.create(
        <QuestionDetailDisplay
          title="Some title"
          body="Some body"
          answer_count={2}
          tags={["hitchhiking", "exercising"]}
        />
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
