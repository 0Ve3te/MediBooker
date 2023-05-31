import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { DayDTO } from '../ModelsDTO/DayDTO';
import { ReservationDTO } from '../ModelsDTO/ReservationDTO';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  loadDoctorSchedule(id: string): Observable<[DayDTO]>{
    return this.http.get<[DayDTO]>(`https://localhost:44379/api/Doctor/LoadDoctorSchedule/${id}`).pipe(shareReplay());
  }

  loadDoctorReservations(id: string): Observable<[ReservationDTO]>{
    return this.http.get<[ReservationDTO]>(`https://localhost:44379/api/Doctor/LoadDoctorReservation/${id}`).pipe(shareReplay());
  }

}
