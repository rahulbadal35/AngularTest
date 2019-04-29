import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { AgentComponent } from './agent/agent.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'
import { DashboardComponent } from './dashboard/dashboard.component'

import { FormsModule } from '@angular/forms';

const routes:Routes =[
  {path:"login",component:LoginComponent},
  {path:"properties",component:PropertiesComponent},{path:"Agent",component:AgentComponent},
    {path:"blog",component:BlogComponent},{path:"Contact",component:ContactComponent},{path:"home",component:HomeComponent},
    {path:"dashboard",canActivate:[AuthGuard],component:DashboardComponent},
    
    
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
  
  
})
export class AppRoutingModule { }
