import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { IndexModule } from './pages/index/index.module';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    FooterComponent,
    IndexComponent
  ],
    imports: [
        BrowserModule,
        IndexModule,
        MainLayoutModule,
        AppRoutingModule,
        DragDropModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
