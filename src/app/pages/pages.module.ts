import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {IconsModule} from '../icons.module';


import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PluginsModule} from '../plugins.component/plugins.module';
import {BlocksModule} from '../blocks/blocks.module';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin';
import {FarmerManagementComponent} from './admin/farmer-management/farmer-management.component';
import {SaveFarmerComponent} from './admin/farmer-management/save-farmer/save-farmer.component';
import {LoginComponent} from './login//login.component';
import {UsersComponent} from './admin/users/users.component';
import {SaveUserComponent} from './admin/users/save-user/save-user.component';
import {AgentsComponent} from './admin/agents//agents.component';
import {SaveAgentComponent} from './admin/agents/save-agent/save-agent.component';
import {ResourcesComponent} from './admin/resources//resources.component';
import {SaveResourcesComponent} from './admin/resources//save-resources/save-resources.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';


@NgModule({
    imports: [
        PluginsModule, BlocksModule, BrowserModule, FormsModule, HttpModule, CommonModule, RouterModule, IconsModule
    ],
    declarations: [
        HomeComponent, FarmerManagementComponent, AdminComponent, SaveFarmerComponent, LoginComponent, UsersComponent, SaveUserComponent, AgentsComponent, SaveAgentComponent, ResourcesComponent, SaveResourcesComponent, DashboardComponent
    ],
    exports: [
        HomeComponent, BlocksModule, FarmerManagementComponent, AdminComponent, RouterModule, IconsModule, SaveFarmerComponent, LoginComponent, UsersComponent, SaveUserComponent, AgentsComponent, SaveAgentComponent, ResourcesComponent, SaveResourcesComponent, DashboardComponent
    ]
})
export class PagesModule {}
