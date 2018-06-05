import "dotenv/config";

import * as path from "path";

export default class Client {
  path: string;

  constructor() {
    const certsDir = process.env["CERTS_DIR"];
    this.path = path.join(__dirname, "..", "..", certsDir);
  }

  certPath(): string {
    return this.getFilePath("CERT_KEY");
  }

  privatePath(): string {
    return this.getFilePath("PRIVATE_KEY");
  }

  rootPath(): string {
    return this.getFilePath("ROOT_KEY");
  }

  publicPath(): string {
    return this.getFilePath("PUBLIC_KEY");
  }

  getFilePath(key: string) {
    return path.join(this.path, process.env[key]);
  }
}
