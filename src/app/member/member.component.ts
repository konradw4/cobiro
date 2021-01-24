import { Component, Input } from '@angular/core';

@Component({
    selector: 'member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.scss']
})
export class MemberComponent {
    @Input() public memberData;

    constructor() { }
}
