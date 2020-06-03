import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

xdescribe('ModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalService = TestBed.get(ModalService);
    expect(service).toBeTruthy();
  });
});
