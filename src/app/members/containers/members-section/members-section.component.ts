import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { DataService } from 'src/app/data/data.service';
import { Attributes } from 'src/app/data/model/attributes';

import { Member } from '../../../data/model/member';
import { MembersService } from '../../services/members.service';

@Component({
    selector: 'members-section',
    templateUrl: './members-section.component.html',
    styleUrls: ['./members-section.component.scss']
})
export class MembersSectionComponent implements OnInit {
    public title$: Observable<string>;
    public members$: Observable<Member[]>;
    public attributes$: Observable<Attributes>;

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService,
        private sectionService: MembersService
    ) { }

    public ngOnInit(): void {
        this.attributes$ = this.route.params.pipe(
            map(params => params.id),
            switchMap(id => this.dataService.getAttributes(id)),
            shareReplay()
        );

        this.title$ = this.attributes$.pipe(
            map(element => element.title)
        );

        this.members$ = this.attributes$.pipe(
            map(element => this.sectionService.getMembers(element))
        );
    }
}
