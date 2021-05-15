import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ImcSharedModule } from 'app/shared/shared.module';
import { ImcCoreModule } from 'app/core/core.module';
import { ImcAppRoutingModule } from './app-routing.module';
import { ImcHomeModule } from './home/home.module';
import { ImcEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ImcSharedModule,
    ImcCoreModule,
    ImcHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ImcEntityModule,
    ImcAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ImcAppModule {}
