import { Component, Input } from '@angular/core';

import { MemberDetails } from '../data/model/member-details';

@Component({
    selector: 'member-details',
    templateUrl: './member-details.component.html'
})
export class MemberDetailsComponent {
    @Input() public membersDetails: MemberDetails;

    constructor() { }
}
