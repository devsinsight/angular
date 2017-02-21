import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills.component';
import { SkillComponent } from './skill/skill.component';
import { SkillListComponent } from './skill-list/skill-list.component';

const routes: Routes = 
[
  {
    path: '', component: SkillsComponent,
    children: [
      { path: '', component: SkillListComponent },
      { path: ':id', component: SkillComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRouting { }
export const routableComponents = [SkillsComponent, SkillComponent, SkillListComponent]
