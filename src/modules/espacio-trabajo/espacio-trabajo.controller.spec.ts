import { Test, TestingModule } from '@nestjs/testing';
import { EspacioTrabajoController } from './espacio-trabajo.controller';

describe('EspacioTrabajoController', () => {
  let controller: EspacioTrabajoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspacioTrabajoController],
    }).compile();

    controller = module.get<EspacioTrabajoController>(EspacioTrabajoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
