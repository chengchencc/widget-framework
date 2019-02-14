import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignerComponent } from './designer.component';
import { DesignerRoutingModule } from './designer-routing.module';
//common vendors
import { TabsModule } from 'ngx-bootstrap/tabs';
//child component
import { HeaderComponent } from './shell/header/header.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { ContentComponent } from './shell/content/content.component';
import { FooterComponent } from './shell/footer/footer.component';
import { AsideComponent } from './shell/aside/aside.component';

@NgModule({
  imports: [
    CommonModule,
    DesignerRoutingModule,
    TabsModule.forRoot()
  ],
  declarations: [DesignerComponent, HeaderComponent, SidebarComponent, ContentComponent, FooterComponent, AsideComponent]
})
export class DesignerModule { }
