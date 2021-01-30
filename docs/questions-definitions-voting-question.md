# Voting Question Schema

```txt
questions#/properties/questions/items/oneOf/1
```

A question where one of the members is voted

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [questions.schema.json*](../out/questions.schema.json "open original schema") |

## 1 Type

`object` ([Voting Question](questions-definitions-voting-question.md))

# 1 Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                  |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| [type](#type)         | `string` | Required | cannot be null | [Untitled schema](questions-definitions-voting-question-properties-type.md "questions#/definitions/votingQuestion/properties/type")         |
| [question](#question) | `string` | Required | cannot be null | [Untitled schema](questions-definitions-voting-question-properties-question.md "questions#/definitions/votingQuestion/properties/question") |
| [sips](#sips)         | `number` | Optional | cannot be null | [Untitled schema](questions-definitions-voting-question-properties-sips.md "questions#/definitions/votingQuestion/properties/sips")         |

## type

The questions type

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](questions-definitions-voting-question-properties-type.md "questions#/definitions/votingQuestion/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"voting"` |             |

## question

The questions question

`question`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](questions-definitions-voting-question-properties-question.md "questions#/definitions/votingQuestion/properties/question")

### question Type

`string`

## sips

how many sips the elected game member has to drink

`sips`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Untitled schema](questions-definitions-voting-question-properties-sips.md "questions#/definitions/votingQuestion/properties/sips")

### sips Type

`number`

### sips Default Value

The default value is:

```json
3
```
