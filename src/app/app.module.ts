import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MembersSectionComponent } from './members-section/members-section.component';
import { MemberComponent } from './member/member.component';

@NgModule({
    declarations: [
        AppComponent,
        MembersSectionComponent,
        MemberComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
