const {execSync} = require('child_process');

execSync('npm run clean:testDist')
execSync('npm run build:test');


// import questions from "./test/bundle.js"
const questions = require("./testDist/bundle.js");
// import {matchers, matchersWithOptions} from "jest-json-schema"
const matchers = require("jest-json-schema").matchers;
// import {expect} from '@jest/globals'
const expect = require("@jest/globals").expect;
// import schema from "./schema/questions.schema.json"
const schema = require("./schema/questions.schema.json")

expect.extend(matchers);

const questionSets = Object.keys(questions);
describe("Passen die Fragen zum Schema", () => {
    for (const questionSet of questionSets) {
        it("Testing \"" + questionSet + "\"", () => {
            expect(questions[questionSet]).toMatchSchema(schema);
        });
    }
});


