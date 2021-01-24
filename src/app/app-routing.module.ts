import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersSectionComponent } from './members/members-section/members-section.component';
import { SectionResolve } from './members/members-section/section-resolve';

const routes: Routes = [
    { 
        path: 'members/:id',
        component: MembersSectionComponent,
        resolve: { data: SectionResolve }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }