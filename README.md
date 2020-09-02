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

Now, You can simply use it in your view file like below:
```html
<p>{{'Test Match String' | camelcase}}</p>
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
#### capitalcase
> Transform into a space separated string with each word capitalized.
```html
<p>{{'test match string' | capitalcase}}</p>
```

#### constantcase
> Transform into upper case string with an underscore between words.
```html
<p>{{'test Match string' | constantcase}}</p>
```
#### dotcase
> Transform into a lower case string with a period between words.
```html
<p>{{'test Match string' | dotcase}}</p>
```
#### headercase
> Transform into a dash separated string of capitalized words.
```html
<p>{{'test Match string ' | headercase}}</p>
```
#### paramcase
> Transform into a lower cased string with dashes between words.
```html
<p>{{'test Match string ' | paramcase}}</p>
```
#### pascalcase
> Transform into a string of capitalized words without separators.
```html
<p>{{'test Match string ' | pascalcase}}</p>
```
#### pathcase
> Transform into a lower case string with slashes between words.
```html
<p>{{'test Match string ' | pathcase}}</p>
```
#### sentencecase
> Transform into a lower case with spaces between words, then capitalize the string.
```html
<p>{{'test Match string ' | sentencecase}}</p>
```
#### snakecase
> Transform into a lower case string with underscores between words.
```html
<p>{{'test Match string ' | snakecase}}</p>
```

## License
[MIT](https://github.com/RohitG157/NgxStrCase/blob/master/LICENSE)