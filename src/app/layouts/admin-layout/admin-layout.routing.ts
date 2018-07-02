import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { RotaComponent } from '../../rota/rota.component';
import { OcorrenciaComponent } from '../../ocorrencia/ocorrencia.component';
import { VendedorComponent } from '../../vendedor/vendedor.component';
import { EstabelecimentoComponent } from '../../estabelecimento/estabelecimento.component';
import { BookComponent } from '../../book/book.component';
import { BookDetailComponent } from '../../book-detail/book-detail.component';
import { BookCreateComponent } from '../../book-create/book-create.component';
import { BookEditComponent } from '../../book-edit/book-edit.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',        component:  DashboardComponent },
    { path: 'rotas',            component:  RotaComponent },
    { path: 'ocorrencias',      component:  OcorrenciaComponent},
    { path: 'vendedores',       component:  VendedorComponent},
    { path: 'estabelecimentos', component:  EstabelecimentoComponent},
    { path: 'user-profile',     component:  UserProfileComponent },
    { path: 'icons',            component:  IconsComponent },
    { path: 'books',            component: BookComponent},
    { path: 'book-details/:id', component: BookDetailComponent},
    { path: 'book-create',      component: BookCreateComponent},
    { path: 'book-edit/:id',    component: BookEditComponent}
];
