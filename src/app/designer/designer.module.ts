import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignerComponent } from './designer.component';
import { DesignerRoutingModule } from './designer-routing.module';
import { HeaderComponent } from './shell/header/header.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { ContentComponent } from './shell/content/content.component';
import { FooterComponent } from './shell/footer/footer.component';
import { AsideComponent } from './shell/aside/aside.component';

@NgModule({
  imports: [
    CommonModule,
    DesignerRoutingModule
  ],
  declarations: [DesignerComponent, HeaderComponent, SidebarComponent, ContentComponent, FooterComponent, AsideComponent]
})
export class DesignerModule { }
