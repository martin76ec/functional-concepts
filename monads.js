const Nothing = function(val) {
  this.value = val;
}

Nothing.of = function(value) {
  return new Nothing(value);
};

Nothing.map = function(fn) {
  return this;
};

const Some = function(val) {
  this.value = val;
}

Some.of = function(value) {
  return new Some(value);
};

Some.map = function(fn) {
  return Some.of(fn(this.value));
};

const Either = {
  Some,
  Nothing,
};

const jsonTest = {
  number: 12,

};
