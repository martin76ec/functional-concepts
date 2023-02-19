class Validation {
  _cache;
  _valid;
  _func;
  _log;
  _param;

  constructor(func, param) {
    this._valid = false;
    this._func = func;
    this._log = '';
    this._param = param;
    this._cache = {
      value: undefined,
    };
  }

  validate() {
    if (this._cache.value !== undefined) return this._cache.value;
    const valid = this._func(this._param);
    if (typeof valid !== 'boolean') return;
    this._cache.value = valid;
    this._valid = valid;
  }

  isValid() {
    return this._valid;
  }

  getLog() {
    return this._log;
  }
}

function validator() {
  return {
    validations: [],
    addValidations: function(validation, param) {
      this.validations.push(new Validation(validation, param));
      return this;
    },
    runValidations: function() {
      this.validations.forEach(v => v.validate());
      return this;
    },
    isValid: function() {
      return this.validations.reduce((p, c) => p && c.isValid());
    },
    getFailedLogs: function() {
      return this.validations
        .filter(v => !v.isValid())
        .map(v => v.getLog());
    },
  };
}

module.exports = { Validation, validator };
