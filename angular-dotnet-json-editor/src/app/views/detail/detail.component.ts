import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataItem } from '../../models/dataItem';
import { ObservationService } from '../../services/observation.service';
import { Observation } from '../../models/observaton';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
observation!: Observation;  
  selectedItem!: DataItem; 
  form: FormGroup = new FormGroup({});  


  constructor(private obsService: ObservationService, private fb: FormBuilder) {}

  /**
   * Lifecycle hook - called once after component is initialized
   * Loads observation data from the backend when component starts
   */
  ngOnInit(): void {
    this.obsService.getObservation().subscribe(data => {
      this.observation = data;
    });
  }

   /**
   * Called when a sampling time is selected by the user
   * Updates the selected item and builds a dynamic form for its properties
   */
  selectItem(item: DataItem) {
    this.selectedItem = item;
    this.buildForm();
  }

   /**
   * Dynamically creates form controls based on selected item's properties
   * Each property becomes an input field in the form
   */

  buildForm() {
    const group: any = {};
    this.selectedItem.properties.forEach((prop, i) => {
      group[`prop${i}`] = new FormControl(prop.value);
    });
    this.form = this.fb.group(group);
  }


  /**
   * Called when "Save" button is clicked
   * Updates the values in selectedItem with the form values
   * Then sends the updated entire observation object to the backend
   */
  save() {
    this.selectedItem.properties.forEach((prop, i) => {
      prop.value = this.form.get(`prop${i}`)?.value;
    });
    this.obsService.saveObservation(this.observation).subscribe(() => alert('Saved!'));
  }
}
