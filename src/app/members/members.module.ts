import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionResolve } from './services/section-resolve';

import { MembersSectionComponent } from './containers/members-section/members-section.component';
import { MemberImageComponent } from './components/member-image/member-image.component';
import { MemberTitleComponent } from './components/member-title/member-title.component';
import { MemberParagraphComponent } from './components/member-paragraph/member-paragraph.component';
import { MemberLinkComponent } from './components/member-link/member-link.component';
import { MemberBlockComponent } from './components/member-block/member-block.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';

@NgModule({
  declarations: [
    MembersSectionComponent,
    MemberImageComponent,
    MemberTitleComponent,
    MemberParagraphComponent,
    MemberLinkComponent,
    MemberBlockComponent,
    SectionHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    SectionResolve
  ],
})
export class MembersModule { }
