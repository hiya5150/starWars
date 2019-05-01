export class Planets {

  type: string;
  description: string;
  format: string;

  constructor(args?) {
    if (args) {
      this.type = args.type;
      this.description = args.description;
      this.format = args.format;


    }

  }
}
