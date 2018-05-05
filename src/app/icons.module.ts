import {NgModule} from '@angular/core';
import {IconHome, IconUsers, IconUser, IconFile, IconPlusCircle, IconPlus, IconBarChart2, IconLock, IconBriefcase, IconUserPlus, IconSettings} from 'angular-feather';

const icons = [
    IconHome, IconUsers, IconUser, IconFile, IconPlusCircle, IconPlus, IconBarChart2, IconLock, IconBriefcase, IconUserPlus, IconSettings
];

@NgModule({
    exports: icons
})
export class IconsModule {}
