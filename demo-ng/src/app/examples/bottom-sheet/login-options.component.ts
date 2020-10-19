import { Component, OnInit } from '@angular/core';
import { BottomSheetParams } from '@nativescript-community/ui-material-bottomsheet/angular';
import { ItemEventData } from '@nativescript/core/ui/list-view';

@Component({
    selector: 'ns-login-options',
    templateUrl: 'login-options.component.html'
})
export class LoginOptionsComponent implements OnInit {
    options: string[];

    showExtraContent: boolean = false;

    constructor(private params: BottomSheetParams) {}

    ngOnInit() {
        this.options = this.params.context;
    }

    onTap({ index }: ItemEventData) {
        this.params.closeCallback(this.options[index]);
    }

    // toggle the 'extra content' gridlayout in row 1.
    // this causes the sliding issue to occur.
    toggleExtraContent() {
        this.showExtraContent = !this.showExtraContent;
    }
}
