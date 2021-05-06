import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptMaterialTabsModule } from '@nativescript-community/ui-material-tabs/angular';
import { TabsComponent } from './tabs.component';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';

@NgModule({
    declarations: [TabsComponent],
    imports: [NativeScriptCommonModule, NativeScriptMaterialTabsModule, NativeScriptUIListViewModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule {}
