import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MakeDemoComponent } from './make-demo/make-demo.component';
import { LoaderDemoComponent } from './loader-demo/loader-demo.component';
import { IframeComponent } from './iframe/iframe.component';
import { CheckObjectChangeDemoComponent } from './check-object-change-demo/check-object-change-demo.component';
import { DemoComponent } from './demo.component';


const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'demo', component: DemoComponent, children: [
      { path: '', redirectTo: 'default', pathMatch: 'full' },
      { path: 'default', component: MakeDemoComponent,data: {animation: 'HomePage'} },
      { path: 'loader', component: LoaderDemoComponent ,data: {animation: 'AboutPage'}},
      { path: 'iframe', component: IframeComponent,data: {animation: 'FilterPage'} },
      { path: 'checkobj', component: CheckObjectChangeDemoComponent }
    ]
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
