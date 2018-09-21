import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './material.module';
import { SharedModule } from './components/shared/shared.module';
import { LoginComponent } from './components/user/login/login.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    ...MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
