# Majority vote Schema

```txt
questions#/properties/questions/items/oneOf/3
```

Let them vote on a topic. The people in the minority will be wrong and have to drink.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [questions.schema.json*](../out/questions.schema.json "open original schema") |

## 3 Type

`object` ([Majority vote](questions-definitions-majority-vote.md))

## 3 Examples

```json
{
  "type": "majority",
  "question": "Whats more important?",
  "solutions": [
    "Body",
    "Character"
  ]
}
```

# 3 Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                         |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)           | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-majority-vote-properties-type.md "questions#/definitions/majorityQuestion/properties/type")           |
| [question](#question)   | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-majority-vote-properties-question.md "questions#/definitions/majorityQuestion/properties/question")   |
| [solutions](#solutions) | `array`  | Required | cannot be null | [Schema for Questions](questions-definitions-majority-vote-properties-solutions.md "questions#/definitions/majorityQuestion/properties/solutions") |
| [sips](#sips)           | `number` | Optional | cannot be null | [Schema for Questions](questions-definitions-majority-vote-properties-sips.md "questions#/definitions/majorityQuestion/properties/sips")           |

## type

The questions type

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-majority-vote-properties-type.md "questions#/definitions/majorityQuestion/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"majority"` |             |

## question

The questions question

`question`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-majority-vote-properties-question.md "questions#/definitions/majorityQuestion/properties/question")

### question Type

`string`

## solutions

An array containing the possible Solutions

`solutions`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-majority-vote-properties-solutions.md "questions#/definitions/majorityQuestion/properties/solutions")

### solutions Type

`string[]`

### solutions Constraints

**maximum number of items**: the maximum number of items for this array is: `10`

**minimum number of items**: the minimum number of items for this array is: `2`

## sips

how many sips the minority's members have to drink

`sips`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-majority-vote-properties-sips.md "questions#/definitions/majorityQuestion/properties/sips")

### sips Type

`number`

### sips Default Value

The default value is:

```json
3
```
