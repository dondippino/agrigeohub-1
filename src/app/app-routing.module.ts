
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {FarmerManagementComponent} from './pages/admin/farmer-management/farmer-management.component';
import {SaveFarmerComponent} from './pages/admin/farmer-management/save-farmer/save-farmer.component';
import {LoginComponent} from './pages/login/login.component';
import {UsersComponent} from './pages/admin/users/users.component';
import {SaveUserComponent} from './pages/admin/users/save-user/save-user.component';
import {AgentsComponent} from './pages/admin/agents/agents.component';
import {SaveAgentComponent} from './pages/admin/agents/save-agent/save-agent.component';
import {ResourcesComponent} from './pages/admin/resources/resources.component';
import {SaveResourcesComponent} from './pages/admin/resources/save-resources/save-resources.component';
import {AdminComponent} from './pages/admin/admin';
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {path: 'farmers', component: FarmerManagementComponent},
            {path: 'farmers/save', component: SaveFarmerComponent},
            {path: 'users', component: UsersComponent},
            {path: 'users/save', component: SaveUserComponent},
            {path: 'agents', component: AgentsComponent},
            {path: 'agents/save', component: SaveAgentComponent},
            {path: 'resources', component: ResourcesComponent},
            {path: 'resources/save', component: SaveResourcesComponent}
        ]
    }]
@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
