import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { RotaComponent } from '../../rota/rota.component';
import { OcorrenciaComponent } from '../../ocorrencias/ocorrencia.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'rotas',      component: RotaComponent },
    { path: 'ocorrencias',      component:  OcorrenciaComponent},
    

    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'icons',          component: IconsComponent },
];
