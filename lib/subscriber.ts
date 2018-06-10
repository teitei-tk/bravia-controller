import { Certificate, Subscribe } from "./clients";

export default class Subscriber {
  certificate: Certificate;
  subscribe: Subscribe;

  constructor() {
    this.certificate = new Certificate();
    this.subscribe = new Subscribe(this.certificate);
  }

  subscription() {
    this.subscribe.subscription();
    this.subscribe.run();
  }
}
