import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path:'',
    component:TodosComponent
  },
  {
    path:'instructions',
    component:InstructionsComponent
  },
  {
    path:'todos',
    component:TodosComponent
  },
  {
    path:'features',
    component:FeaturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
