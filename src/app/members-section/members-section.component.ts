import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../data/data.service';
import { Attributes } from '../data/model/attributes';
import { Member } from '../data/model/member';
import { SectionService } from './section.service';

@Component({
    selector: 'members-section',
    templateUrl: './members-section.component.html',
    styleUrls: ['./members-section.component.scss']
})
export class MembersSectionComponent implements OnInit, OnDestroy {
    @Input() private sectionID: string;

    public title: string;
    public members: Member[];
    private subscriptions: Subscription = new Subscription();

    constructor(
        private dataService: DataService,
        private sectionService: SectionService
    ) { }

    public ngOnInit(): void {
        this.subscriptions.add(
            this.dataService.getAttributes(this.sectionID).subscribe((data: Attributes) => {
                this.title = this.sectionService.getSectionTitle(data);
                this.members = this.sectionService.getMembers(data);
            })
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
