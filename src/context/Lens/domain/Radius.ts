export class Radius {
  #value: number;

  private constructor(value: number) {
    this.#value = value;
  }

  public static create(value: number): Radius {
    if (value < -50 || value > 50) {
      throw new Error('Radius can not be less than -50 or more than 50');
    }

    return new Radius(value);
  }

  getValue(): number {
    return this.#value;
  }
}
