---
title: Using Document Transformations
slug: jsonata
---

# Overview

The LAMP Platform supports Document Transformations using the JSONata query language developed by IBM. [The following documentation is extracted from the JSONata documentation website.](https://docs.jsonata.org/)

## Introduction

JSONata is a lightweight query and transformation language for JSON data. Inspired by the 'location path' semantics of XPath 3.1, it allows sophisticated queries to be expressed in a compact and intuitive notation.  A rich complement of built in operators and functions is provided for manipulating and combining extracted data, and the results of queries can be formatted into any JSON output structure using familiar JSON object and array syntax. Coupled with the facility to create user defined functions, advanced expressions can be built to tackle any JSON query and transformation task. [Try it out here.](http://try.jsonata.org/)

# Simple Queries

To support the extraction of values from a JSON structure, a location path syntax is defined. In common with XPath, this will select all possible values in the document that match the specified location path.  The two structural constructs of JSON are objects and arrays.

## Navigating JSON Objects

A JSON object is an associative array (a.k.a map or hash). The location path syntax to navigate into an arbitrarily deeply nested structure of JSON objects comprises the field names separated by dot '.' delimiters. The expression returns the JSON value referenced after navigating to the last step in the location path.  If during the navigation of the location path, a field is not found, then the expression returns nothing (represented by Javascript _undefined_).  No errors are thrown as a result of non-existing data in the input document.

The following sample JSON document is used by examples throughout this guide, unless otherwise indicated:

```json
{
  "FirstName": "Fred",
  "Surname": "Smith",
  "Age": 28,
  "Address": {
    "Street": "Hursley Park",
    "City": "Winchester",
    "Postcode": "SO21 2JN"
  },
  "Phone": [
    {
      "type": "home",
      "number": "0203 544 1234"
    },
    {
      "type": "office",
      "number": "01962 001234"
    },
    {
      "type": "office",
      "number": "01962 001235"
    },
    {
      "type": "mobile",
      "number": "077 7700 1234"
    }
  ],
  "Email": [
    {
      "type": "work",
      "address": ["fred.smith@my-work.com", "fsmith@my-work.com"]
    },
    {
      "type": "home",
      "address": ["freddy@my-social.com", "frederic.smith@very-serious.com"]
    }
  ],
  "Other": {
    "Over 18 ?": true,
    "Misc": null,
    "Alternative.Address": {
      "Street": "Brick Lane",
      "City": "London",
      "Postcode": "E1 6RF"
    }
  }
}
```

#### Examples

Here are some example expressions and their results when applied to the above JSON document:

- Returns a JSON string ("double quoted")
  <div class="jsonata-ex">
    <div>Surname</div>
    <div>"Smith"</div>
  </div>

- Returns a JSON number
  <div class="jsonata-ex">
    <div>Age</div>
    <div>28</div>
  </div>

- Field references are separated by '.'
  <div class="jsonata-ex">
    <div>Address.City</div>
    <div>"Winchester"</div>
  </div>

- Matched the path and returns the null value
  <div class="jsonata-ex">
    <div>Other.Misc</div>
    <div>null</div>
  </div>

- Path not found.  Returns nothing (i.e. Javascript _undefined_)
  <div class="jsonata-ex">
    <div>Other.Nothing</div>
    <div></div>
  </div>

- Field references containing whitespace or reserved tokens can be enclosed in backticks
  <div class="jsonata-ex">
    <div>Other.`Over 18 ?`</div>
    <div>true</div>
  </div>


## Navigating JSON Arrays

JSON arrays are used when an ordered collection of values is required.  Each value in the array is associated with an index (position) rather than a name, so in order to address individual values in an array, extra syntax is required to specify the index.  This is done using square brackets after the field name of the array.  If the square brackets contains a number, or an expression that evaluates to a number, then the number represents the index of the value to select.  Indexes are zero offset, i.e. the first value in an array `arr` is `arr[0]`.  If the number is not an integer, then it is rounded _down_ to an integer.  If the expression in square brackets is non-numeric, or is an expression that doesn't evaluate to a number, then it is treated as a [predicate](#predicates).

Negative indexes count from the end of the array, for example, `arr[-1]` will select the last value, `arr[-2]` the second to last, etc. If an index is specified that exceeds the size of the array, then nothing is selected.

If no index is specified for an array (i.e. no square brackets after the field reference), then the whole array is selected. If the array contains objects, and the location path selects fields within these objects, then each object within the array will be queried for selection.

#### Examples

- Returns the first item (an object)
  <div class="jsonata-ex">
    <div>Phone[0]</div>
    <div>{ "type": "home", "number": "0203 544 1234" }</div>
  </div>

- Returns the second item
  <div class="jsonata-ex">
    <div>Phone[1]</div>
    <div>{ "type": "office", "number": "01962 001234" }</div>
  </div>

- Returns the last item
  <div class="jsonata-ex">
    <div>Phone[-1]</div>
    <div>{ "type": "mobile", "number": "077 7700 1234" }</div>
  </div>

- Negative indexed count from the end
  <div class="jsonata-ex">
    <div>Phone[-2]</div>
    <div>{ "type": "office", "number": "01962 001235" }</div>
  </div>

- Doesn't exist - returns nothing
  <div class="jsonata-ex">
    <div>Phone[8]</div>
    <div></div>
  </div>

- Selects the `number` field in the first item
  <div class="jsonata-ex">
    <div>Phone[0].number</div>
    <div>"0203 544 1234"</div>
  </div>

- No index is given to `Phone` so it selects all of them (the whole array), then it selects all the `number` fields for each of them
  <div class="jsonata-ex">
    <div>Phone.number</div>
    <div>[ "0203 544 1234", "01962 001234", "01962 001235", "077 7700 1234" ]</div>
  </div>

- Might expect it to just return the first number, but it returns the first number of each of the items selected by `Phone`
  <div class="jsonata-ex">
    <div>Phone.number[0]</div>
    <div>[ "0203 544 1234", "01962 001234", "01962 001235", "077 7700 1234" ]</div>
  </div>

- Applies the index to the array returned by `Phone.number`. One use of [parentheses](#parenthesized-expressions-and-blocks).
  <div class="jsonata-ex">
    <div>(Phone.number)[0]</div>
    <div>"0203 544 1234"</div>
  </div>

- Returns a range of items by creating an array of indexes
  <div class="jsonata-ex">
    <div>Phone[[0..1]]</div>
    <div>[
  { "type": "home", "number": "0203 544 1234" },
  { "type": "office", "number": "01962 001234" }
]</div>
  </div>


## Result sequences

## Sequence flattening

## Empty sequences and singleton sequences

### Top level arrays, nested arrays and array flattening

Consider the JSON document:

    [
      { "ref": [ 1,2 ] },
      { "ref": [ 3,4 ] }
    ]

At the top level, we have an array rather than an object.  If we want to select the first object in this top level array, we don't have a field name to append the `[0]` to.  We can't use `[0]` on its own because that clashes with the [array constructor](#array-constructors) syntax.  However, we can use the _context_ reference `$` to refer to the start of the document as follows:

- `$` at the start of an expression refers to the entire input document
  <div class="jsonata-ex">
    <div>$[0]</div>
    <div>{ "ref": [ 1,2 ] }</div>
  </div>

- `.ref` here returns the entire internal array
  <div class="jsonata-ex">
    <div>$[0].ref</div>
    <div>[ 1,2 ]</div>
  </div>

- returns element on first position of the internal array
  <div class="jsonata-ex">
    <div>$[0].ref[0]</div>
    <div>1</div>
  </div>

- Despite the structure of the nested array, the resultant selection is flattened into a single flat array.  The original nested structure of the input arrays is lost. See [Array constructors](#array-constructors) for how to maintain the original structure in the results.
  <div class="jsonata-ex">
    <div>$.ref</div>
    <div>[ 1, 2, 3, 4 ]</div>
  </div>

# Query refinement using predicate expressions

## Predicates

At any step in a location path, the selected items can be filtered using a predicate - `[expr]` where `expr` evaluates to a Boolean value.  Each item in the selection is tested against the expression, if it evaluates to `true`, then the item is kept; if `false`, it is removed from the selection. The expression is evaluated relative to the current (context) item being tested, so if the predicate expression performs navigation, then it is relative to this context item.

#### Examples:

- Select the `Phone` items that have a `type` field that equals `"mobile"`.
  <div class="jsonata-ex">
    <div>Phone[type='mobile']</div>
    <div>{ "type": "mobile",  "number": "077 7700 1234" }</div>
  </div>

- Select the mobile phone number
  <div class="jsonata-ex">
    <div>Phone[type='mobile'].number</div>
    <div>"077 7700 1234"</div>
  </div>

- Select the office phone numbers - there are two of them!
  <div class="jsonata-ex">
    <div>Phone[type='office'].number</div>
    <div>[ "01962 001234",  "01962 001235" ]</div>
  </div>


## Singleton array and value equivalence

Within a JSONata expression or subexpression, any value (which is not itself an array) and an array containing just that value are deemed to be equivalent.  This allows the language to be composable such that location paths that extract a single value from and object and location paths that extract multiple values from arrays can both be used as inputs to other expressions without needing to use different syntax for the two forms.

Consider the following examples:

* `Address.City` returns the single value `"Winchester"`
* `Phone[0].number` matches a single value, and returns that value `"0203 544 1234"`
* `Phone[type='home'].number` likewise matches the single value `"0203 544 1234"`
* `Phone[type='office'].number` matches two values, so returns an array `[ "01962 001234",  "01962 001235" ]`

When processing the return value of a JSONata expression, it might be desirable to have the results in a consistent format regardless of how many values were matched.  In the first two expressions above, it is clear that each expression is addressing a single value in the structure and it makes sense to return just that value.  In the last two expressions, however, it is not immediately obvious how many values will be matched, and it is not helpful if the host language has to process the results in different ways depending on what gets returned.

If this is a concern, then the expression can be modified to make it return an array even if only a single value is matched. This is done by adding empty square brackets `[]` to a step within the location path.  The examples above can be re-written to always return an array as follows:

* `Address[].City` returns `[ "Winchester"] `
* `Phone[0][].number` returns `[ "0203 544 1234" ]`
* `Phone[][type='home'].number` returns `[ "0203 544 1234" ]`
* `Phone[type='office'].number[]` returns `[ "01962 001234",  "01962 001235" ]`

Note that the `[]` can be placed either side of the predicates and on any step in the path expression

## Wildcards

Use of `*` instead of field name to select all fields in an object

#### Examples

- Select the values of all the fields of `Address`
  <div class="jsonata-ex">
    <div>Address.*</div>
    <div>[ "Hursley Park", "Winchester", "SO21 2JN" ]</div>
  </div>

- Select the `Postcode` value of any child object
  <div class="jsonata-ex">
    <div>*.Postcode</div>
    <div>"SO21 2JN"</div>
  </div>



## Navigate arbitrary depths

Descendant wildcard `**` instead of `*` will traverse all descendants (multi-level wildcard).

#### Examples

- Select all `Postcode` values, regardless of how deeply nested they are in the structure
  <div class="jsonata-ex">
    <div>**.Postcode</div>
    <div>[ "SO21 2JN", "E1 6RF" ]</div>
  </div>

# Manipulating data with functions and expressions

## String expressions

Path expressions that point to a string value will return that value.

String literals can also be created by enclosing the
sequence of characters in quotes. Either double quotes `"` or single quotes `'` can be used, provided the same quote type is 
used for the start and end of the string literal.  Single quote characters may be included within a double quoted string and
_vice versa_ withought escaping.  Characters within the string literal may be escaped using the same format
as [JSON strings](https://tools.ietf.org/html/rfc7159#section-7).

Strings can be combined using the concatenation operator `&`. This is an infix operator and will join the two strings
returned by the expressions either side of it.  This is the only operator that will attempt to typecast its operands to
the expected (string) type.

__Examples__

- Concatenate `FirstName` followed by space followed by `Surname`
  <div class="jsonata-ex">
    <div>FirstName & ' ' & Surname</div>
    <div>"Fred Smith"</div>
  </div>

- Concatenates the `Street` and `City` from the `Address` object with a comma separator. Note the use of [parentheses](#parenthesized-expressions-and-blocks)
  <div class="jsonata-ex">
    <div>Address.(Street & ', ' & City)</div>
    <div>"Hursley Park, Winchester"</div>
  </div>

- Casts the operands to strings, if necessary
  <div class="jsonata-ex">
    <div>5&0&true</div>
    <div>"50true"</div>
  </div>



## Numeric expressions

Path expressions that point to a number value will return that value.  

Numeric literals can also be created using the same syntax as [JSON numbers](https://tools.ietf.org/html/rfc7159#section-6).

Numbers can be combined using the usual mathematical operators to produce a resulting number.  Supported operators:
- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `%` remainder (modulo)

__Examples__

Consider the following JSON document:
```
{
  "Numbers": [1, 2.4, 3.5, 10, 20.9, 30]
}
```

| Expression | Output | Comments
| ---------- | ------ |----|
| `Numbers[0] + Numbers[1]` | 3.4 |Adding 2 prices|
| `Numbers[0] - Numbers[4]` | -19.9 | Subtraction |
| `Numbers[0] * Numbers[5]` | 30 |Multiplying price by quantity|
| `Numbers[0] / Numbers[4]` | 0.04784688995215 |Division|
| `Numbers[2] % Numbers[5]` | 3.5 |Modulo operator|


## Comparison expressions

Often used in predicates, for comparison of two values.  Returns Boolean `true` or `false`. Supported operators:

- `=` equals
- `!=` not equals
- `<` less than
- `<=` less than or equal
- `>` greater than
- `>=` greater than or equal
- `in` value is contained in an array


__Examples__

| Expression | Output | Comments
| ---------- | ------ |----|
| `Numbers[0] = Numbers[5]` | false |Equality |
| `Numbers[0] != Numbers[4]` | true | Inequality |
| `Numbers[1] < Numbers[5]` | true |Less than|
| `Numbers[1] <= Numbers[5]` | true |Less than or equal|
| `Numbers[2] > Numbers[4]` | false |Greater than|
| `Numbers[2] >= Numbers[4]` | false |Greater than or equal|
| `"01962 001234" in Phone.number` | true | Value is contained in|

## Boolean expressions

Used to combine Boolean results, often to support more sophisticated predicate expressions. Supported operators:

- `and`
- `or`

Note that `not` is supported as a function, not an operator.

__Examples__

| Expression | Output | Comments
| ---------- | ------ |----|
| `(Numbers[2] != 0) and (Numbers[5] != Numbers[1])` | true |`and` operator |
| `(Numbers[2] != 0) or (Numbers[5] = Numbers[1])` | true | `or` operator |

# Building result structures

So far, we have discovered how to extract values from a JSON document, and how to manipulate the data using numeric, string and other operators.  It is useful to be able to specify how this processed data is presented in the output.

## Array constructors

As previously observed, when a location path matches multiple values in the input document, these values are returned as an array.  The values might be objects or arrays, and as such will have their own structure, but the _matched values_ themselves are at the top level in the resultant array.

It is possible to build extra structure into the resultant array by specifying the construction of arrays (or [objects](#object-constructors)) within the location path expression.  At any point in a location path where a field reference is expected, a pair of square brackets `[]` can be inserted to specify that the results of the expression within those brackets should be contained within a new array in the output.  Commas are used to separate multiple expressions within the array constructor.

Array constructors can also be used within location paths for making multiple selections without the broad brush use of wildcards.

__Examples__

- The four email addresses are returned in a flat array.
  <div class="jsonata-ex">
    <div>Email.address</div>
    <div>[
  "fred.smith@my-work.com",
  "fsmith@my-work.com",
  "freddy@my-social.com",
  "frederic.smith@very-serious.com"
]</div>
  </div>

- Each email object generates an array of addresses.
  <div class="jsonata-ex">
    <div>Email.[address]</div>
    <div>[
  [ "fred.smith@my-work.com",  "fsmith@my-work.com" ],
  [ "freddy@my-social.com", "frederic.smith@very-serious.com" ]
]</div>
  </div>

- Selects the `City` value of both `Address` and `Alternative.Address` objects.
  <div class="jsonata-ex">
    <div>[Address, Other.`Alternative.Address`].City</div>
    <div>[ "Winchester", "London" ]</div>
  </div>

## Object constructors

In a similar manner to the way arrays can be constructed, JSON objects can also be constructed in the output.  At any point in a location path where a field reference is expected, a pair of braces `{}` containing key/value pairs separated by commas, with each key and value separated by a colon: `{key1: value2, key2:value2}`.  The keys and values can either be literals or can be expressions. The key must either be a string or an expression that evaluates to a string.

When an object constructor follows an expression that selects multiple values, the object constructor will create a single object that contains a key/value pair for each of those context values.  If an array of objects is required (one for each context value), then the object constructor should immediately follow the dot '.' operator.

__Examples__

- Produces an array of objects (one for each phone).
  <div class="jsonata-ex">
    <div>Phone.{type: number}</div>
    <div>[
  { "home": "0203 544 1234" }, 
  { "office": "01962 001234" }, 
  { "office": "01962 001235" }, 
  { "mobile": "077 7700 1234"  } 
]</div>
  </div>

- Combines the key/value pairs into a single object.  See [Grouping using object key expression](sorting-grouping.md) for more details.
  <div class="jsonata-ex">
    <div>Phone{type: number}</div>
    <div>{
  "home": "0203 544 1234",
  "office": [
    "01962 001234",
    "01962 001235"
  ],
  "mobile": "077 7700 1234"
}</div>
  </div>

- Combines the key/value pairs into a single object.  In this case, for consistency, all numbers are grouped into arrays. See [Singleton array and value equivalence](#singleton-array-and-value-equivalence) for more details.
  <div class="jsonata-ex">
    <div>Phone{type: number[]}</div>
    <div>{
  "home": [
    "0203 544 1234"
  ],
  "office": [
    "01962 001234",
    "01962 001235"
  ],
  "mobile": [
    "077 7700 1234"
  ]
}</div>
  </div>


## JSON literals

The array and object constructors use the standard JSON syntax for JSON arrays and JSON objects.  In addition to this values of the other JSON data types can be entered into an expression using their native JSON syntax:
- strings - `"hello world"`
- numbers - `34.5`
- Booleans - `true` or `false`
- nulls - `null`
- objects - `{"key1": "value1", "key2": "value2"}`
- arrays - `["value1", "value2"]`

__JSONata is a superset of JSON.__ This means that any valid JSON document is also a valid JSONata expression.  This property allows you to use a JSON document as a template for the desired output, and then replace parts of it with expressions to insert data into the output from the input document.

# Query composition

In JSONata, everything is an _expression_. An expression comprises _values_, _functions_ and _operators_ which, when _evaluated_, produces a resulting value.  Functions and operators are applied to values which themselves can be the results of evaluating sub-expressions. In that way, the language is fully _composable_ to any level of complexity.


## Parenthesized expressions and blocks

Used to override the operator precedence rules.  E.g.

- `(5 + 3) * 4`

Used to compute complex expressions on a context value

- `Product.(Price * Quantity)` - both Price and Quantity are properties of the Product object

Used to support 'code blocks' - multiple expressions, separated by semicolons

- `(expr1; expr2; expr3)`

Each expression in the block is evaluated _in sequential order_; the result of the last expression is returned from the block.

# Sorting, Grouping and Aggregation

## Sorting

Arrays contain an ordered collection of values.  If you need to re-order the values, then the array must be sorted.  In JSONata, there are two ways of sorting an array:

1. Using the [`$sort()`](array-functions#sort) function.

2. Using the [order-by](path-operators#order-by-) operator.

The [order-by](path-operators#order-by-) operator is a convenient syntax that can used directly in a path expression to sort the result sequences in ascending or descending order.  The [`$sort()`](array-functions#sort) function requires more syntax to be written, but is more flexible and supports custom comparator functions.

## Grouping

The JSONata [object constructor](#object-constructors) syntax allows you to specify an expression for the key in any key/value pair (the value can obviously be an expression too). The key expression must evaluate to a string since this is a restriction on JSON objects.  The key and value expressions are evaluated for each item in the input context (see [processing model](#the-jsonata-processing-model)). The result of each key/value expression pair is inserted into the resulting JSON object.

If the evaluation of any key expression results in a key that is already in the result object, then the result of its associated value expression will be grouped with the value(s) already associated with that key. Note that the value expressions are not evaluated until all of the grouping has been performed.  This allows for aggregation expressions to be evaluated over the collection of items for each group.

__Examples__

- Group all of the product sales by name, with the price of each item in each group
  <div class="jsonata-ex">
    <div>Account.Order.Product{`Product Name`: Price}</div>
    <div>{
  "Bowler Hat": [ 34.45, 34.45 ],
  "Trilby hat": 21.67,
  "Cloak": 107.99
}</div>
  </div>

- Group all of the product sales by name, with the price and the quantity of each item in each group
  <div class="jsonata-ex">
    <div>Account.Order.Product {
  `Product Name`: {"Price": Price, "Qty": Quantity}
}</div>
    <div>{
  "Bowler Hat": {
    "Price": [ 34.45, 34.45 ],
    "Qty": [ 2, 4 ]
  },
  "Trilby hat": { "Price": 21.67, "Qty": 1 },
  "Cloak": { "Price": 107.99, "Qty": 1 }
}</div>
  </div>

Note in the above example, the value expression grouped all of the prices together and all of the quantities together into separate arrays.  This is because the context value is the sequence of all grouped Products and the `Price` expression will select all prices from all products.  If you want to collect the price and quantity into individual objects, then you need to evaluate the object constructor _for each_ product in the context sequence.  The following example shows this.

- Explicit use of `$.{ ... }` to create an object for each item in the group.
  <div class="jsonata-ex">
    <div>Account.Order.Product {
  `Product Name`: $.{"Price": Price, "Qty": Quantity}
}</div>
    <div>{
  "Bowler Hat": [
    { "Price": 34.45, "Qty": 2 },
    { "Price": 34.45, "Qty": 4 }
  ],
  "Trilby hat": { "Price": 21.67, "Qty": 1 },
  "Cloak": { "Price": 107.99, "Qty": 1 }
}</div>
  </div>

- Multiply the Price by the Quantity for each product in each group
  <div class="jsonata-ex">
    <div>Account.Order.Product{`Product Name`: $.(Price*Quantity)}</div>
    <div>{
  "Bowler Hat": [ 68.9, 137.8 ],
  "Trilby hat": 21.67,
  "Cloak": 107.99
}</div>
  </div>

- The total aggregated value in each group
  <div class="jsonata-ex">
    <div>Account.Order.Product{`Product Name`: $sum($.(Price*Quantity))}</div>
    <div>{
  "Bowler Hat": 206.7,
  "Trilby hat": 21.67,
  "Cloak": 107.99
}</div>
  </div>



## Aggregation

Often queries are just required to return aggregated results from a set of matching values.  A number of aggregation functions are available which return a single aggregated value when applied to an array of values.

__Examples__

- Total price of each product in each order
  <div class="jsonata-ex">
    <div>$sum(Account.Order.Product.Price)</div>
    <div>198.56</div>
  </div>

- More likely want to add up the total of the price times quantity for each order
  <div class="jsonata-ex">
    <div>$sum(Account.Order.Product.(Price*Quantity))</div>
    <div>336.36</div>
  </div>

Other [numeric aggregation functions](aggregation-functions) are available (i.e. average, min, max) and an [aggregator for strings](string-functions#join).  It is also possible to write complex custom aggregators using the [`$reduce()`](higher-order-functions#reduce) higher-order function.

# The JSONata processing model

## The JSONata type system

JSONata is a superset of JSON and the JSONata type system is a superset of the JSON data types.  In common with all functional programming languages, the function is also a first-class data type.  The following data types are supported by JSONata:

- string
- number
- Boolean
- null
- object
- array
- function

All but the last one are in common with JSON.

## Sequences

JSONata has been designed foremost as a query language, whereby a path expression can select zero, one or more than one values from the JSON document.  These values, each of which can be of any of the types listed above, are returned as a _result sequence_.  During the evaluation of expressions, which involves the results of subexpressions being combined or becoming the context inputs to other subexpressions, the sequences are subject to the process of _sequence flattening_.

The sequence flattening rules are as follows:

1. An __empty sequence__ is a sequence with no values and is considered to be 'nothing' or 'no match'.  It won't appear in the output of any expression. If it is associated with an object property (key/value) pair in a result object, then that object will not have that property.

2. A __singleton sequence__ is a sequence containing a single value.  It is considered equivalent to that value itself, and the output from any expression, or sub-expression will be that value without any surrounding structure.

3. A sequence containing more than one value is represented in the output as a JSON array.  This is still internally flagged as a sequence and subject to the next rule.  Note that if an expression matches an array from the input JSON, or a JSON array is explicitly constructed in the query using the [array constructor](#array-constructors), then this remains an array of values rather than a sequence of values and will not be subject to the sequence flattening rules.  However, if this array becomes the context of a subsequent expression, then the result of that _will_ be a sequence.

4. If a sequence contains one or more (sub-)sequences, then the values from the sub-sequence are pulled up to the level of the outer sequence.  A result sequence will never contain child sequences (they are flattened).



## JSONata path processing

The JSONata path expression is a _declarative functional_ language.

__Functional__ because it is based on the map/filter/reduce programming paradigm as supported by popular functional programming languages through the use of higher-order functions.

__Declarative__ because these higher-order functions are exposed through a lightweight syntax which lets the user focus on the intention of the query (declaration) rather than the programming constructs that control their evaluation.

A path expression is a sequence of one or more of the following functional stages:

Stage | Syntax | Action
---|---|---
 __Map__ | seq`.`expr | Evaluates the RHS expression in the context of each item in the input sequence.  Flattens results into result sequence.
 __Filter__ | seq`[`expr`]` | Filter results from previous stage by applying predicate expression between brackets to each item.
 __Sort__ | seq`^(`expr`)` | Sorts (re-orders) the input sequence according to the criteria in parentheses.
 __Index__ | seq`#`$var | Binds a named variable to the current context position (zero offset) in the sequence.
 __Join__ | seq`@`$var | Binds a named variable to the current current context item in the sequence.  Can only be used directly following a map stage.
__Reduce__ | seq`{` expr`:`expr`,` expr`:`expr ...`}` | Group and aggregate the input sequence to a single result object as defined by the name/value expressions.  Can only appear as the final stage in a path expression.

In the above table:

- In the 'Syntax' column, 'seq' refers to the input sequence for the current stage, which is the result sequence from the previous stage.
- The 'Action' column gives a brief outline of the stage's behavior; fuller details are in the [Path Operators](path-operators) reference page.
- The relative precedence of each operator affects the scope of its influence on the input sequence. Specifically,
  - The Filter operator binds tighter than the Map operator.  This means, for example, that `books.authors[0]` will select the all of the first authors from _each_ book rather than the first author from all of the books.
  - The Sort (order-by) operator has the lowest precedence, meaning that the full path to the left of it will be evaluated, and its result sequence will be sorted.
  - This operator precedence can be overridden by using parentheses.  For example, `(books.authors)[0]` will select the the first author from all of the books (single value).  Note, however, that parentheses also define a scope frame for variables, so any variables that have been bound within the parentheses block including those bound by the `@` and `#` operators will go out of scope at the end of the parens block.
- The variables bound by the `@` and `#` operators go out of scope at the end of the path expression.
  - The Reduce stage, if used, will terminate the current path expression.  Although a Map operator can immediately follow this, it will be interpreted as the start of a new path expression, meaning that any previously bound context or index variables will be out of scope.

# Functional programming constructs

So far, we have introduced all the parts of the language that allow us to extract data from an input JSON document, combine the data using string and numeric operators, and format the structure of the output JSON document.  What follows are the parts that turn this into a Turing complete, functional programming language.

## Comments

JSONata expressions can be interleaved with comments using 'C' style comment delimeters.  For example,

```
/* Long-winded expressions might need some explanation */
(
  $pi := 3.1415926535897932384626;
  /* JSONata is not known for its graphics support! */
  $plot := function($x) {(
    $floor := $string ~> $substringBefore(?, '.') ~> $number;
    $index := $floor(($x + 1) * 20 + 0.5);
    $join([0..$index].('.')) & 'O' & $join([$index..40].('.'))
  )};

  /* Factorial is the product of the integers 1..n */
  $product := function($a, $b) { $a * $b };
  $factorial := function($n) { $n = 0 ? 1 : $reduce([1..$n], $product) };

  $sin := function($x){ /* define sine in terms of cosine */
    $cos($x - $pi/2)
  };
  $cos := function($x){ /* Derive cosine by expanding Maclaurin series */
    $x > $pi ? $cos($x - 2 * $pi) : $x < -$pi ? $cos($x + 2 * $pi) :
      $sum([0..12].($power(-1, $) * $power($x, 2*$) / $factorial(2*$)))
  };

  [0..24].$sin($*$pi/12).$plot($)
)
```
Produces [this](http://try.jsonata.org/ryYn78Q0m), if you're interested!

## Conditional logic

If/then/else constructs can be written using the ternary operator "? :".

`predicate ? expr1 : expr2`

The expression `predicate` is evaluated.  If its effective boolean value (see definition) is `true` then `expr1` is evaluated and returned, otherwise `expr2` is evaluated and returned.

__Examples__

TBD

## Variables

Any name that starts with a dollar '$' is a variable.  A variable is a named reference to a value.  The value can be one of any type in the language's [type system](#the-jsonata-type-system).

### Built-in variables

- `$` The variable with no name refers to the context value at any point in the input JSON hierarchy. Examples
- `$$` The root of the input JSON.  Only needed if you need to break out of the current context to temporarily navigate down a different path.  E.g. for cross-referencing or joining data. Examples
- Native (built-in) functions.  See function library.

### Variable binding

Values (of any type in the type system) can be bound to variables

`$var_name := "value"`

The stored value can be later referenced using the expression `$var_name`.

The scope of a variable is limited to the 'block' in which it was bound.  E.g.

```
Invoice.(
  $p := Product.Price;
  $q := Product.Quantity;
  $p * $q
)
```

Returns Price multiplied by Quantity for the Product in the Invoice.

## Functions

The function is a first-class type, and can be stored in a variable just like any other data type.  A library of built-in functions is provided (link) and assigned to variables in the global scope.  For example, `$uppercase` contains a function which, when invoked with a string argument, `str`, will return a string with all the characters in `str` changed to uppercase.

### Invoking a function

A function is invoked by following its reference (or definition) by parentheses containing a comma delimited sequence of arguments.

__Examples__

- `$uppercase("Hello")` returns the string "HELLO".
- `$substring("hello world", 0, 5)` returns the string "hello"
- `$sum([1,2,3])` returns the number 6

### Defining a function

Anonymous (lambda) functions can be defined using the following syntax:

`function($l, $w, $h){ $l * $w * $h }`

and can be invoked using

`function($l, $w, $h){ $l * $w * $h }(10, 10, 5)` which returns 500

The function can also be assigned to a variable for future use (within the block)

```
(
  $volume := function($l, $w, $h){ $l * $w * $h };
  $volume(10, 10, 5);
)
```

### Function signatures

Functions can be defined with an optional signature which specifies the parameter types of the function.  If supplied,
the evaluation engine will validate the arguments passed to the function before it is invoked.  A dynamic error is
thown if the argument list does not match the signature.

A function signature is a string of the form `<params:return>`. `params` is a sequence of type symbols, each one representing an input argument's type. `return` is a single type symbol representing the return value type.

Type symbols work as follows:

Simple types:

- `b` - Boolean
- `n` - number
- `s` - string
- `l` - `null`

Complex types:

- `a` - array
- `o` - object
- `f` - function

Union types:

- `(sao)` - string, array or object
- `(o)` - same as `o`
- `u` - equivalent to `(bnsl)` i.e. Boolean, number, string or `null`
- `j` - any JSON type. Equivalent to `(bnsloa)` i.e. Boolean, number, string, `null`, object or array, but not function
- `x` - any type. Equivalent to `(bnsloaf)`

Parametrised types:

- `a<s>` - array of strings
- `a<x>` - array of values of any type

Some examples of signatures of built-in JSONata functions:

- `$count` has signature `<a:n>`; it accepts an array and returns a number.
- `$append` has signature `<aa:a>`; it accepts two arrays and returns an array.
- `$sum` has signature `<a<n>:n>`; it accepts an array of numbers and returns a number.
- `$reduce` has signature `<fa<j>:j>`; it accepts a reducer function `f` and an `a<j>` (array of JSON objects) and returns a JSON object.

Each type symbol may also have *options* applied.

- `+` - one or more arguments of this type
  - E.g. `$zip` has signature `<a+>`; it accepts one array, or two arrays, or three arrays, or...
- `?` - optional argument
  - E.g. `$join` has signature `<a<s>s?:s>`; it accepts an array of strings and an optional joiner string which defaults to the empty string. It returns a string.
- `-` - if this argument is missing, use the context value ("focus").
  - E.g. `$length` has signature `<s-:n>`; it can be called as `$length(OrderID)` (one argument) but equivalently as `OrderID.$length()`.


### Recursive functions

Functions that have been assigned to variables can invoke themselves using that variable reference.  This allows recursive functions to be defined.  Eg.

<div class="jsonata-ex">
  <div>(
  $factorial:= function($x){ $x <= 1 ? 1 : $x * $factorial($x-1) };
  $factorial(4)
)</div>
  </div>24</div>
</div>

Note that it is actually possible to write a recursive function using purely anonymous functions (i.e. nothing gets assigned to variables).  This is done using the [Y-combinator](https://en.wikipedia.org/wiki/Fixed-point_combinator#Fixed_point_combinators_in_lambda_calculus) which might be an interesting [diversion](#advanced-example-the-y-combinator) for those interested in functional programming.

### Tail call optimization (Tail recursion)

A recursive function adds a new frame to the call stack each time it invokes itself.  This can eventually lead to stack exhaustion if the function recuses beyond a certain limit.  Consider the classic recursive implementation of the factorial function

```
(
  $factorial := function($x) {
    $x <= 1 ? 1 : $x * $factorial($x-1)
  };
  $factorial(170)
)
```

This function works by pushing the number onto the stack, then when the stack unwinds, multiplying it by the result of the factorial of the number minus one.  Written in this way, the JSONata evaluator has no choice but to use the call stack to store the intermediate results.  Given a large enough number, the call stack will overflow.

This is a recognised problem with functional programming and the solution is to rewrite the function slightly to avoid the _need_ for the stack to store the itermediate result.  The following implementation of factorial achieves this

```
(
  $factorial := function($x){(
    $iter := function($x, $acc) {
      $x <= 1 ? $acc : $iter($x - 1, $x * $acc)
    };
    $iter($x, 1)
  )};
  $factorial(170)
)
```

Here, the multiplication is done _before_ the function invokes itself and the intermediate result is carried in the second parameter `$acc` (accumulator).  The invocation of itself is the _last_ thing that the function does.  This is known as a 'tail call', and when the JSONata parser spots this, it internally rewrites the recursion as a simple loop.  Thus it can run indefinitely without growing the call stack.  Functions written in this way are said to be [tail recursive](https://en.wikipedia.org/wiki/Tail_call).

### Higher order functions

A function, being a first-class data type, can be passed as a parameter to another function, or returned from a function.  Functions that process other functions are known as higher order functions.  Consider the following example:

```
(
  $twice := function($f) { function($x){ $f($f($x)) } };
  $add3 := function($y){ $y + 3 };
  $add6 := $twice($add3);
  $add6(7)
)
```
- The function stored in variable `$twice` is a higher order function.  It takes a parameter `$f` which is a function, and returns a function which takes a parameter `$x` which, when invoked, applies the function `$f` twice to `$x`.
- `$add3` stores a function that adds 3 to its argument.  Neither `$twice` or `$add3` have been invoked yet.
- `$twice` is invoked by passing the function `add3` as its argument.  This returns a function that applies `$add3` twice to _its_ argument.  This returned function is not invoked yet, but rather assigned to the variable `add6`.
- Finally the function in `$add6` is invoked with the argument 7, resulting in 3 being added to it twice.  It returns 13.

### Functions are closures

When a lambda function is defined, the evaluation engine takes a snapshot of the environment and stores it with the function body definition.  The environment comprises the context item (i.e. the current value in the location path) together with the current in-scope variable bindings.  When the lambda function is later invoked, it is done so in that stored environment rather than the current environment at invocation time.  This property is known as _lexical scoping_ and is a fundamental property of _closures_.

Consider the following example:

```
Account.(
  $AccName := function() { $.'Account Name' };

  Order[OrderID = 'order104'].Product.{
    'Account': $AccName(),
    'SKU-' & $string(ProductID): $.'Product Name'
  }
)
```

When the function is created, the context item (referred to by '$') is the value of `Account`.  Later, when the function is invoked, the context item has moved down the structure to the value of each `Product` item.  However, the function body is invoked in the environment that was stored when it was defined, so its context item is the value of `Account`.  This is a somewhat contrived example, you wouldn't really need a function to do this.  The expression produces the following result:

```
{
  "Account": "Firefly",
  "SKU-858383": "Bowler Hat",
  "SKU-345664": "Cloak"
}
```

### Partial function application

Functions can [partially applied](https://en.wikipedia.org/wiki/Partial_application) by invoking the function with one or more (but not all)
arguments replaced by a question mark `?` placeholder.  The result of this is another function whose arity (number of parameters) is reduced
by the number of arguments supplied to the original function.  This returned function can be treated like any other newly defined function,
e.g. bound to a variable, passed to a higher-order function, etc.

__Examples__

- Create a function to return the first five characters of a string by partially applying the `$substring` function
  <div class="jsonata-ex">
    <div>(
  $first5 := $substring(?, 0, 5);
  $first5("Hello, World")
)</div>
    <div>"Hello"</div>
  </div>

- Partially applied function can be further partially applied
  <div class="jsonata-ex">
    <div>(
  $firstN := $substring(?, 0, ?);
  $first5 := $firstN(?, 5);
  $first5("Hello, World")
)</div>
    <div>"Hello"</div>
  </div>


### Function chaining

Function chaining can be used in two ways:

1. To avoid lots of nesting when multiple functions are applied to a value

2. As a higher-order construct for defining new functions by combining existing functions

#### Invocation chaining

`value ~> $funcA ~> $funcB`\
is equivalent to\
`$funcB($funcA(value))`

__Examples__

- `Customer.Email ~> $substringAfter("@") ~> $substringBefore(".") ~> $uppercase()`

#### Function composition

[Function composition](https://en.wikipedia.org/wiki/Function_composition) is the application of one function to another function
to produce a third function.

`$funcC := $funcA ~> $funcB`\
is equivalent to\
`$funcC := function($arg) { $funcB($funcA($arg)) }`

__Examples__

- Create a new function by chaining two existing functions
  <div class="jsonata-ex">
    <div>(
   $normalize := $uppercase ~> $trim;
   $normalize("   Some   Words   ")
)</div>
    <div>"SOME WORDS"</div>
  </div>

### Functions as first class values

Function composition can be combined with partial function application to produce a very compact syntax for defining new
functions.

__Examples__

- Create a new function by chaining two partially evaluated functions
  <div class="jsonata-ex">
    <div>(
  $first5Capitalized := $substring(?, 0, 5) ~> $uppercase(?);
  $first5Capitalized(Address.City)
)</div>
    <div>"WINCH"</div>
  </div>


### Advanced example - The Y-combinator

There is no need to read this section - it will do nothing for your sanity or ability to manipulate JSON data.

Earlier we learned how to write a recursive function to calculate the factorial of a number and hinted that this could be done without naming any functions.  We can take higher-order functions to the extreme and write the following:

`λ($f) { λ($x) { $x($x) }( λ($g) { $f( (λ($a) {$g($g)($a)}))})}(λ($f) { λ($n) { $n < 2 ? 1 : $n * $f($n - 1) } })(6)`

which produces the result `720`.  The Greek lambda (λ) symbol can be used in place of the word `function` which, if you can find it on your keyboard, will save screen space and please the fans of [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus).

The first part of this above expression is an implementation of the [Y-combinator](https://en.wikipedia.org/wiki/Fixed-point_combinator#Fixed_point_combinators_in_lambda_calculus) in this language.  We could assign it to a variable and apply it to other recursive anonymous functions:

```
(
  $Y := λ($f) { λ($x) { $x($x) }( λ($g) { $f( (λ($a) {$g($g)($a)}))})};
  [1,2,3,4,5,6,7,8,9] . $Y(λ($f) { λ($n) { $n <= 1 ? $n : $f($n-1) + $f($n-2) } }) ($)
)
```

to produce the Fibonacci series `[ 1, 1, 2, 3, 5, 8, 13, 21, 34 ]`.

But we don't need to do any of this.  Far more sensible to use named functions:

```
(
  $fib := λ($n) { $n <= 1 ? $n : $fib($n-1) + $fib($n-2) };
  [1,2,3,4,5,6,7,8,9] . $fib($)
)
```

# Using Regular Expressions

The regular expression is a syntax for matching and extracting parts of a string.  JSONata provides first class support for regular expressions surrounded by the familiar slash delimeters found in many scripting languages.  

`/regex/flags`

where:
- `regex` - the regular expression
- `flags` - optionally either or both of: 
    - `i` - ignore case
    - `m` - multiline match

 ## Functions which use regular expressions

A number of functions are available that take a regular expression as a parameter

- [$match()](string-functions#match)
- [$contains()](string-functions#contains)
- [$split()](string-functions#split)
- [$replace()](string-functions#replace)

__Examples__

 ## Regular expressions in query predicates

Regexes are often used in query predicates (filter expressions) when selecting objects that contain a matching string property.  For this, a short cut notation can be used as follows:

`path.to.object[stringProperty ~> /regex/]`

The `~>` is the [chain operator](control-operators#chain), and its use here implies that the result of `/regex/` is a function.  We'll see below that this is in fact the case.

__Examples__

``Account.Order.Product[`Product Name` ~> /hat/i ]``

will match all products that have 'hat' in their name.

 ## Generic matchers

The JSONata type system is based on the JSON type system, with the addition of the function type.  In order to accommodate the regex as a standalone expression, the syntax `/regex/` evaluates to a function.  Think of the `/regex/` syntax as a higher-order function that results in a 'matching function' when evaluated.  The `regex` between the slashes is the parameter to this HOF and the function that gets returned, when applied to _its_ string parameter, will return a structure that contains details of parts of the string that have been matched.  If nothing is matched, then it returns the empty sequence (i.e. JavaScript `undefined`).

__Example__

`$matcher := /[a-z]*an[a-z]*/i`

Evaluation of the regex returns a function, and this has been bound to a variable `$matcher`.  Later, the `$matcher` function is invoked on a string:

`$matcher('A man, a plan, a canal, Panama!')`

This returns the following JSONata object (JSON, but also with a function property):

```
{
  "match": "man",
  "start": 2,
  "end": 4,
  "groups": [],
  "next": "<native function>#0"
}
```

This contains information of the first matching substring within this famous palindrome, specifically:
- `match` - the substring within the original string that matches the regex
- `start` - the starting position (zero offset) of the matching substring within the original string
- `end` - the endinging position of the matching substring within the original string
- `groups` - if capturing groups are used in the regex, then this array contains a string for the text captured by each group
- `next()` - when invoked, will return details of the second occurrence of any matching substring (and so on).

In this example, invoking `next()` will return:

```
{
  "match": "canal",
  "start": 17,
  "end": 22,
  "groups": [],
  "next": "<native function>#0"
}
```

and so on, until it eventually returns the empty sequence.

 ## Writing a custom matcher

We've learned that the regex syntax is just a function generator, and the signature and return structure of the generated 'matcher' function is well defined.  The four regex-aware functions (`$match`, `$contain`, `$split`, `$replace`) simply invoke this function as part of their implementation.  Apart from that, they have no awareness that these matcher functions were generated by the regex syntax.

So it's possible to write any user-defined matcher function, provided it conforms to this contract.  This can be done as a JSONata lambda function or (more likely) as an extension function.  It can then be passed to these four 'regex-aware' functions and they will search using the custom matcher rather than a regex.

# Date/Time processing

## The 'evaluation time’ - $now()

There are two functions that return the 'current' date/time timestamp:

1. [`$now()`](date-time-functions#now) returns the timestamp in an ISO 8601 formatted string.
2. [`$millis()`](date-time-functions#millis) returns the same timestamp as the number of milliseconds since midnight on 1st January 1970 UTC (the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time)).

The timestamp is captured at the start of the expression evaluation, and that same timestamp value is returned for every occurrence of `$now()` and `$millis()` in the same expression for the duration of the evaluation.

__Example__

- The timestamp will be the same for all invocations within an expression
  <div class="jsonata-ex">
    <div>{
  "invoiceTime": $now(),
  "total": $sum(Account.Order.Product.(Price * Quantity)),
  "closingTime": $now()
}</div>
    <div>{
  "invoiceTime": "2018-12-10T13:49:51.141Z",
  "total": 336.36,
  "closingTime": "2018-12-10T13:49:51.141Z"
}</div>
  </div>

## JSON and ISO 8601

JSON does not have a built-in type for date/time values.  The general [consensus](https://stackoverflow.com/a/15952652/7079134) is to store the date/time value as a string in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

__Example__

```
{
    "myDateTime": "2018-12-10T13:45:00.000Z"
}
```

JSONata follows this convention and provides functions for formatting and parsing ISO 8601 formatted timestamps 
([`toMillis()`](date-time-functions#tomillis) and [`fromMillis()`](date-time-functions#frommillis))

## Support for other date/time formats

Since there is no standard for date/time format in JSON, it is entirely possible that the JSON data you are working with will have date/time values formatted in other ways.  JSONata supports the highly versatile picture string notation from the XPath/XQuery [fn:format-dateTime()](https://www.w3.org/TR/xpath-functions-31/#func-format-dateTime) specification for both the formatting and parsing of a wide variety of date/time formats. 

See [`toMillis()`](date-time-functions#tomillis) and [`fromMillis()`](date-time-functions#frommillis) for details.

__Examples__

- The date `12/10/2018` in US format and `10/12/2018` in European format both refer to the same day.
  <div class="jsonata-ex">
    <div>$toMillis('10/12/2018', '[D]/[M]/[Y]') ~> $fromMillis('[M]/[D]/[Y]')</div>
    <div>"12/10/2018"</div>
  </div>

- More verbose format.
  <div class="jsonata-ex">
    <div>$toMillis('10/12/2018', '[D]/[M]/[Y]') 
       ~> $fromMillis('[FNn], [D1o] [MNn] [YI]')</div>
    <div>"Monday, 10th December MMXVIII"</div>
  </div>


# Path Operators

The path operators underpin the declarative nature of the map/filter/reduce processing model in JSONata.

## `.` (Map)

The dot operator is one of the fundamental building blocks in JSONata expressions.  It implements the 'for each' or 'map' function that is common in many functional languages.

The dot operator performs the following logic:

- The expression on the LHS is evaluated to produce an array of values.
  - If it evaluates to a single value, that is treated as equivalent to an array containing that single value
  - If it evaluates to nothing (no match or empty array), then the result of the operator expression is nothing
- For each value in the LHS array in turn:
  - The value is known as the _context_ and is used as the basis for any relative path expression on the RHS.  It is also accessible in the RHS expression using the `$` symbol.
  - The RHS expression is evaluated to produce a value or array of values (or nothing).  These values are appended to a combined array of results for the operator as a whole.
- The combined result of the operator is returned.

This operator is left associative meaning that the expression `a.b.c.d` is evaluated like `((a.b).c).d`; i.e. left to right

__Examples__

- `Address.City` => `"Winchester"`
- `Phone.number` => `[ "0203 544 1234", "01962 001234", "01962 001235", "077 7700 1234" ]`
- `Account.Order.Product.(Price * Quantity)` => `[ 68.9, 21.67, 137.8, 107.99 ]`
- `Account.Order.OrderID.$uppercase()` => `[ "ORDER103", "ORDER104"]`

## `[` ... `]` (Filter)

The filter operator (a.k.a predicate) is used to select only the items in the input sequence that satisfy the predicate expression contained between the square brackets.

If the predicate expression is an integer, or an expression that evaluates to an integer, then the item at that position (zero offset) in the input sequence is the only item selected for the result sequence.
If the number is non-integer, then it is rounded _down_ to the nearest integer.

If the predicate expression is an array of integers, or an expression that evaluates to an array of integers, then the items at those positions (zero offset) in the input sequence is the only item selected for the result sequence.

If the predicate expression evaluates to any other value, then it is cast to a Boolean as if using the `$boolean()` function.  If this evaluates to `true`, then the item is retained in the result sequence.  Otherwise it is rejected.

See [Navigating JSON Arrays](#navigating-json-arrays) and [Predicates](predicate) for more details and examples.

## `^(` ... `)` (Order-by)

The order-by operator is used to sort an array of values into ascending or descending order according to one or more expressions defined within the parentheses.

By default, the array will be sorted into ascending order.  For example:

`Account.Order.Product^(Price)`

sorts all of the products into order of increasing price (`Price` is a numeric field in the `Product` object).

To sort in descending order, the sort expression must be preceded by the `>` symbol. For example:

`Account.Order.Product^(>Price)`

sorts all of the products into order of decreasing price.  The `<` symbol can be used to explicitly indicate ascending order, although that is the default behaviour.

Secondary (and more) sort expressions can be specified by separating them with commas (`,`).  The secondary expression will be used to determine order if the primary expression ranks two values the same.  For example,

`Account.Order.Product^(>Price, <Quantity)`

orders the products primarily by decreasing price, but for products of the same price, by increasing quantity.

The sort expression(s) can be any valid JSONata expression that evaluates to a number or a string.  If it evaluates to a string then the array is sorted in order of unicode codepoint.

__Examples__

- `Account.Order.Product^(Price * Quantity)` => Increasing order of price times quantity.
- `student[type='fulltime']^(DoB).name` => The names of all full time students sorted by date of birth (the DoB value is an ISO 8601 date format)

## `{` ... `}` (Reduce)

The reduce operator can be used as the last step in a path expression to group and aggregate its input sequence into a single object.
The key/value pairs between the curly braces determine the groupings (by evaluating the key expression) and the aggregated values for each group.
See [Grouping and Aggregation](sorting-grouping#grouping) for more details.


## `*` (Wildcard)

This wildcard selects the values of all the properties of the context object.  It can be used in a path expression in place of a property name, but it cannot be combined with other characters like a glob pattern.  The order of these values in the result sequence is implementation dependent.
See [Wildcards](#wildcards) for examples.

## `**` (Descendants)

This wildcard recursively selects the values of all the properties of the context object, and the properties of any objects contained within these values as it descends the hierarchy.
See [Navigate arbitrary depths](#navigate-arbitrary-depths).

## `%` (Parent)

This will select the 'parent' of the current context value.  Here, we define 'parent' to be the enclosing object which has the property representing the context value.

This is the only operation which searches 'backwards' in the input data structure. It is implemented by static analysis of the expression at [compile time](https://docs.jsonata.org/embedding-extending#jsonatastr) and can only be used within expressions that navigate through that target parent value in the first place.
If, for any reason, the parent location cannot be determined, then a static error (S0217) is thrown.

__Example__

```
Account.Order.Product.{
  'Product': `Product Name`,
  'Order': %.OrderID,
  'Account': %.%.`Account Name`
}
```
This returns an array of objects for each product in each order in each account.  Information from the enclosing Order and Account objects can be accessed using the parent operator.
The repeated combination of `%.%.` is used to access the grandparent and higher ancestors.


## `#` (Positional variable binding)

This can be used to determine at which position in the sequence the current context item is.  It can be used following any map, filter or order-by stage in the path.
The variable is available for use within subsequent stages of the path (e.g. within filter predicates) and goes out of scope at the end of the path expression.

__Example__

```
library.books#$i['Kernighan' in authors].{
  'title': title,
  'index': $i
}
```
This returns an array of objects for each book in the library where Kernighan is one of the authors.  Each object contains the book's title and its position within the books array before it was filtered.


## `@` (Context variable binding)

This is used to bind the current context item (`$`) to a named variable.  It can only be used directly following a map stage, not a filter or order-by stage.
The variable binding remains in scope for the remainder of the path expression.

Because the current context has now been explicitly bound to a named variable, this context will be carried forward to be the context of the next stage in the path.
For example, in this snippet of a path, `library.loans@$l.books`, the loans array is a property of the library object and each loan will, in turn, be bound to the variable `$l`.
The books array, which is also a property of the library object, will then be selected.

This operator can be used to perform data joins within a path because of its ability to do cross-referencing across objects.

__Example__

```
library.loans@$l.books@$b[$l.isbn=$b.isbn].{
  'title': $b.title,
  'customer': $l.customer
}
```
This performs an 'inner join' between objects in the loans array and objects in the books array where the ISBNs match between the structures.

Block expressions can be used to widen the scope of the data cross-referencing as shown in this example:

```
(library.loans)@$l.(catalog.books)@$b[$l.isbn=$b.isbn].{
  'title': $b.title,
  'customer': $l.customer
}
```

# Numeric Operators

## `+` (Addition)

The addition operator adds the operands to produce the numerical sum.  It is an error if either operand is not a number.

__Example__

`5 + 2` => `7`


## `-` (Substraction/Negation)

The subtraction operator subtracts the RHS value from the LHS value to produce the numerical difference  It is an error if either operand is not a number.

It can also be used in its unary form to negate a number

__Examples__

- `5 - 2` => `3`
- `- 42` => `-42`

## `*` (Multiplication)

The multiplication operator multiplies the operands to produce the numerical product.  It is an error if either operand is not a number.

__Example__

`5 * 2` => `10`

## `/` (Division)

The division operator divides the RHS into the LHS to produce the numerical quotient.  It is an error if either operand is not a number.

__Example__

`5 / 2` => `2.5`


## `%` (Modulo)

The modulo operator divides the RHS into the LHS using whole number division to produce a whole number quotient and a remainder.  This operator returns the remainder.  It is an error if either operand is not a number.

__Example__

`5 % 2` => `1`

## `..` (Range)

The sequence generation operator is used to create an array of monotonically increasing integer start with the number on the LHS and ending with the number on the RHS.  It is an error if either operand does not evaluate to an integer.  The sequence generator can only be used within an array constructor [].

__Examples__

- `[1..5]` => `[1, 2, 3, 4, 5]`
- `[1..3, 7..9]` => `[1, 2, 3, 7, 8, 9]`
- `[1..$count(Items)].("Item " & $)` => `["Item 1","Item 2","Item 3"]`
- `[1..5].($*$)` => `[1, 4, 9, 16, 25]`

# Comparison Operators

## `=` (Equals)

The equality operator returns Boolean `true` if both operands are the same (type and value).  Arrays and objects are checked for deep equality.  Arrays must have the same values in the same order. Objects must have the same key/value pairs (order is not relevant).  Otherwise it returns `false`.

__Examples__

- `1+1 = 2` => `true`
- `"Hello" = "World"` => `false`

## `!=` (Not equals)

The inequality operator returns Boolean `false` if both operands are the same (type and value, deep equality).  Otherwise it returns `true`.

__Examples__

- `1+1 != 3` => `true`
- `"Hello" != "World"` => `true`

## `>` (Greater than)

The 'greater than' operator returns Boolean `true` if the LHS is numerically greater than the RHS.  Otherwise it returns `false`.

__Examples__

- `22 / 7 > 3` => `true`
- `5 > 5` => `false`

## `<` (Less than)

The 'less than' operator returns Boolean `true` if the LHS is numerically less than the RHS.  Otherwise it returns `false`.

__Examples__

- `22 / 7 < 3` => `false`
- `5 < 5` => `false`


## `>=` (Greater than or equals)

The 'greater than or equals' operator returns Boolean `true` if the LHS is numerically greater than or equal to the RHS.  Otherwise it returns `false`.

__Examples__

- `22 / 7 >= 3` => `true`
- `5 >= 5` => `true`


## `<=` (Less than or equals)

The 'less than or equals' operator returns Boolean `true` if the LHS is numerically less than or equal to the RHS.  Otherwise it returns `false`.

__Examples__

- `22 / 7 <= 3` => `false`
- `5 <= 5` => `true`

## `in` (Inclusion)

The array (sequence) inclusion operator returns Boolean `true` if the value of the LHS is included in the array of values on the RHS.  Otherwise it returns `false`.  If the RHS is a single value, then it is treated as a singleton array.

__Examples__

- `"world" in ["hello", "world"]` => `true`
- `"hello" in "hello"` => `true`
- `library.books["Aho" in authors].title`

# Boolean Operators

## `and` (Boolean AND)

The 'and' operator returns Boolean `true` if both operands evaluate to `true`.  If either or both operands is not a Boolean type, then they are first cast to a Boolean using the rules of the `$boolean` function.

__Example__

`library.books["Aho" in authors and price < 50].title`

## `or` (Boolean OR)

The 'or' operator returns Boolean `true` if either operand evaluates to `true`.  If either or both operands is not a Boolean type, then they are first cast to a Boolean using the rules of the `$boolean` function.

__Example__

`library.books[price < 10 or section="diy"].title`

__Please note that Boolean 'NOT' is a [function](boolean-functions#not), not an operator.__

# Other Operators

## `&` (Concatenation)

The string concatenation operator is used to join the string values of the operands into a single resultant string.  If either or both of the operands are not strings, then they are first cast to string using the rules of the `$string` function.

__Example__

`"Hello" & "World"` => `"HelloWorld"`

## `? :` (Conditional)

The conditional ternary operator is used to evaluate one of two alternative expressions based on the result of a predicate (test) condition.  The operator takes the form:

`<test_expr> ? <expr_T> : <expr_F>`

The `<test_expr>` expression is first evaluated.  If it evaluates to Boolean `true`, then the operator returns the result of evaluating the `<expr_T>` expression.  Otherwise it returns the result of evaluating the `<expr_F>` expression. If `<test_expr>` evaluates to a non-Boolean value, then the value is first cast to Boolean using the rules of the `$boolean` function.

__Example__

`Price < 50 ? "Cheap" : "Expensive"`

## `:=` (Variable binding)

The variable binding operator is used to bind the value of the RHS to the variable name defined on the LHS.  The variable binding is scoped to the current block and any nested blocks.  It is an error if the LHS is not a `$` followed by a valid variable name.

__Examples__

- `$five := 5`
- `$square := function($n) { $n * $n }`

## `~>` (Chain)

The function chaining operator is used in the situations where multiple nested functions need to be applied to a value, while making it easy to read. The value on the LHS is evaluated, then passed into the function on the RHS as its first argument.  If the function has any other arguments, then these are passed to the function in parenthesis as usual.  It is an error if the RHS is not a function, or an expression that evaluates to a function.

__Examples__

`$uppercase($substringBefore($substringAfter(Customer.Email, "@"), "."))`

and

`$sum(Account.Order.Product.(Price * Quantity))`

can be more clearly written:

`Customer.Email ~> $substringAfter("@") ~> $substringBefore(".") ~> $uppercase()`

and

`Account.Order.Product.(Price * Quantity) ~> $sum()`

This operator can also be used in a more abstract form to define new functions based on a combination of existing functions.  In this form, there is no value passed in on the LHS of the first function in the chain.

For example, the expression

```
(
  $uppertrim := $trim ~> $uppercase;
  $uppertrim("   Hello    World   ")
)
```

=> `"HELLO WORLD"`

creates a new function `$uppertrim` that performs `$trim` followed by `$uppercase`.


## `... ~> | ... | ... |` (Transform)

The object transform operator is used to modify a copy of an object structure using a pattern/action syntax to target specific modifications while keeping the rest of the structure unchanged.

The syntax has the following structure:

`head ~> | location | update [, delete] |`

where

- `head` evaluates to the object that is to be copied and transformed
- `location` evaluates to the part(s) within the copied object that are to be updated. The `location` expression is evaluated relative to the result of `head`. The result of evaluating `location` must be an object or array of objects.
- `update` evaluates to an object that is merged into the object matched by each `location`. `update` is evaluated relative to the result of `location` and if `location` matched multiple objects, then the update gets evaluated for each one of these. The result of (each) update is merged into the result of `location`.
- `delete` (optional) evaluates to a string or an array of strings. Each string is the name of the name/value pair in each object matched by `location` that is to be removed from the resultant object.

The `~>` operator is the operator for function chaining and passes the value on the left hand side to the function on the right hand side as its first argument. The expression on the right hand side must evaluate to a function, hence the `|...|...|` syntax generates a function with one argument.

Example:

`| Account.Order.Product | {'Price': Price * 1.2} |`

defines a transform that will return a deep copy the object passed to it, but with the `Product` object modified such that its `Price` property has had its value increased by 20%. The first part of the expression is the path location that specifies all of the objects within the overall object to change, and the second part defines an object that will get merged into the object(s) matched by the first part. The merging semantics is the same as that of the `$merge()` function.

This transform definition syntax creates a JSONata function which you can either assign to a variable and use multiple times, or invoke inline.
Example:

`payload ~> |Account.Order.Product|{'Price': Price * 1.2}|`

or:

`$increasePrice := |Account.Order.Product|{'Price': Price * 1.2}|`

This also has the benefit that multiple transforms can be chained together for more complex transformations.

In common with `$merge()`, multiple changes (inserts or updates) can be made to an object.
Example:

`|Account.Order.Product|{'Price': Price * 1.2, 'Total': Price * Quantity}|`

Note that the Total will be calculated using the original price, not the modified one (JSONata is declarative not imperative).

Properties can also be removed from objects.  This is done using the optional `delete` clause which specifies the name(s) of the properties to delete.
Example:

`$ ~> |Account.Order.Product|{'Total': Price * Quantity}, ['Price', 'Quantity']|`

This copies the input, but for each `Product` it inserts a Total and removes the `Price` and `Quantity` properties.

# String functions

## `$string()`
__Signature:__ `$string(arg, prettify)`

Casts the `arg` parameter to a string using the following casting rules

   - Strings are unchanged
   - Functions are converted to an empty string
   - Numeric infinity and NaN throw an error because they cannot be represented as a JSON number
   - All other values are converted to a JSON string using the [JSON.stringify](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) function

If `arg` is not specified (i.e. this function is invoked with no arguments), then the context value is used as the value of `arg`.

If `prettify` is true, then "prettified" JSON is produced. i.e One line per field and lines will be indented based on the field depth.

__Examples__

- `$string(5)` => `"5"`
- `[1..5].$string()` => `["1", "2", "3", "4", "5"]`

## `$length()`
__Signature:__ `$length(str)`

Returns the number of characters in the string `str`.  If `str` is not specified (i.e. this function is invoked with no arguments), then the context value is used as the value of `str`.  An error is thrown if `str` is not a string.

__Examples__

- `$length("Hello World")` => `11`

## `$substring()`
__Signature:__ `$substring(str, start[, length])`

Returns a string containing the characters in the first parameter `str` starting at position `start` (zero-offset).  If `str` is not specified (i.e. this function is invoked with only the numeric argument(s)), then the context value is used as the value of `str`.  An error is thrown if `str` is not a string.

If `length` is specified, then the substring will contain maximum `length` characters.

If `start` is negative then it indicates the number of characters from the end of `str`.  See [substr](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr) for full definition.

__Examples__

- `$substring("Hello World", 3)` => `"lo World"`
- `$substring("Hello World", 3, 5)` => `"lo Wo"`
- `$substring("Hello World", -4)` => `"orld"`
- `$substring("Hello World", -4, 2)` => `"or"`

## `$substringBefore()`
__Signature:__ `$substringBefore(str, chars)`

Returns the substring before the first occurrence of the character sequence `chars` in `str`.  If `str` is not specified (i.e. this function is invoked with only one argument), then the context value is used as the value of `str`.  If `str` does not contain `chars`, then it returns `str`.   An error is thrown if `str` and `chars` are not strings.

__Examples__

- `$substringBefore("Hello World", " ")` => `"Hello"`

## `$substringAfter()`
__Signature:__ `$substringAfter(str, chars)`

Returns the substring after the first occurrence of the character sequence `chars` in `str`.  If `str` is not specified (i.e. this function is invoked with only one argument), then the context value is used as the value of `str`.  If `str` does not contain `chars`, then it returns `str`.   An error is thrown if `str` and `chars` are not strings.

__Examples__

- `$substringAfter("Hello World", " ")` => `"World"`


## `$uppercase()`
__Signature:__ `$uppercase(str)`

Returns a string with all the characters of `str` converted to uppercase.  If `str` is not specified (i.e. this function is invoked with no arguments), then the context value is used as the value of `str`.  An error is thrown if `str` is not a string.

__Examples__

- `$uppercase("Hello World")` => `"HELLO WORLD"`


## `$lowercase()`
__Signature:__ `$lowercase(str)`

Returns a string with all the characters of `str` converted to lowercase.  If `str` is not specified (i.e. this function is invoked with no arguments), then the context value is used as the value of `str`.  An error is thrown if `str` is not a string.

__Examples__

- `$lowercase("Hello World")` => `"hello world"`

## `$trim()`
__Signature:__ `$trim(str)`

Normalizes and trims all whitespace characters in `str` by applying the following steps:

- All tabs, carriage returns, and line feeds are replaced with spaces.
- Contiguous sequences of spaces are reduced to a single space.
- Trailing and leading spaces are removed.

If `str` is not specified (i.e. this function is invoked with no arguments), then the context value is used as the value of `str`.  An error is thrown if `str` is not a string.

__Examples__

- `$trim("   Hello    \n World  ")` => `"Hello World"`


## `$pad()`
__Signature:__ `$pad(str, width [, char])`

Returns a copy of the string `str` with extra padding, if necessary, so that its total number of characters is at least the absolute value of the `width` parameter.  If `width` is a positive number, then the string is padded to the right; if negative, it is padded to the left.  The optional `char` argument specifies the padding character(s) to use.  If not specified, it defaults to the space character.

__Examples__

- `$pad("foo", 5)` => `"foo  "`
- `$pad("foo", -5)` => `"  foo"`
- `$pad("foo", -5, "#")` => `"##foo"`
- `$formatBase(35, 2) ~> $pad(-8, '0')` => `"00100011"`


## `$contains()`
__Signature:__ `$contains(str, pattern)`

Returns `true` if `str` is matched by `pattern`, otherwise it returns `false`. If `str` is not specified (i.e. this function is invoked with one argument), then the context value is used as the value of `str`.

The `pattern` parameter can either be a string or a regular expression (regex).  If it is a string, the function returns `true` if the characters within `pattern` are contained contiguously within `str`.  If it is a regex, the function will return `true` if the regex matches the contents of `str`.

__Examples__

- `$contains("abracadabra", "bra")` => `true`
- `$contains("abracadabra", /a.*a/)` => `true`
- `$contains("abracadabra", /ar.*a/)` => `false`
- `$contains("Hello World", /wo/)` => `false`
- `$contains("Hello World", /wo/i)` => `true`
- `Phone[$contains(number, /^077/)]` => `{ "type": "mobile", "number": "077 7700 1234" }`

## `$split()`
__Signature:__ `$split(str, separator [, limit])`

Splits the `str` parameter into an array of substrings.  If `str` is not specified, then the context value is used as the value of `str`.  It is an error if `str` is not a string.

The `separator` parameter can either be a string or a regular expression (regex).  If it is a string, it specifies the characters within `str` about which it should be split.  If it is the empty string, `str` will be split into an array of single characters.  If it is a regex, it splits the string around any sequence of characters that match the regex.

The optional `limit` parameter is a number that specifies the maximum number of substrings to  include in the resultant array.  Any additional substrings are discarded.  If `limit` is not  specified, then `str` is fully split with no limit to the size of the resultant array.  It is an error if `limit` is not a non-negative number.

__Examples__

- `$split("so many words", " ")` => `[ "so", "many", "words" ]`
- `$split("so many words", " ", 2)` => `[ "so", "many" ]`
- `$split("too much, punctuation. hard; to read", /[ ,.;]+/)` => `["too", "much", "punctuation", "hard", "to", "read"]`

## `$join()`
__Signature:__ `$join(array[, separator])`

Joins an array of component strings into a single concatenated string with each component string separated by the optional `separator` parameter.

It is an error if the input array contains an item which isn't a string.

If `separator` is not specified, then it is assumed to be the empty string, i.e. no separator between the component strings.  It is an error if `separator` is not a string.

__Examples__

- `$join(['a','b','c'])` => `"abc"`
- `$split("too much, punctuation. hard; to read", /[ ,.;]+/, 3) ~> $join(', ')` => `"too, much, punctuation"`

## `$match()`
__Signature:__ `$match(str, pattern [, limit])`

Applies the `str` string to the `pattern` regular expression and returns an array of objects, with each object containing information about each occurrence of a match withing `str`.

The object contains the following fields:

- `match` - the substring that was matched by the regex.
- `index` - the offset (starting at zero) within `str` of this match.
- `groups` - if the regex contains capturing groups (parentheses), this contains an array of strings representing each captured group.

If `str` is not specified, then the context value is used as the value of `str`.  It is an error if `str` is not a string.

__Examples__

`$match("ababbabbcc",/a(b+)/)` =>
```
[
  {
    "match": "ab",
    "index": 0,
    "groups": ["b"]
  },
  {
    "match": "abb",
    "index": 2,
    "groups": ["bb"]
  },
  {
    "match": "abb",
    "index": 5,
    "groups": ["bb" ]
  }
]
```

## `$replace()`
__Signature:__ `$replace(str, pattern, replacement [, limit])`

Finds occurrences of `pattern` within `str` and replaces them with `replacement`.

If `str` is not specified, then the context value is used as the value of `str`.  It is an error if `str` is not a string.

The `pattern` parameter can either be a string or a regular expression (regex).  If it is a string, it specifies the substring(s) within `str` which should be replaced.  If it is a regex, its is used to find .

The `replacement` parameter can either be a string or a function.  If it is a string, it specifies the sequence of characters that replace the substring(s) that are matched by `pattern`.  If `pattern` is a regex, then the `replacement` string can refer to the characters that were matched by the regex as well as any of the captured groups using a `$` followed by a number `N`:

- If `N = 0`, then it is replaced by substring matched by the regex as a whole.
- If `N > 0`, then it is replaced by the substring captured by the Nth parenthesised group in the regex.
- If `N` is greater than the number of captured groups, then it is replaced by the empty string.
- A literal `$` character must be written as `$$` in the `replacement` string

If the `replacement` parameter is a function, then it is invoked for each match occurrence of the `pattern` regex.  The `replacement` function must take a single parameter which will be the object structure of a regex match as described in the `$match` function; and must return a string.

The optional `limit` parameter,  is a number that specifies the maximum number of replacements to make before stopping.  The remainder of the input beyond this limit will be copied to the output unchanged.

__Examples__

  <div class="jsonata-ex">
    <div>$replace("John Smith and John Jones", "John", "Mr")</div>
    <div>"Mr Smith and Mr Jones"</div>
  </div>

  <div class="jsonata-ex">
    <div>$replace("John Smith and John Jones", "John", "Mr", 1)</div>
    <div>"Mr Smith and John Jones"</div>
  </div>

  <div class="jsonata-ex">
    <div>$replace("abracadabra", /a.*?a/, "*")</div>
    <div>"*c*bra"</div>
  </div>

  <div class="jsonata-ex">
    <div>$replace("John Smith", /(\w+)\s(\w+)/, "$2, $1")</div>
    <div>"Smith, John"</div>
  </div>

  <div class="jsonata-ex">
    <div>$replace("265USD", /([0-9]+)USD/, "$$$1")</div>
    <div>"$265"</div>
  </div>

  <div class="jsonata-ex">
    <div>(
  $convert := function($m) {
    ($number($m.groups[0]) - 32) * 5/9 & "C"
  };
  $replace("temperature = 68F today", /(\d+)F/, $convert)
)</div>
    <div>"temperature = 20C today"</div>
  </div>


## `$eval()`
__Signature:__ `$eval(expr [, context])`

Parses and evaluates the string `expr` which contains literal JSON or a JSONata expression using the current context as the context for evaluation.

__Examples__


<div class="jsonata-ex">
  <div>$eval("[1,2,3]")</div>
  </div>[1, 2, 3]</div>
</div>

<div class="jsonata-ex">
  <div>$eval('[1,$string(2),3]')</div>
  </div>[1,"2",3]</div>
</div>


Optionally override the context by specifying the second parameter

## `$base64encode()`
__Signature:__ `$base64encode()`

Converts an ASCII string to a base 64 representation. Each each character in the string is treated as a byte of binary data. This requires that all characters in the string are in the 0x00 to 0xFF range, which includes all characters in URI encoded strings. Unicode characters outside of that range are not supported.

__Examples__

- `$base64encode("myuser:mypass")` => `"bXl1c2VyOm15cGFzcw=="`


## `$base64decode()`
__Signature:__ `$base64decode()`

Converts base 64 encoded bytes to a string, using a UTF-8 Unicode codepage.

__Examples__

- `$base64decode("bXl1c2VyOm15cGFzcw==")` => `"myuser:mypass"`

## `$encodeUrlComponent()`
__Signature:__ `$encodeUrlComponent(str)`

Encodes a Uniform Resource Locator (URL) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character.

__Examples__

- `$encodeUrlComponent("?x=test")` => `"%3Fx%3Dtest"`

## `$encodeUrl()`
__Signature:__ `$encodeUrl(str)`

Encodes a Uniform Resource Locator (URL) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character.

__Examples__

- `$encodeUrl("https://mozilla.org/?x=шеллы")` => `"https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"`

## `$decodeUrlComponent()`
__Signature:__ `$decodeUrlComponent(str)`

Decodes a Uniform Resource Locator (URL) component previously created by encodeUrlComponent.

__Examples__

- `$decodeUrlComponent("%3Fx%3Dtest")` => `"?x=test"`

## `$decodeUrl()`
__Signature:__ `$decodeUrl(str)`

Decodes a Uniform Resource Locator (URL) previously created by encodeUrl.

__Examples__

- `$decodeUrl("https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B")` => `"https://mozilla.org/?x=шеллы"`

# Numeric functions

## `$number()`
__Signature:__ `$number(arg)`

Casts the `arg` parameter to a number using the following casting rules
   - Numbers are unchanged
   - Strings that contain a sequence of characters that represent a legal JSON number are converted to that number
   - Boolean `true` casts to `1`, Boolean `false` casts to `0`
   - All other values cause an error to be thrown.

If `arg` is not specified (i.e. this function is invoked with no arguments), then the context value is used as the value of `arg`. 

__Examples__  
- `$number("5")` => `5`  
- `["1", "2", "3", "4", "5"].$number()` => `[1, 2, 3, 4, 5]`


## `$abs()`
__Signature:__ `$abs(number)`

Returns the absolute value of the `number` parameter, i.e. if the number is negative, it returns the positive value.

If `number` is not specified (i.e. this function is invoked with no arguments), then the context value is used as the value of `number`. 

__Examples__  
- `$abs(5)` => `5`  
- `$abs(-5)` => `-5`

## `$floor()`
__Signature:__ `$floor(number)`

Returns the value of `number` rounded down to the nearest integer that is smaller or equal to `number`. 

If `number` is not specified (i.e. this function is invoked with no arguments), then the context value is used as the value of `number`. 

__Examples__  
- `$floor(5)` => `5`  
- `$floor(5.3)` => `5`  
- `$floor(5.8)` => `5`  
- `$floor(-5.3)` => `-6`  


## `$ceil()`
__Signature:__ `$ceil(number)`

Returns the value of `number` rounded up to the nearest integer that is greater than or equal to `number`. 

If `number` is not specified (i.e. this function is invoked with no arguments), then the context value is used as the value of `number`. 

__Examples__  
- `$ceil(5)` => `5`  
- `$ceil(5.3)` => `6`  
- `$ceil(5.8)` => `6`  
- `$ceil(-5.3)` => `-5`  


## `$round()`
__Signature:__ `$round(number [, precision])`

Returns the value of the `number` parameter rounded to the number of decimal places specified by the optional `precision` parameter.  

The `precision` parameter (which must be an integer) species the number of decimal places to be present in the rounded number.   If `precision` is not specified then it defaults to the value `0` and the number is rounded to the nearest integer.  If `precision` is negative, then its value specifies which column to round to on the left side of the decimal place

This function uses the [Round half to even](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even) strategy to decide which way to round numbers that fall exactly between two candidates at the specified precision.  This strategy is commonly used in financial calculations and is the default rounding mode in IEEE 754.

__Examples__  
- `$round(123.456)` => `123`  
- `$round(123.456, 2)` => `123.46`  
- `$round(123.456, -1)` => `120`  
- `$round(123.456, -2)` => `100`  
- `$round(11.5)` => `12`  
- `$round(12.5)` => `12`  
- `$round(125, -1)` => `120`

## `$power()`
__Signature:__ `$power(base, exponent)`

Returns the value of `base` raised to the power of `exponent` (<code>base<sup>exponent</sup></code>).

If `base` is not specified (i.e. this function is invoked with one argument), then the context value is used as the value of `base`. 

An error is thrown if the values of `base` and `exponent` lead to a value that cannot be represented as a JSON number (e.g. Infinity, complex numbers).

__Examples__  
- `$power(2, 8)` => `256`  
- `$power(2, 0.5)` => `1.414213562373`  
- `$power(2, -2)` => `0.25`  

## `$sqrt()`
__Signature:__ `$sqrt(number)`

Returns the square root of the value of the `number` parameter.

If `number` is not specified (i.e. this function is invoked with one argument), then the context value is used as the value of `number`. 

An error is thrown if the value of `number` is negative.

__Examples__  
- `$sqrt(4)` => `2`
- `$sqrt(2)` => `1.414213562373`  

## `$random()`
__Signature:__ `$random()`

Returns a pseudo random number greater than or equal to zero and less than one (<code>0 &#8804; n < 1</code>) 

__Examples__  
- `$random()` => `0.7973541067127`  
- `$random()` => `0.4029142127028`  
- `$random()` => `0.6558078550072`  


## `$formatNumber()`
__Signature:__ `$formatNumber(number, picture [, options])`

Casts the `number` to a string and formats it to a decimal representation as specified by the `picture` string.

The behaviour of this function is consistent with the XPath/XQuery function [fn:format-number](https://www.w3.org/TR/xpath-functions-31/#func-format-number) as defined in the XPath F&O 3.1 specification.  The picture string parameter defines how the number is formatted and has the [same syntax](https://www.w3.org/TR/xpath-functions-31/#syntax-of-picture-string) as fn:format-number.

The optional third argument `options` is used to override the default locale specific formatting characters such as the decimal separator.  If supplied, this argument must be an object containing name/value pairs specified in the [decimal format](https://www.w3.org/TR/xpath-functions-31/#defining-decimal-format) section of the XPath F&O 3.1 specification.

__Examples__

- `$formatNumber(12345.6, '#,###.00')` => `"12,345.60"`   
- `$formatNumber(1234.5678, "00.000e0")` => `"12.346e2"`   
- `$formatNumber(34.555, "#0.00;(#0.00)")` => `"34.56"`   
- `$formatNumber(-34.555, "#0.00;(#0.00)")` => `"(34.56)"`   
- `$formatNumber(0.14, "01%")` => `"14%"`   
- `$formatNumber(0.14, "###pm", {"per-mille": "pm"})` => `"140pm"`   
- `$formatNumber(1234.5678, "①①.①①①e①", {"zero-digit": "\u245f"})` => `"①②.③④⑥e②"`   


## `$formatBase()`
__Signature:__ `$formatBase(number [, radix])`

Casts the `number` to a string and formats it to an integer represented in the number base specified by the `radix` argument.  If `radix` is not specified, then it defaults to base 10.  `radix` can be between 2 and 36, otherwise an error is thrown.

__Examples__

- `$formatBase(100, 2)` => `"1100100"`
- `$formatBase(2555, 16)` => `"9fb"`


## `$formatInteger()`
__Signature:__ `$formatInteger(number, picture)`

Casts the `number` to a string and formats it to an integer representation as specified by the `picture` string.

The behaviour of this function is consistent with the two-argument version of the XPath/XQuery function [fn:format-integer](https://www.w3.org/TR/xpath-functions-31/#func-format-integer) as defined in the XPath F&O 3.1 specification.  The picture string parameter defines how the number is formatted and has the same syntax as fn:format-integer.

__Examples__

- `$formatInteger(2789, 'w')` => `"two thousand, seven hundred and eighty-nine"`
- `$formatInteger(1999, 'I')` => `"MCMXCIX"`

## `$parseInteger()`
__Signature:__ `$parseInteger(string, picture)`

Parses the contents of the `string` parameter to an integer (as a JSON number) using the format specified by the `picture` string.
The picture string parameter has the same format as `$formatInteger`. Although the XPath specification does not have an equivalent
function for parsing integers, this capability has been added to JSONata.

__Examples__

- `$parseInteger("twelve thousand, four hundred and seventy-six", 'w')` => `12476`
- `$parseInteger('12,345,678', '#,##0')` => `12345678`

# Numeric aggregation functions

## `$sum()`
__Signature:__ `$sum(array)`

Returns the arithmetic sum of an array of numbers.  It is an error if the input array contains an item which isn't a number.

__Example__

- `$sum([5,1,3,7,4])` => `20`

## `$max()`
__Signature:__ `$max(array)`

Returns the maximum number in an array of numbers.  It is an error if the input array contains an item which isn't a number.

__Example__

- `$max([5,1,3,7,4])` => `7`

## `$min()`
__Signature:__ `$min(array)`

Returns the minimum number in an array of numbers.  It is an error if the input array contains an item which isn't a number.

__Example__

- `$min([5,1,3,7,4])` => `1`

## `$average()`
__Signature:__ `$average(array)`

Returns the mean value of an array of numbers.  It is an error if the input array contains an item which isn't a number.

__Example__

- `$average([5,1,3,7,4])` => `4`

# Boolean functions

## `$boolean()`
__Signature:__ `$boolean(arg)`

Casts the argument to a Boolean using the following rules:
  
| Argument type | Result |
| ------------- | ------ |
| Boolean | unchanged |
| string: empty | `false`|
| string: non-empty | `true` |
| number: 0 | `false`|
| number: non-zero | `true` |
| null | `false`|
| array: empty | `false` |
| array: contains a member that casts to `true` |  `true` |
| array: all members cast to `false` |  `false` |
| object: empty | `false` |
| object: non-empty | `true` |
| function | `false` |


## `$not()`
__Signature:__ `$not(arg)`

Returns Boolean NOT on the argument.  `arg` is first cast to a boolean
  
## `$exists()`
__Signature:__ `$exists(arg)`

Returns Boolean `true` if the arg expression evaluates to a value, or `false` if the expression does not match anything (e.g. a path to a non-existent field reference).

# Array Functions

## `$count()`
__Signature:__ `$count(array)`

Returns the number of items in the `array` parameter.  If the `array` parameter is not an array, but rather a value of another JSON type, then the parameter is treated as a singleton array containing that value, and this function returns `1`.

If `array` is not specified, then the context value is used as the value of `array`.

__Examples__
- `$count([1,2,3,1])` => `4`
- `$count("hello")` => 1

## `$append()`
__Signature:__ `$append(array1, array2)`

Returns an array containing the values in `array1` followed by the values in `array2`.  If either parameter is not an array, then it is treated as a singleton array containing that value.

__Examples__
- `$append([1,2,3], [4,5,6])` => `[1,2,3,4,5,6]`
- `$append([1,2,3], 4)` => `[1,2,3,4]`
- `$append("Hello", "World")` => `["Hello", "World"]`


## `$sort()`
__Signature:__ `$sort(array [, function])`

Returns an array containing all the values in the `array` parameter, but sorted into order.  If no `function` parameter is supplied, then the `array` parameter must contain only numbers or only strings, and they will be sorted in order of increasing number, or increasing unicode codepoint respectively.

If a comparator `function` is supplied, then is must be a function that takes two parameters:

`function(left, right)`

This function gets invoked by the sorting algorithm to compare two values `left` and `right`.  If the value of `left` should be placed after the value of `right` in the desired sort order, then the function must return Boolean `true` to indicate a swap.  Otherwise it must return `false`.

__Example__
```
$sort(Account.Order.Product, function($l, $r) {
  $l.Description.Weight > $r.Description.Weight
})
```

This sorts the products in order of increasing weight.

The sorting algorithm is *stable* which means that values within the original array which are the same according to the comparator function will remain in the original order in the sorted array.

## `$reverse()`
__Signature:__ `$reverse(array)`

Returns an array containing all the values from the `array` parameter, but in reverse order.

__Examples__
- `$reverse(["Hello", "World"])` => `["World", "Hello"]`
- `[1..5] ~> $reverse()` => `[5, 4, 3, 2, 1]`

## `$shuffle()`
__Signature:__ `$shuffle(array)`

Returns an array containing all the values from the `array` parameter, but shuffled into random order.

__Examples__
- `$shuffle([1..9])` => `[6, 8, 2, 3, 9, 5, 1, 4, 7]`

## `$distinct()`
__Signature__ `$distinct(array)`

Returns an array containing all the values from the `array` parameter, but with any duplicates removed.  Values are tested for deep equality as if by using the [equality operator](comparison-operators#equals).

__Examples__
- `$distinct([1,2,3,3,4,3,5])` => `[1, 2, 3, 4, 5]`
- `$distinct(Account.Order.Product.Description.Colour)` => `[ "Purple", "Orange", "Black" ]`

## `$zip()`
__Signature:__ `$zip(array1, ...)`

Returns a convolved (zipped) array containing grouped arrays of values from the `array1` ... `arrayN` arguments from index 0, 1, 2, etc.

This function accepts a variable number of arguments.  The length of the returned array is equal to the length of the shortest array in the arguments.

__Examples__
- `$zip([1,2,3], [4,5,6])` => `[[1,4] ,[2,5], [3,6]]`
- `$zip([1,2,3],[4,5],[7,8,9])` => `[[1,4,7], [2,5,8]]`

# Object functions

## `$keys()`
__Signature:__ `$keys(object)`

Returns an array containing the keys in the object.  If the argument is an array of objects, then the array returned contains a de-duplicated list of all the keys in all of the objects.

## `$lookup()`
__Signature:__ `$lookup(object, key)`

Returns the value associated with `key` in `object`. If the first argument is an array of objects, then all of the objects in the array are searched, and the values associated with all occurrences of `key` are returned.


## `$spread()`
__Signature:__ `$spread(object)`

Splits an `object` containing key/value pairs into an array of objects, each of which has a single key/value pair from the input `object`.  If the parameter is an array of objects, then the resultant array contains an object for every key/value pair in every object in the supplied array.

## `$merge()`
__Signature:__ `$merge(array<object>)`

Merges an array of objects into a single object containing all the key/value pairs from each of the objects in the input array.  If any of the input objects contain the same key, then the returned object will contain the value of the last one in the array.  It is an error if the input array contains an item that is not an object.

## `$sift()`
__Signature:__ `$sift(object, function)`

See definition under 'Higher-order functions'

## `$each()`
__Signature:__ `$each(object, function)`

Returns an array containing the values return by the `function` when applied to each key/value pair in the `object`.

The `function` parameter will get invoked with two arguments:

`function(value, name)`

where the `value` parameter is the value of each name/value pair in the object and `name` is its name.  The `name` parameter is optional.

__Examples__

`$each(Address, function($v, $k) {$k & ": " & $v})`

=>

    [
      "Street: Hursley Park",
      "City: Winchester",
      "Postcode: SO21 2JN"
    ]

## `$error()`
__Signature:__`$error(message)`

Deliberately throws an error with an optional `message`

## `$assert()`
__Signature:__`$assert(condition, message)`

If condition is true, the function returns undefined. If the condition is false, an exception is thrown with the message as the message of the exception.

## `$type()`
__Signature:__`$type(value)`

Evaluates the type of `value` and returns one of the following strings:
* `"null"`
* `"number"`
* `"string"`
* `"boolean"`
* `"array"`
* `"object"`
* `"function"`
Returns (non-string) `undefined` when `value` is `undefined`.

# Date/Time functions

## `$now()`
__Signature:__ `$now([picture [, timezone]])`

Generates a UTC timestamp in ISO 8601 compatible format and returns it as a string.  All invocations of `$now()` within an evaluation of an expression will all return the same timestamp value.

If the optional `picture` and `timezone` parameters are supplied, then the current timestamp is formatted as described by the [`$fromMillis()`](#frommillis) function.

__Examples__

- `$now()` => `"2017-05-15T15:12:59.152Z"`


## `$millis()`
__Signature:__ `$millis()`

Returns the number of milliseconds since the Unix *Epoch* (1 January, 1970 UTC) as a number.  All invocations of `$millis()` within an evaluation of an expression will all return the same value.

__Examples__  
- `$millis()` => `1502700297574`


## `$fromMillis()`
__Signature:__ `$fromMillis(number [, picture [, timezone]])`

Convert the `number` representing milliseconds since the Unix *Epoch* (1 January, 1970 UTC) to a formatted string representation of the timestamp  as specified by the `picture` string.

If the optional `picture` parameter is omitted, then the timestamp is formatted in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.

If the optional `picture` string is supplied, then the timestamp is formatted occording to the representation specified in that string.
The behaviour of this function is consistent with the two-argument version of the XPath/XQuery function [fn:format-dateTime](https://www.w3.org/TR/xpath-functions-31/#func-format-dateTime) as defined in the XPath F&O 3.1 specification.  The picture string parameter defines how the timestamp is formatted and has the [same syntax](https://www.w3.org/TR/xpath-functions-31/#date-picture-string) as fn:format-dateTime.

If the optional `timezone` string is supplied, then the formatted timestamp will be in that timezone.  The `timezone` string should be in the
format "±HHMM", where ± is either the plus or minus sign and HHMM is the offset in hours and minutes from UTC.  Positive offset for timezones
east of UTC, negative offset for timezones west of UTC. 

__Examples__

- `$fromMillis(1510067557121)` => `"2017-11-07T15:12:37.121Z"`
- `$fromMillis(1510067557121, '[M01]/[D01]/[Y0001] [h#1]:[m01][P]')` => `"11/07/2017 3:12pm"`
- `$fromMillis(1510067557121, '[H01]:[m01]:[s01] [z]', '-0500')` => `"10:12:37 GMT-05:00"`

## `$toMillis()`
__Signature:__ `$toMillis(timestamp [, picture])`

Convert a `timestamp` string to the number of milliseconds since the Unix *Epoch* (1 January, 1970 UTC) as a number. 

If the optional `picture` string is not specified, then the format of the timestamp is assumed to be [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). An error is thrown if the string is not in the correct format.

If the `picture` string is specified, then the format is assumed to be described by this picture string using the [same syntax](https://www.w3.org/TR/xpath-functions-31/#date-picture-string) as the XPath/XQuery function [fn:format-dateTime](https://www.w3.org/TR/xpath-functions-31/#func-format-dateTime), defined in the XPath F&O 3.1 specification.  

__Examples__

- `$toMillis("2017-11-07T15:07:54.972Z")` => `1510067274972`

# Higher order functions

## `$map()`
__Signature:__ `$map(array, function)`

Returns an array containing the results of applying the `function` parameter to each value in the `array` parameter.

The function that is supplied as the second parameter must have the following signature:

`function(value [, index [, array]])`

Each value in the input array is passed in as the first parameter in the supplied function.  The index (position) of that value in the input array is passed in as the second parameter, if specified.  The whole input array is passed in as the third parameter, if specified.

__Examples__
- `$map([1..5], $string)` => `["1", "2", "3", "4", "5"]`

With user-defined (lambda) function:
```
$map(Email.address, function($v, $i, $a) {
   'Item ' & ($i+1) & ' of ' & $count($a) & ': ' & $v
})
```

evaluates to:

```
[
  "Item 1 of 4: fred.smith@my-work.com",
  "Item 2 of 4: fsmith@my-work.com",
  "Item 3 of 4: freddy@my-social.com",
  "Item 4 of 4: frederic.smith@very-serious.com"
]
```

## `$filter()`
__Signature:__ `$filter(array, function)`

Returns an array containing only the values in the `array` parameter that satisfy the `function` predicate (i.e. `function` returns Boolean `true` when passed the value).

The function that is supplied as the second parameter must have the following signature:

`function(value [, index [, array]])`

Each value in the input array is passed in as the first parameter in the supplied function.  The index (position) of that value in the input array is passed in as the second parameter, if specified.  The whole input array is passed in as the third parameter, if specified.

__Example__
The following expression returns all the products whose price is higher than average:
```
$filter(Account.Order.Product, function($v, $i, $a) {
  $v.Price > $average($a.Price)
})
```

## `$single()`
__Signature:__ `$single(array, function)`

Returns the one and only one value in the `array` parameter that satisfy the `function` predicate (i.e. `function` returns Boolean `true` when passed the value).  Throws an exception if the number of matching values is not exactly one.

The function that is supplied as the second parameter must have the following signature:

`function(value [, index [, array]])`

Each value in the input array is passed in as the first parameter in the supplied function.  The index (position) of that value in the input array is passed in as the second parameter, if specified.  The whole input array is passed in as the third parameter, if specified.

__Example__
The following expression the product in the order whose SKU is `"0406654608"`:
```
$single(Account.Order.Product, function($v, $i, $a) {
  $v.SKU = "0406654608"
})
```

## `$reduce()`
__Signature:__ `$reduce(array, function [, init])`

Returns an aggregated value derived from applying the `function` parameter successively to each value in `array` in combination with the result of the previous application of the function.

The `function` must accept at least two arguments, and behaves like an infix operator between each value within the `array`.  The signature of this supplied function must be of the form:

`myfunc($accumulator, $value[, $index[, $array]])`

__Example__

```
(
  $product := function($i, $j){$i * $j};
  $reduce([1..5], $product)
)
```

This multiplies all the values together in the array `[1..5]` to return `120`.

If the optional `init` parameter is supplied, then that value is used as the initial value in the aggregation (fold) process.  If not supplied, the initial value is the first value in the `array` parameter.

## `$sift()`
__Signature:__ `$sift(object, function)`

Returns an object that contains only the key/value pairs from the `object` parameter that satisfy the predicate `function` passed in as the second parameter.

If `object` is not specified, then the context value is used as the value of `object`.  It is an error if `object` is not an object.

The function that is supplied as the second parameter must have the following signature:

`function(value [, key [, object]])`

Each value in the input object is passed in as the first parameter in the supplied function.  The key (property name) of that value in the input object is passed in as the second parameter, if specified.  The whole input object is passed in as the third parameter, if specified.

__Example__

```
Account.Order.Product.$sift(function($v, $k) {$k ~> /^Product/})
```

This sifts each of the `Product` objects such that they only contain the fields whose keys start with the string "Product" (using a regex). This example returns:

```
[
  {
    "Product Name": "Bowler Hat",
    "ProductID": 858383
  },
  {
    "Product Name": "Trilby hat",
    "ProductID": 858236
  },
  {
    "Product Name": "Bowler Hat",
    "ProductID": 858383
  },
  {
    "ProductID": 345664,
    "Product Name": "Cloak"
  }
]
```
