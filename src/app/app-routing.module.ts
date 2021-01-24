import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersSectionComponent } from './members/containers/members-section/members-section.component';
import { SectionResolve } from './members/services/section-resolve';

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