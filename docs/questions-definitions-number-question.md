# Number Question Schema

```txt
questions#/properties/questions/items/oneOf/0
```

A question where you hav to guess a number (could be a year or e.G. number of polar bears alive)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [questions.schema.json*](../out/questions.schema.json "open original schema") |

## 0 Type

`object` ([Number Question](questions-definitions-number-question.md))

# 0 Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)         | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-number-question-properties-type.md "questions#/definitions/numberQuestion/properties/type")         |
| [question](#question) | `string` | Required | cannot be null | [Schema for Questions](questions-definitions-number-question-properties-question.md "questions#/definitions/numberQuestion/properties/question") |
| [solution](#solution) | `number` | Required | cannot be null | [Schema for Questions](questions-definitions-number-question-properties-solution.md "questions#/definitions/numberQuestion/properties/solution") |

## type

The questions type

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-number-question-properties-type.md "questions#/definitions/numberQuestion/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"number"` |             |

## question

The questions question

`question`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-number-question-properties-question.md "questions#/definitions/numberQuestion/properties/question")

### question Type

`string`

## solution

The questions right solution

`solution`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Schema for Questions](questions-definitions-number-question-properties-solution.md "questions#/definitions/numberQuestion/properties/solution")

### solution Type

`number`
