import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SkillsRouting, routableComponents } from './skills.routing';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SkillsRouting
  ],
  declarations: [routableComponents]
})
export class SkillsModule { }