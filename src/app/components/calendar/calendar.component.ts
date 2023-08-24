import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ptBrLocale } from 'ngx-bootstrap/locale'; // Importar o locale para português do Brasil
import { defineLocale } from 'ngx-bootstrap/chronos'; // Importar a função defineLocale

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  modalRef?: BsModalRef; //chamada
  title: any;
  presentDays: number = 0;
  abstractDays: number = 0;
  events: any = [
    {title: 'nome', date: '2023-07-07', colr: '#0000FF'},
    {title: 'nome', date: '2023-07-07', colr: '#0100FF'},
    {title: 'nome', date: '2023-07-07', colr: '#0400FF'},
    {title: 'nome', date: '2023-07-07', colr: '#0000FF'},
    {title: 'nome', date: '2023-07-07', colr: '#0100FF'},
    {title: 'nome', date: '2023-07-07', colr: '#0400FF'},
    {title: 'nome', date: '2023-07-07', colr: '#0000FF'},
    {title: 'nome', date: '2023-07-07', colr: '#0100FF'},
    {title: 'nome', date: '2023-07-07', colr: '#0400FF'},
    {title: 'nome', date: '2023-07-07', colr: '#0000FF'},
    {title: 'nome', date: '2023-07-07', colr: '#0100FF'},
    {title: 'nome', date: '2023-07-07', colr: '#0400FF'},
    {title: 'nome', date: '2023-07-08', colr: '#FF0000'},
    {title: 'nome', date: '2023-07-09', colr: '#0000FF'},
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: this.events,
    eventClick: this.handleDateClick.bind(this),
    locale: 'pt-br' // Definir o idioma como "pt-br"
  };

  config = {
    animated: true
  };

  @ViewChild('template') template!: string;

  constructor (private modalService: BsModalService) {
    // Definir o idioma para português do Brasil
    defineLocale('pt-br', ptBrLocale);
  }

  ngOnInit(): void {
  }
  handleDateClick(arg:any) {
    console.log(arg);
    console.log(arg.event._def.title);
    this.title = arg.event._def.title;
    this.modalRef = this.modalService.show(this.template, this.config)
  }

}
