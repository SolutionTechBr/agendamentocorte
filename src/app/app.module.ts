import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadComponent } from './components/head/head.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CalendarComponent } from './components/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BootstrapModule } from './bootstrap.module' ; 
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    CalendarComponent,
    ScheduleComponent,
    AppointmentsComponent
    ],
  imports: [
    BootstrapModule,
    ModalModule.forRoot(),
    BrowserModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    AppRoutingModule // Adicione o AppRoutingModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
