import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Member } from '../../data/model/member';
import { SectionService } from './section.service';

@Component({
    selector: 'members-section',
    templateUrl: './members-section.component.html',
    styleUrls: ['./members-section.component.scss']
})
export class MembersSectionComponent implements OnInit {
    public title: string;
    public members: Member[];

    constructor(
        private sectionService: SectionService,
        private route: ActivatedRoute
    ) { }

    public ngOnInit(): void {
        const data = this.route.snapshot.data['data'];
        this.title = this.sectionService.getSectionTitle(data);
        this.members = this.sectionService.getMembers(data);
    }
}
