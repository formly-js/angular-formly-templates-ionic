/*jshint expr: true*/
var expect = require('chai').expect;
const {coveredFunction} = require('./test.utils');
describe('apiCheckUtil', () => {
  const {
    each, checkerHelpers, getCheckerDisplay, copy, list,
    getError
    } = require('./apiCheckUtil');

  describe('each', () => {
    it('should iterate over objects', () => {
      var called = [];
      each({a: 'a', b: 'b'}, (val, prop) => {
        called.push({val, prop});
      });
      expect(called).to.eql([{val: 'a', prop: 'a'}, {val: 'b', prop: 'b'}]);
    });

    it('should exit objects early if false is explicitly returned', () => {
      var called = [];
      var ret = each({a: 'a', b: 'b', c: 'c', d: 'd'}, (val, prop) => {
        if (prop === 'c') {
          return false;
        }
        called.push({val, prop});
      });
      expect(called).to.eql([{val: 'a', prop: 'a'}, {val: 'b', prop: 'b'}]);
      expect(ret).to.be.false;
    });

    it('should not iterate over properties that are not the object\'s own', () => {
      var called = [];
      var Daddy = function() {
        this.a = 'a';
        this.b = 'b';
      };
      Daddy.prototype.x = 'x';
      var man = new Daddy();
      each(man, (val, prop) => {
        called.push({val, prop});
      });
      expect(called).to.eql([{val: 'a', prop: 'a'}, {val: 'b', prop: 'b'}]);
    });

    it('should iterate over arrays', () => {
      var called = [];
      each([1, 2], (val, index) => {
        called.push({val, index});
      });
      expect(called).to.eql([{val: 1, index: 0}, {val: 2, index: 1}]);
    });

    it('should exit arrays early if false is explicitly returned', () => {
      var called = [];
      var ret = each([1, 2, 3, 4], (val, index) => {
        if (index > 1) {
          return false;
        }
        called.push({val, index});
      });
      expect(called).to.eql([{val: 1, index: 0}, {val: 2, index: 1}]);
      expect(ret).to.be.false;
    });
  });

  describe(`checkerHelpers`, () => {
    describe(`setupChecker`, () => {
      let myChecker;
      beforeEach(() => {
        myChecker = coveredFunction();
        myChecker.type = 'Custom type';
      });
      it(`should have optional added`, () => {
        checkerHelpers.setupChecker(myChecker);
        expect(myChecker.optional).to.be.a('function');
      });
      it(`should not have optional added if notOption is specified`, () => {
        myChecker.notOptional = true;
        checkerHelpers.setupChecker(myChecker);
        expect(myChecker).to.not.have.property('optional');
      });
    });


    describe(`makeOptional`, () => {
      it(`should make a function optional`, () => {
        function foo() {
        }
        foo.type = {};
        foo();
        checkerHelpers.makeOptional(foo);
        expect(foo.optional).to.be.a('function');
      });
    });

    describe(`wrapInSpecified`, () => {
      it(`should wrap a function in a specified checker`, () => {
        let called = 0;
        function foo() {
          called++;
        }
        var wrapped = checkerHelpers.wrapInSpecified(foo, {a: 'Sweet type'}, {short: 'type'});
        expect(wrapped('hello')).to.be.undefined;
        expect(called).to.equal(1);
        expect(wrapped()).to.be.instanceOf(Error);
        expect(called).to.equal(1);
      });
    });
  });

  describe(`getCheckerDisplay`, () => {
    let myChecker;
    beforeEach(() => {
      myChecker = function myChecker() {
      };
      myChecker(); // full coverage
    });
    it(`should default to the type`, () => {
      myChecker.type = 'myCheckerType';
      expect(getCheckerDisplay(myChecker)).to.equal('myCheckerType');

    });
    it(`should default to the display name if no type is specified`, () => {
      myChecker.displayName = 'my checker';
      expect(getCheckerDisplay(myChecker)).to.equal('my checker');
    });
    it(`should fallback to the name if no type or displayName is specified`, () => {
      expect(getCheckerDisplay(myChecker)).to.equal('myChecker');
    });
  });

  describe(`copy`, () => {
    it(`should copy an array`, () => {
      const x = [1,2,3];
      const c = copy(x);
      expect(c).to.not.equal(x);
      expect(c).to.eql(x);
    });
    it(`should copy an object`, () => {
      const x = {a: 'b', c: 'd', e: {f: 'g'}};
      const c = copy(x);
      expect(c).to.not.equal(x);
      expect(c).to.eql(x);
    });
  });

  describe(`list`, () => {
    it(`should list a single item`, () => {
      expect(list('hello', ', ', 'and ')).to.equal('hello');
    });

    it(`should list two items`, () => {
      expect(list(['hi', 'hello'], ', ', 'and ')).to.equal('hi and hello');
    });

    it(`should list three items`, () => {
      expect(list(['hi', 'hello', 'hey'], ', ', 'and ')).to.equal('hi, hello, and hey');
    });
  });

  describe(`copy`, () => {
    it(`should should copy a string`, () => {
      expect(copy('hello')).to.equal('hello');
    });
    it(`should copy an object`, () => {
      const original = {a: true, b: false, c: 32};
      const daCopy = {a: true, b: false, c: 32};
      expect(copy(original)).to.eql(daCopy);
    });
  });

  describe(`getError`, () => {
    it(`should return a nice error message`, () => {
      const message = getError('name', 'location', {type: 'special type'});
      expect(message).to.match(/name.*location.*special type/i);
    });
  });



});
