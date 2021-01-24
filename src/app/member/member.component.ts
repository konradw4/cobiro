import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
    @Input() public memberData;

    constructor() { }

    ngOnInit(): void {
    }

}
