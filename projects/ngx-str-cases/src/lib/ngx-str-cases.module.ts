import { NgModule } from '@angular/core';
import { CamelcasePipe } from './pipes/camelcase.pipe';
import { CapitalcasePipe } from './pipes/capitalcase.pipe';
import { ConstantcasePipe } from './pipes/constantcase.pipe';
import { DotcasePipe } from './pipes/dotcase.pipe';
import { HeadercasePipe } from './pipes/headercase.pipe';
import { ParamcasePipe } from './pipes/paramcase.pipe';
import { PascalcasePipe } from './pipes/pascalcase.pipe';
import { PathcasePipe } from './pipes/pathcase.pipe';
import { SnakecasePipe } from './pipes/snakecase.pipe';
import { SentencecasePipe } from './pipes/sentencecase.pipe';

@NgModule({
    declarations: [
        CamelcasePipe, 
        CapitalcasePipe, 
        ConstantcasePipe, 
        DotcasePipe, 
        HeadercasePipe, 
        ParamcasePipe, 
        PascalcasePipe, 
        PathcasePipe, 
        SnakecasePipe, 
        SentencecasePipe
    ],
    imports: [
    ],
    exports: [
        CamelcasePipe, 
        CapitalcasePipe, 
        ConstantcasePipe, 
        DotcasePipe, 
        HeadercasePipe, 
        ParamcasePipe, 
        PascalcasePipe, 
        PathcasePipe, 
        SnakecasePipe, 
        SentencecasePipe
    ]
})
export class NgxStrCasesModule { }
