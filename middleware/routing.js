export default function({ store, from, route }) {
  if (process.client) {
    setTimeout(() => {
      if (from) store.dispatch("setPrevRoute", from);
    }, 0);
    store.dispatch("setEmailSubscribe", false);
  }
}
