/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InmueblesService } from './inmuebles.service';

describe('Service: Inmuebles.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InmueblesService]
    });
  });

  it('should ...', inject([InmueblesService], (service: InmueblesService) => {
    expect(service).toBeTruthy();
  }));
});
