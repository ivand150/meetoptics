export class Thickness {
  #value: number;

  private constructor(value: number) {
    this.#value = value;
  }

  public static create(value: number): Thickness {
    if (value > 20) {
      throw new Error('Thickness can not be more than 20');
    }

    return new Thickness(value);
  }

  getValue(): number {
    return this.#value;
  }
}
