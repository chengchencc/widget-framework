import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MakeDemoComponent } from './make-demo/make-demo.component';
import { LoaderDemoComponent } from './loader-demo/loader-demo.component';


const routes: Routes = [
  { path: '', component: MakeDemoComponent },
  { path: 'loader', component: LoaderDemoComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
