import { Lens, LensProps } from '../domain/Lens';
import { LensRepository } from '../domain/LensRepository';
import { UseCase } from './UseCase';

export class CreateLens implements UseCase {
  private lensRepository: LensRepository;

  constructor(lensRepository: LensRepository) {
    this.lensRepository = lensRepository;
  }

  execute(props: LensProps): void {
    const lens = Lens.create({
      id: props.id,
      frontRadius: props.frontRadius,
      backRadius: props.backRadius,
      thickness: props.thickness
    });

    this.lensRepository.save(lens);
  }
}
