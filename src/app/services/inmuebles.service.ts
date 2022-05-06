import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  constructor(private httpClient: HttpClient) {
    
  }


 
}
