class Counter {
    constructor() {
        this._count = 0;
    }

    increment() {
        this._count += 1;
    }

    decrement() {
        this._count -= 1;
    }
}

module.exports = Counter;