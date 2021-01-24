import { Component, OnInit } from '@angular/core';

import { DataService } from '../data/data.service';
import { Attributes } from '../data/model/attributes';
import { Member } from '../data/model/member';

@Component({
    selector: 'members-section',
    templateUrl: './members-section.component.html',
    styleUrls: ['./members-section.component.scss']
})
export class MembersSectionComponent implements OnInit {

    public title: string;
    public members: Member[];

    constructor(private dataService: DataService) { }

    public ngOnInit(): void {
        this.dataService.getAttributes().subscribe((data: Attributes) => {            
            this.title = this.getSectionTitle(data);
            this.members = this.getMembers(data);
        });
    }

    private getSectionTitle = (data: Attributes): string => {
        return data.title;
    };

    private getMembers = (data: Attributes): Member[] => {
        const result = [];
        for (const member of Object.keys(data.memberCards)) {
            result.push(data.memberCards[member]);
        }
        return result;
    };

}
