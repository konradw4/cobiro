import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionResolve } from './services/section-resolve';

import { MembersSectionComponent } from './containers/members-section/members-section.component';
import { MemberComponent } from './components/member-item/member-item.component';
import { MemberImageComponent } from './components/member-image/member-image.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { MemberHeaderComponent } from './components/member-header/member-header.component';
import { MemberContactComponent } from './components/member-contact/member-contact.component';

@NgModule({
  declarations: [
    MembersSectionComponent,
    MemberComponent,
    MemberImageComponent,
    MemberDetailsComponent,
    MemberHeaderComponent,
    MemberContactComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    SectionResolve
  ],
})
export class MembersModule { }
