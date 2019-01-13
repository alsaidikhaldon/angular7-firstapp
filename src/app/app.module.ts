import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { AgencyComponent } from './agency/agency.component';
import { CarsComponent } from './cars/cars.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { AgenciesDataService } from './services/agencies-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AgenciesComponent } from './agencies/agencies.component';
import { RouterModule, Routes } from '@angular/router';




const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: { title: 'rental app angular7' }
  },
  {
    path: 'Agencies',
    component: AgenciesComponent,
    data: { title: 'rental app angular7' }
  }
]

@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      SidebarComponent,
      ContentComponent,
      AgencyComponent,
      CarsComponent,
      NavbarComponent,
      ContainerComponent,
      AgenciesComponent

    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [AgenciesDataService],
    bootstrap: [AppComponent]
  })
export class AppModule { }
