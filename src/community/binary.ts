import { CustomBaseNotation } from "./custom-base";

export class BinaryNotation extends CustomBaseNotation {
  constructor() {
    super("01");
  }
  
  public get name(): string {
    return "Binary";
  }
}

