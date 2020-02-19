import { TestBed, inject } from '@angular/core/testing';

import { EditdataService } from './editdata.service';

describe('EditdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditdataService]
    });
  });

  it('should be created', inject([EditdataService], (service: EditdataService) => {
    expect(service).toBeTruthy();
  }));
});
