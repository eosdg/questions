# Schema for Questions Schema

```txt
questions
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Allowed               | none                | [questions.schema.json](../out/questions.schema.json "open original schema") |

## Schema for Questions Type

`object` ([Schema for Questions](questions.md))

# Schema for Questions Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                      |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------- |
| [title](#title)             | `string` | Required | cannot be null | [Schema for Questions](questions-properties-title.md "questions#/properties/title")             |
| [description](#description) | `string` | Required | cannot be null | [Schema for Questions](questions-properties-description.md "questions#/properties/description") |
| [questions](#questions)     | `array`  | Required | cannot be null | [Schema for Questions](questions-properties-questions.md "questions#/properties/questions")     |

## title

Title of the questionset

`title`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-properties-title.md "questions#/properties/title")

### title Type

`string`

## description

A description for the questionset

`description`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-properties-description.md "questions#/properties/description")

### description Type

`string`

## questions

The questionset's questions

`questions`

*   is required

*   Type: an array of merged types ([Details](questions-properties-questions-items.md))

*   cannot be null

*   defined in: [Schema for Questions](questions-properties-questions.md "questions#/properties/questions")

### questions Type

an array of merged types ([Details](questions-properties-questions-items.md))

# Schema for Questions Definitions

## Definitions group numberQuestion

Reference this group by using

```json
{"$ref":"questions#/definitions/numberQuestion"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)         | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-number-question-properties-type.md "questions#/definitions/numberQuestion/properties/type")         |
| [question](#question) | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-number-question-properties-question.md "questions#/definitions/numberQuestion/properties/question") |
| [solution](#solution) | `number` | Required | cannot be null | [Schema for Questions](questions-definitions-number-question-properties-solution.md "questions#/definitions/numberQuestion/properties/solution") |

### type

The questions type

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-number-question-properties-type.md "questions#/definitions/numberQuestion/properties/type")

#### type Type

`string`

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"number"` |             |

### question

The questions question

`question`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-number-question-properties-question.md "questions#/definitions/numberQuestion/properties/question")

#### question Type

`string`

### solution

The questions right solution

`solution`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-number-question-properties-solution.md "questions#/definitions/numberQuestion/properties/solution")

#### solution Type

`number`

## Definitions group votingQuestion

Reference this group by using

```json
{"$ref":"questions#/definitions/votingQuestion"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                              |
| :---------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type-1)         | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-voting-properties-type.md "questions#/definitions/votingQuestion/properties/type")         |
| [question](#question-1) | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-voting-properties-question.md "questions#/definitions/votingQuestion/properties/question") |
| [sips](#sips)           | `number` | Optional | cannot be null | [Schema for Questions](questions-definitions-voting-properties-sips.md "questions#/definitions/votingQuestion/properties/sips")         |

### type

The questions type

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-voting-properties-type.md "questions#/definitions/votingQuestion/properties/type")

#### type Type

`string`

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"voting"` |             |

### question

The questions question

`question`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-voting-properties-question.md "questions#/definitions/votingQuestion/properties/question")

#### question Type

`string`

### sips

how many sips the elected game member has to drink

`sips`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-voting-properties-sips.md "questions#/definitions/votingQuestion/properties/sips")

#### sips Type

`number`

#### sips Default Value

The default value is:

```json
3
```

## Definitions group multipleChoiceQuestion

Reference this group by using

```json
{"$ref":"questions#/definitions/multipleChoiceQuestion"}
```

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                                             |
| :---------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type-2)                     | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-multible-choice-properties-type.md "questions#/definitions/multipleChoiceQuestion/properties/type")                       |
| [question](#question-2)             | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-multible-choice-properties-question.md "questions#/definitions/multipleChoiceQuestion/properties/question")               |
| [solutions](#solutions)             | `array`  | Required | cannot be null | [Schema for Questions](questions-definitions-multible-choice-properties-solutions.md "questions#/definitions/multipleChoiceQuestion/properties/solutions")             |
| [correctSolution](#correctsolution) | `number` | Required | cannot be null | [Schema for Questions](questions-definitions-multible-choice-properties-correctsolution.md "questions#/definitions/multipleChoiceQuestion/properties/correctSolution") |
| [sips](#sips-1)                     | `number` | Optional | cannot be null | [Schema for Questions](questions-definitions-multible-choice-properties-sips.md "questions#/definitions/multipleChoiceQuestion/properties/sips")                       |

### type

The questions type

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-multible-choice-properties-type.md "questions#/definitions/multipleChoiceQuestion/properties/type")

#### type Type

`string`

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"multibleChoice"` |             |

### question

The questions question

`question`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-multible-choice-properties-question.md "questions#/definitions/multipleChoiceQuestion/properties/question")

