import { LensRepository } from '../domain/LensRepository';
import { UseCase } from './UseCase';

export class GetUser implements UseCase {
  private lensRepository: LensRepository;

  constructor(lensRepository: LensRepository) {
    this.lensRepository = lensRepository;
  }
  execute() {
    return this.lensRepository.findAll();
  }
}
