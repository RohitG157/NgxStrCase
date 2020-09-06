# NgxStrCases

Transform a string between CamelCase, CapitalCase, ConstantCase, DotCase, HeaderCase, ParamCase, PascalCase, PathCase, SnakeCase, SentenceCase.

## Installation

```bash
npm install ngx-str-cases
```

## Usage

Edit your `app.module.ts` file:

```typescript
import { NgxStrCasesModule } from 'ngx-str-cases';

...
imports: [
    BrowserModule,
    NgxStrCasesModule
],

...
```

Now, there are two ways to use this awesome library:
- By calling the method in the component file
- By using as Pipe in the view file


### You can simply use it in your view file like below:
```html
<p>{{'Test Match String' | camelcase}}</p>
```

### You can call the specific transform method in your component file:
```typescript
import { StringOperation } from 'ngx-str-cases';

...
constructor(private stringOps: StringOperation) {
    let camelCaseString = stringOps.camelCase('test match string'); //testMatchString
}

```

## Core

- [`camelcase`](#camelcase)
- [`capitalcase`](#capitalcase)
- [`constantcase`](#constantcase)
- [`dotcase`](#dotcase)
- [`headercase`](#headercase)
- [`paramcase`](#paramcase)
- [`pascalcase`](#pascalcase)
- [`pathcase`](#pathcase)
- [`sentencecase`](#sentencecase)
- [`snakecase`](#snakecase)

#### camelcase
> Transform into a string with the separator denoted by the next word capitalized.
```html
<p>{{'Test Match String' | camelcase}}</p>
```
or
```typescript
import { StringOperation } from 'ngx-str-cases';

...
constructor(private stringOps: StringOperation) {
    let camelCaseString = stringOps.camelCase('test match string'); //testMatchString
}

```
#### capitalcase
> Transform into a space separated string with each word capitalized.
```html
<p>{{'test match string' | capitalcase}}</p>
```
or
```typescript
import { StringOperation } from 'ngx-str-cases';

...
constructor(private stringOps: StringOperation) {
    let camelCaseString = stringOps.capitalCase('test match string'); //Test Match String
}

```
#### constantcase
> Transform into upper case string with an underscore between words.
```html
<p>{{'test Match string' | constantcase}}</p>
```
or
```typescript
import { StringOperation } from 'ngx-str-cases';

...
constructor(private stringOps: StringOperation) {
    let camelCaseString = stringOps.constantCase('test match string'); //TEST_MATCH_STRING
}

```
#### dotcase
> Transform into a lower case string with a period between words.
```html
<p>{{'test Match string' | dotcase}}</p>
```
or
```typescript
import { StringOperation } from 'ngx-str-cases';

...
constructor(private stringOps: StringOperation) {
    let camelCaseString = stringOps.dotCase('test match string'); //test.match.string
}

```
#### headercase
> Transform into a dash separated string of capitalized words.
```html
<p>{{'test Match string ' | headercase}}</p>
```
or
```typescript
import { StringOperation } from 'ngx-str-cases';

...
constructor(private stringOps: StringOperation) {
    let camelCaseString = stringOps.headerCase('test match string'); //Test-Match-String
}

```
#### paramcase
> Transform into a lower cased string with dashes between words.
```html
<p>{{'test Match string ' | paramcase}}</p>
```
or
```typescript
import { StringOperation } from 'ngx-str-cases';

...
constructor(private stringOps: StringOperation) {
    let camelCaseString = stringOps.paramCase('test match string'); //test-match-string
}

```
#### pascalcase
> Transform into a string of capitalized words without separators.
```html
<p>{{'test Match string ' | pascalcase}}</p>
```
or
```typescript
import { StringOperation } from 'ngx-str-cases';

...
constructor(private stringOps: StringOperation) {
    let camelCaseString = stringOps.pascalCase('test match string'); //TestMatchString
}

```
#### pathcase
> Transform into a lower case string with slashes between words.
```html
<p>{{'test Match string ' | pathcase}}</p>
```
or
```typescript
import { StringOperation } from 'ngx-str-cases';

...
constructor(private stringOps: StringOperation) {
    let camelCaseString = stringOps.pathCase('test match string'); //test/match/string
}

```
#### sentencecase
> Transform into a lower case with spaces between words, then capitalize the string.
```html
<p>{{'test Match string ' | sentencecase}}</p>
```
or
```typescript
import { StringOperation } from 'ngx-str-cases';

...
constructor(private stringOps: StringOperation) {
    let camelCaseString = stringOps.sentenceCase('test match string'); //Test match string
}

```
#### snakecase
> Transform into a lower case string with underscores between words.
```html
<p>{{'test Match string ' | snakecase}}</p>
```
or
```typescript
import { StringOperation } from 'ngx-str-cases';

...
constructor(private stringOps: StringOperation) {
    let camelCaseString = stringOps.snakeCase('test match string'); //test_match_string
}

```

## License
[MIT](https://github.com/RohitG157/NgxStrCase/blob/master/LICENSE)