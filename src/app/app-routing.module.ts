import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersSectionComponent } from './members-section/members-section.component';
import { SectionResolve } from './section-resolve';

const routes: Routes = [
    { 
        path: 'team/:id',
        component: MembersSectionComponent,
        resolve: { data: SectionResolve }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }