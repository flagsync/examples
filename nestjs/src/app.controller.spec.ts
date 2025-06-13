import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  const mockAppService = {
    doWork: jest.fn().mockReturnValue({
      flag: {
        key: 'my-first-kill-switch',
        value: false,
      },
      algorithm: 'v1-rules-based',
      result: ['itemX', 'itemY', 'itemZ'],
    }),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: AppService, useValue: mockAppService }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return flag JSON response', async () => {
      const result = await appController.getValue({ key: 'user123' });
      expect(result).toEqual({
        flag: {
          key: 'my-first-kill-switch',
          value: false,
        },
        algorithm: 'v1-rules-based',
        result: ['itemX', 'itemY', 'itemZ'],
      });
      expect(mockAppService.doWork).toHaveBeenCalledWith({ key: 'user123' });
    });
  });
});
