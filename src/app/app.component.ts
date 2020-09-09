import { Component } from '@angular/core';
import { StringTransform } from 'ngx-str-cases';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = "ngx-str-case";

    constructor(
        private stringOps: StringTransform
    ) {
        let camelCaseString = this.stringOps.camelCase('test match string'); //testMatchString
        console.log(camelCaseString);
        let capitalCaseString = this.stringOps.capitalCase('test match string'); //Test Match String
        console.log(capitalCaseString);
        let constantCaseString = this.stringOps.constantCase('test match string'); // TEST_MATCH_STRING
        console.log(constantCaseString);
        let dotCaseString = this.stringOps.dotCase('test match string'); // test.match.string
        console.log(dotCaseString);
        let headerCaseString = this.stringOps.headerCase('test match string'); //Test-Match-String
        console.log(headerCaseString);
        let paramCaseString = this.stringOps.paramCase('test match string'); //test-match-string
        console.log(paramCaseString);
        let pascalCaseString = this.stringOps.pascalCase('test match string'); //TestMatchString
        console.log(pascalCaseString);
        let pathCaseString = this.stringOps.pathCase('test match string'); //test/match/string
        console.log(pathCaseString);
        let snakelCaseString = this.stringOps.snakeCase('test match string'); //test_match_string
        console.log(snakelCaseString);
        let sentenceCaseString = this.stringOps.sentenceCase('test match string'); //Test match string
        console.log(sentenceCaseString);
    }
}
