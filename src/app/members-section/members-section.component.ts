import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Member } from '../data/model/member';
import { SectionService } from './section.service';

@Component({
    selector: 'members-section',
    templateUrl: './members-section.component.html',
    styleUrls: ['./members-section.component.scss']
})
export class MembersSectionComponent implements OnInit, OnDestroy {
    public title: string;
    public members: Member[];
    private subscriptions: Subscription = new Subscription();

    constructor(
        private sectionService: SectionService,
        private route: ActivatedRoute
    ) { }

    public ngOnInit(): void {
        const data = this.route.snapshot.data['data'];
        this.title = this.sectionService.getSectionTitle(data);
        this.members = this.sectionService.getMembers(data);
    }

    public ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
