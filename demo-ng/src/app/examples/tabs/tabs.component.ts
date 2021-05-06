import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ns-buttons',
    templateUrl: './tabs.component.html',
    moduleId: module.id
})
export class TabsComponent implements OnInit {
    items = [1, 2, 3, 4, 5, 6, 7];
    ngOnInit() {}
}
