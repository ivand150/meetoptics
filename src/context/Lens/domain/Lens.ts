import { Radius } from './Radius';
import { Thickness } from './Thickness';

export type LensProps = {
  id: string;
  frontRadius: Radius;
  backRadius: Radius;
  thickness: Thickness;
};
export class Lens {
  readonly id: string;
  readonly frontRadius: Radius;
  readonly backRadius: Radius;
  readonly thickness: Thickness;

  constructor(props: LensProps) {
    this.id = props.id;
    this.frontRadius = props.frontRadius;
    this.backRadius = props.backRadius;
    this.thickness = props.thickness;
  }

  public static create(props: LensProps) {
    return new Lens(props);
  }
}
