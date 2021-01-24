import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { SectionResolve } from './members/members-section/section-resolve';

import { AppComponent } from './app.component';
import { MembersSectionComponent } from './members/members-section/members-section.component';
import { MemberComponent } from './members/member-item/member-item.component';
import { MemberImageComponent } from './members/member-image/member-image.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberHeaderComponent } from './members/member-header/member-header.component';
import { MemberContactComponent } from './members/member-contact/member-contact.component';

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
