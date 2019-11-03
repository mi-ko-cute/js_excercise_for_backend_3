const assert = require('power-assert');
const Counter = require('../../src/Counter.js');

describe('Counterクラスのテスト', () => {
    it('countプロパティを持つことを確認する', () => {
        const counter = new Counter();
        assert.ok(counter.hasOwnProperty._count);
    })

    it('_counterプロパティの初期値は0', () => {
        const counter = new Counter();
        assert.equal(counter._count, 0);
    })

    it('incrementメソッドを持つ', () => {
        const counter = new Counter();
        assert.ok(typeof counter.increment() === 'function');
    })

    it('incrementメソッドを実行すると_countプロパティの値は1増える', () => {
        const counter = new Counter();

        counter.increment();
        assert.equal(counter._count, 1);
    })

    it('decrementメソッドを持つ', () => {
        const counter = new Counter();
        assert.ok(typeof counter.decrement() === 'function');
    })

    it('decrementメソッドを実行すると_countプロパティの値は1減る', () => {
        const counter = new Counter();

        counter.decrement();
        assert.equal(counter._count, -1);
    })

})