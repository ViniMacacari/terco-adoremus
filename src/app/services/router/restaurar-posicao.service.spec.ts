import { TestBed } from '@angular/core/testing';

import { RestaurarPosicaoService } from './restaurar-posicao.service';

describe('RestaurarPosicaoService', () => {
  let service: RestaurarPosicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurarPosicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
