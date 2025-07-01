import { Component } from '@angular/core';
import { Observation } from '../../models/observaton';
import { ObservationService } from '../../services/observation.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {


   observation: Observation = {
    id: 0,
    name: '',
    datas: []
  }; 

  constructor(private obsService: ObservationService) {}



  ngOnInit(): void {
    this.obsService.getObservation().subscribe(data => {
       // heck if the response and 'datas' array are present
      if (data && data.datas) {
        this.observation = data; // Store the API result into the component property
      }
    });
  }
}
