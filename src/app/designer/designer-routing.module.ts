import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DesignerComponent } from '@widget/ide';
// import { DesignerComponent } from '../../../projects/widget/ide/src/lib/designer.component';

const routes: Routes = [
  { path: '', component: DesignerComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignerRoutingModule {}
