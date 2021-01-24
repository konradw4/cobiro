import { Component, Input } from '@angular/core';

@Component({
    selector: 'member-item',
    templateUrl: './member-item.component.html',
    styleUrls: ['./member-item.component.scss']
})
export class MemberComponent {
    @Input() public memberData;

    constructor() { }
}