#### question Type

`string`

### solutions

An array containing the possible Solutions

`solutions`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-multible-choice-properties-solutions.md "questions#/definitions/multipleChoiceQuestion/properties/solutions")

#### solutions Type

`string[]`

#### solutions Constraints

**maximum number of items**: the maximum number of items for this array is: `10`

**minimum number of items**: the minimum number of items for this array is: `2`

### correctSolution

The index of the correct solution. (Indexing starts with 0

`correctSolution`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-multible-choice-properties-correctsolution.md "questions#/definitions/multipleChoiceQuestion/properties/correctSolution")

#### correctSolution Type

`number`

#### correctSolution Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**minimum**: the value of this number must greater than or equal to: `0`

### sips

how many sips the people, who picked to wrong answer have to drink

`sips`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-multible-choice-properties-sips.md "questions#/definitions/multipleChoiceQuestion/properties/sips")

#### sips Type

`number`

#### sips Default Value

The default value is:

```json
3
```

## Definitions group majorityQuestion

Reference this group by using

```json
{"$ref":"questions#/definitions/majorityQuestion"}
```

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                         |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type-3)           | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-majority-vote-properties-type.md "questions#/definitions/majorityQuestion/properties/type")           |
| [question](#question-3)   | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-majority-vote-properties-question.md "questions#/definitions/majorityQuestion/properties/question")   |
| [solutions](#solutions-1) | `array`  | Required | cannot be null | [Schema for Questions](questions-definitions-majority-vote-properties-solutions.md "questions#/definitions/majorityQuestion/properties/solutions") |
| [sips](#sips-2)           | `number` | Optional | cannot be null | [Schema for Questions](questions-definitions-majority-vote-properties-sips.md "questions#/definitions/majorityQuestion/properties/sips")           |

### type

The questions type

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-majority-vote-properties-type.md "questions#/definitions/majorityQuestion/properties/type")

#### type Type

`string`

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"majority"` |             |

### question

The questions question

`question`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-majority-vote-properties-question.md "questions#/definitions/majorityQuestion/properties/question")

#### question Type

`string`

### solutions

An array containing the possible Solutions

`solutions`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-majority-vote-properties-solutions.md "questions#/definitions/majorityQuestion/properties/solutions")

#### solutions Type

`string[]`

#### solutions Constraints

**maximum number of items**: the maximum number of items for this array is: `10`

**minimum number of items**: the minimum number of items for this array is: `2`

### sips

how many sips the minority's members have to drink

`sips`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-majority-vote-properties-sips.md "questions#/definitions/majorityQuestion/properties/sips")

#### sips Type

`number`

#### sips Default Value

The default value is:

```json
3
```

## Definitions group neverHaveIever

Reference this group by using

```json
{"$ref":"questions#/definitions/neverHaveIever"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                         |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type-4)         | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-never-have-i-ever-properties-type.md "questions#/definitions/neverHaveIever/properties/type")         |
| [question](#question-4) | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-never-have-i-ever-properties-question.md "questions#/definitions/neverHaveIever/properties/question") |
| [sips](#sips-3)         | `number` | Optional | cannot be null | [Schema for Questions](questions-definitions-never-have-i-ever-properties-sips.md "questions#/definitions/neverHaveIever/properties/sips")         |

### type

The questions type

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-never-have-i-ever-properties-type.md "questions#/definitions/neverHaveIever/properties/type")

#### type Type

`string`

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"neverHaveIever"` |             |

### question

The questions question

`question`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-never-have-i-ever-properties-question.md "questions#/definitions/neverHaveIever/properties/question")

#### question Type

`string`

### sips

how many sips the people, who picked to wrong answer have to drink

`sips`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-never-have-i-ever-properties-sips.md "questions#/definitions/neverHaveIever/properties/sips")

#### sips Type

`number`

#### sips Default Value

The default value is:

```json
3
```
