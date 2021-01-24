import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MembersSectionComponent } from './members-section/members-section.component';
import { MemberComponent } from './member/member.component';
import { MemberImageComponent } from './member-image/member-image.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MemberHeaderComponent } from './member-header/member-header.component';
import { MemberContactComponent } from './member-contact/member-contact.component';
import { SectionResolve } from './section-resolve';

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
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [SectionResolve],
    bootstrap: [AppComponent]
})
export class AppModule { }
