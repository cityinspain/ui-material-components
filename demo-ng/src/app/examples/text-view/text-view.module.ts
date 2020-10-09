import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptMaterialTextViewModule } from '@nativescript-community/ui-material-textview/angular';
import { TextViewComponent } from './text-view.component';

@NgModule({
    declarations: [TextViewComponent],
    imports: [NativeScriptCommonModule, NativeScriptMaterialTextViewModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TextViewModule {}
