import { Publisher } from "..";

const payload = JSON.stringify({ test: 1 });
Publisher.initialize().publish(payload);
