import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules,Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppPageNotFoundComponent } from './app-page-not-found';

const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', loadChildren: 'app/characters/characters.module#CharactersModule' },
  { path: 'skills', loadChildren: 'app/skills/skills.module#SkillsModule' },
  { path: '**', pathMatch: 'full', component: AppPageNotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRouting { }
export const routableComponents = [HomeComponent, AppPageNotFoundComponent]
