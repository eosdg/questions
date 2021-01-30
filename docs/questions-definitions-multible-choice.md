# Multible Choice Schema

```txt
questions#/properties/questions/items/oneOf/2
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [questions.schema.json*](../out/questions.schema.json "open original schema") |

## 2 Type

`object` ([Multible Choice](questions-definitions-multible-choice.md))

## 2 Examples

```json
{
  "type": "multibleChoice",
  "question": "Which movie won the oscar for best motion picture in 2020?",
  "correctSolution": 1,
  "solutions": [
    "Joker",
    "Parasite",
    "Once upon a time in Hollywood",
    "1917"
  ]
}
```

# 2 Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                                             |
| :---------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)                       | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-multible-choice-properties-type.md "questions#/definitions/multipleChoiceQuestion/properties/type")                       |
| [question](#question)               | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-multible-choice-properties-question.md "questions#/definitions/multipleChoiceQuestion/properties/question")               |
| [solutions](#solutions)             | `array`  | Required | cannot be null | [Schema for Questions](questions-definitions-multible-choice-properties-solutions.md "questions#/definitions/multipleChoiceQuestion/properties/solutions")             |
| [correctSolution](#correctsolution) | `number` | Required | cannot be null | [Schema for Questions](questions-definitions-multible-choice-properties-correctsolution.md "questions#/definitions/multipleChoiceQuestion/properties/correctSolution") |
| [sips](#sips)                       | `number` | Optional | cannot be null | [Schema for Questions](questions-definitions-multible-choice-properties-sips.md "questions#/definitions/multipleChoiceQuestion/properties/sips")                       |

## type

The questions type

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-multible-choice-properties-type.md "questions#/definitions/multipleChoiceQuestion/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"multibleChoice"` |             |

## question

The questions question

`question`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-multible-choice-properties-question.md "questions#/definitions/multipleChoiceQuestion/properties/question")

### question Type

`string`

## solutions

An array containing the possible Solutions

`solutions`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-multible-choice-properties-solutions.md "questions#/definitions/multipleChoiceQuestion/properties/solutions")

### solutions Type

`string[]`

### solutions Constraints

**maximum number of items**: the maximum number of items for this array is: `10`

**minimum number of items**: the minimum number of items for this array is: `2`

## correctSolution

The index of the correct solution. (Indexing starts with 0

`correctSolution`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-multible-choice-properties-correctsolution.md "questions#/definitions/multipleChoiceQuestion/properties/correctSolution")

### correctSolution Type

`number`

### correctSolution Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**minimum**: the value of this number must greater than or equal to: `0`

## sips

how many sips the people, who picked to wrong answer have to drink

`sips`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-multible-choice-properties-sips.md "questions#/definitions/multipleChoiceQuestion/properties/sips")

### sips Type

`number`

### sips Default Value

The default value is:

```json
3
```
