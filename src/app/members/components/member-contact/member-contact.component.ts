import { Component, Input } from '@angular/core';

@Component({
    selector: 'member-contact',
    templateUrl: './member-contact.component.html',
    styleUrls: ['./member-contact.component.scss']
})
export class MemberContactComponent {
    @Input() public link: string;
    @Input() public phone: string;

    constructor() { }
}
