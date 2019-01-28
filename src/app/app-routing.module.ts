import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/designer',pathMatch: 'full'},
  {path:'designer',loadChildren:'./designer/designer.module#DesignerModule'},
  {path:'doc',loadChildren:'./docs/doc.module#DocModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
