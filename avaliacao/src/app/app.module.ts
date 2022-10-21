import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { RodapeComponent } from './sharepage/rodape/rodape.component';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { FuncionarioComponent } from './funcionarios/funcionario/funcionario.component';
import { FuncionariosService } from './funcionarios.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RodapeComponent,
    HomeComponent,
    MenuComponent,
    SobreComponent,
    FuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule, FuncionariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
