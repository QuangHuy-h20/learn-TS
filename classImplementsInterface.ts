import { hasPrint } from "./interfaceForClass";

export class Invoice implements hasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ) {}
  print() {
    return `${this.client} owes ${this.amount} for this work: ${this.work}`;
  }
}

export class Payment implements hasPrint {
  constructor(
    readonly recipients: string,
    private job: string,
    public amt: number
  ) {}
  print() {
    return `I owe ${this.recipients} ${this.amt} for this work: ${this.job} `;
  }
}
