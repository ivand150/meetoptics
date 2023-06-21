export class Lens {
  readonly id: string;
  readonly frontRadius: number;
  readonly backRadius: number;
  readonly thickness: number;

  constructor(id: string, frontRadius: number, backRadius: number, thickness: number) {
    this.id = id;
    this.frontRadius = frontRadius;
    this.backRadius = backRadius;
    this.thickness = thickness;
  }
}
