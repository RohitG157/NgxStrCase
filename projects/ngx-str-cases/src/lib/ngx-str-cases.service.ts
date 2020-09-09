import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StringTransform {

    constructor() { }

    /*
        Convert String into Camel Case
    */
    camelCase(value: string): string {
        return value 
            .replace(/\s(.)/g, function(a) { 
                return a.toUpperCase(); 
            }) 
            .replace(/\s/g, '') 
            .replace(/^(.)/, function(b) { 
                return b.toLowerCase(); 
            }); 
    }

    /*
        Convert String into Capital Case
    */
    capitalCase(value: string): string {
        let valueArr: any = value.trim().split(" ");

        for (let i = 0, x = valueArr.length; i < x; i++) {
            valueArr[i] = valueArr[i][0].toUpperCase() + valueArr[i].substr(1);
        }

        return valueArr.join(" ");
    }

    /*
        Convert String into Constant Case
    */
    constantCase(value: string): string {
        return value.trim().toUpperCase().split(" ").join("_");
    }

    /*
        Convert String into Dot Case
    */
    dotCase(value: string): string {
        return value.trim().toLowerCase().split(" ").join(".");
    }

    /*
        Convert String into Header Case
    */
    headerCase(value: string): string {
        let valueArr = value.trim().split(" ");

        for (let i = 0, x = valueArr.length; i < x; i++) {
            valueArr[i] = valueArr[i][0].toUpperCase() + valueArr[i].substr(1);
        }

        return valueArr.join("-");
    }

    /*
        Convert String into Param Case
    */
    paramCase(value: string): string {
        return value.trim().toLowerCase().split(" ").join("-");
    }

    /*
        Convert String into Pascal Case
    */
    pascalCase(value: string): string {
        let valueArr = value.trim().split(" ");

        for (let i = 0, x = valueArr.length; i < x; i++) {
            valueArr[i] = valueArr[i][0].toUpperCase() + valueArr[i].substr(1);
        }

        return valueArr.join("");
    }

    /*
        Convert String into Path Case
    */
    pathCase(value: string): string {
        return value.trim().toLowerCase().split(" ").join("/");
    }

    /*
        Convert String into Snake Case
    */
    snakeCase(value: string): string {
        return value.trim().toLowerCase().split(" ").join("_");
    }

    /*
        Convert String into Sentence Case
    */
    sentenceCase(value: string): string {
        return value.trim().charAt(0).toUpperCase() + value.trim().slice(1);
    }
}
