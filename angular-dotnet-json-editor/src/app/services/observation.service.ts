import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoint } from '../../endpoint/endpint';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

    // URL of the backend API (e.g., https://localhost:7207/api/observation)
  private apiUrl = endpoint.observation;

   // (Optional) path to local JSON file if mocking via assets folder
  private localJsonUrl = 'assets/data.json';
  constructor(private http: HttpClient) { }

  /*
   * [Optional - Previously used]
   * If you want to mock data locally from assets/data.json instead of using API:
   * Uncomment these methods and comment out the ones above.
   */

  // getObservation(): Observable<any> {
  //   return this.http.get(this.localJsonUrl);
  // }
  // saveObservation(data: any): Observable<any> {
  //   return this.http.post(this.localJsonUrl, data); // won't work for saving in Angular alone
  // }  


    /*
   * Fetch observation data from backend API
   * GET request to: https://localhost:7207/api/observation
   * Returns Observable of the entire observation object
   */
  getObservation(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  /*
   * Save or update observation data to backend
   * POST request to: https://localhost:7207/api/observation
   * Sends updated JSON data to the server
   */
  saveObservation(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }  
}
