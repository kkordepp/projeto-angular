import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { RodapeComponent } from './sharepage/rodape/rodape.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'rodape', component: RodapeComponent },
  { path: 'navbar', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
