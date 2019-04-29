import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';
import { AppRoutingModule } from './/app-routing.module';
import { AgentComponent } from './agent/agent.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component'




@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    AgentComponent,
    BlogComponent,
    ContactComponent,
    LayoutComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
