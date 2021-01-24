import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { SectionResolve } from './members/services/section-resolve';

import { AppComponent } from './app.component';
import { MembersSectionComponent } from './members/containers/members-section/members-section.component';
import { MemberComponent } from './members/components/member-item/member-item.component';
import { MemberImageComponent } from './members/components/member-image/member-image.component';
import { MemberDetailsComponent } from './members/components/member-details/member-details.component';
import { MemberHeaderComponent } from './members/components/member-header/member-header.component';
import { MemberContactComponent } from './members/components/member-contact/member-contact.component';

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
