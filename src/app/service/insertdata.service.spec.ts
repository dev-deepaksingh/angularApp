import { TestBed, inject } from '@angular/core/testing';

import { InsertdataService } from './insertdata.service';

describe('InsertdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsertdataService]
    });
  });

  it('should be created', inject([InsertdataService], (service: InsertdataService) => {
    expect(service).toBeTruthy();
  }));
});
