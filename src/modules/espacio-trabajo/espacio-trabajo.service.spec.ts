import { Test, TestingModule } from '@nestjs/testing';
import { EspacioTrabajoService } from './espacio-trabajo.service';

describe('EspacioTrabajoService', () => {
  let service: EspacioTrabajoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspacioTrabajoService],
    }).compile();

    service = module.get<EspacioTrabajoService>(EspacioTrabajoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
