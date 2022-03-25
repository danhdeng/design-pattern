# Implennted Design Pattern in Javascript

# Implment a Factory Design pattern to create Observer

function createObserable() {
return {
subscribers: [],

    subscribe(fn) {
      this.subscribers.push(fn);
    },
    unsubscribe(fn) {
      this.subscribers = this.subscribers.filter((item) => item != fn);
    },

    broadcast(data) {
      for (let i = 0; i < this.subscribers.length; i++) {
        this.subscribers[i](data);
      }
    },

};
}
