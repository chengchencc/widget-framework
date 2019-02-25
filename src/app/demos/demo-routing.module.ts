import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MakeDemoComponent } from './make-demo/make-demo.component';
import { LoaderDemoComponent } from './loader-demo/loader-demo.component';
import { IframeComponent } from './iframe/iframe.component';


const routes: Routes = [
  {path:'',redirectTo:'default',pathMatch: 'full'},
  { path: 'default', component: MakeDemoComponent },
  { path: 'loader', component: LoaderDemoComponent },
  { path: 'iframe', component: IframeComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
