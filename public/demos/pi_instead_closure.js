
function createPerson(fn, ln) {
  // var pfn = fn;
  // var pln = ln;

  return {
    _pfn: fn,
    _pln: ln,
    getFN() {
      return this._pfn;
    },
    setFN(value) {
      this._pfn = value;
    }
  }

}

const p = createPerson('Bob', 'Smith');

console.log(p._pfn);


