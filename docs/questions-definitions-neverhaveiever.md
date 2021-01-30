# Untitled object in \[object Object] Schema

```txt
questions#/properties/questions/items/oneOf/4
```

Never Have I Ever Question

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [questions.schema.json*](../out/questions.schema.json "open original schema") |

## 4 Type

`object` ([Details](questions-definitions-neverhaveiever.md))

# 4 Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                 |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)         | `string` | Required | cannot be null | [Untitled schema](questions-definitions-neverhaveiever-properties-type.md "questions#/definitions/neverHaveIever/properties/type")         |
| [question](#question) | `string` | Required | cannot be null | [Untitled schema](questions-definitions-neverhaveiever-properties-question.md "questions#/definitions/neverHaveIever/properties/question") |
| [sips](#sips)         | `number` | Optional | cannot be null | [Untitled schema](questions-definitions-neverhaveiever-properties-sips.md "questions#/definitions/neverHaveIever/properties/sips")         |

## type

The questions type

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](questions-definitions-neverhaveiever-properties-type.md "questions#/definitions/neverHaveIever/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"neverHaveIever"` |             |

## question

The questions question

`question`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](questions-definitions-neverhaveiever-properties-question.md "questions#/definitions/neverHaveIever/properties/question")

### question Type

`string`

## sips

how many sips the people, who picked to wrong answer have to drink

`sips`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Untitled schema](questions-definitions-neverhaveiever-properties-sips.md "questions#/definitions/neverHaveIever/properties/sips")

### sips Type

`number`

### sips Default Value

The default value is:

```json
3
```
