import questions from "./index.js"
import {matchers, matchersWithOptions} from "jest-json-schema"
import {expect} from '@jest/globals'
import schema from "./schema/questions.schema.json"

expect.extend(matchers);

const questionSets = Object.keys(questions);
describe("Passen die Fragen zum Schema", () => {
    for (const questionSet of questionSets) {
        it("Testing \"" + questionSet+"\"", () => {
            expect(questions[questionSet]).toMatchSchema(schema);
        });
    }
});

