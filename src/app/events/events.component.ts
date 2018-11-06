import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
/* import { EventsList } from '../list-events'; */
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  eventsList: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
       this.getEvents();
  }

  getEvents(): void {
      this.eventService.getEvents().subscribe(eventsList => this.eventsList =
eventsList);
  }

}
