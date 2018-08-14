import { delay } from "redux-saga";

export default {
  async getNotifications() {
    console.warn("Contacting APIS");
    await delay(1000);
    return { count: 42 };
  }
};
