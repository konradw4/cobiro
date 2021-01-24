import { Component, Input } from '@angular/core';

@Component({
    selector: 'member-header',
    templateUrl: './member-header.component.html',
    styleUrls: ['./member-header.component.scss']
})
export class MemberHeaderComponent {
    @Input() public title: string;
    @Input() public description: string;

    constructor() { }
}
