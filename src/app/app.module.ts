import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MembersSectionComponent } from './members-section/members-section.component';
import { MemberComponent } from './member/member.component';
import { MemberImageComponent } from './member-image/member-image.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MemberHeaderComponent } from './member-header/member-header.component';
import { MemberContactComponent } from './member-contact/member-contact.component';

@NgModule({
    declarations: [
        AppComponent,
        MembersSectionComponent,
        MemberComponent,
        MemberImageComponent,
        MemberDetailsComponent,
        MemberHeaderComponent,
        MemberContactComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
