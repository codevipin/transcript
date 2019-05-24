import { TestBed } from '@angular/core/testing';

import { PlayerMetadataService } from './player-metadata.service';

describe('PlayerMetadataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerMetadataService = TestBed.get(PlayerMetadataService);
    expect(service).toBeTruthy();
  });
});
