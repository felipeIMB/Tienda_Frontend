import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { VendedorService } from './vendedores/vendedor.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


const routes: Routes = [
  { path: '', redirectTo: '/vendedores', pathMatch: 'full' },
  { path: 'vendedores', component: VendedoresComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VendedoresComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [VendedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
