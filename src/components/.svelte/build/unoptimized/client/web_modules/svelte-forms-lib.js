import { b as get_store_value } from './common/index-73521fdb.js';
import { w as writable, d as derived } from './common/index-32f3e6ea.js';

/**
 * Based on Kendo UI Core expression code <https://github.com/telerik/kendo-ui-core#license-information>
 */

function Cache(maxSize) {
  this._maxSize = maxSize;
  this.clear();
}
Cache.prototype.clear = function() {
  this._size = 0;
  this._values = Object.create(null);
};
Cache.prototype.get = function(key) {
  return this._values[key]
};
Cache.prototype.set = function(key, value) {
  this._size >= this._maxSize && this.clear();
  if (!(key in this._values)) this._size++;

  return (this._values[key] = value)
};

var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
  DIGIT_REGEX = /^\d+$/,
  LEAD_DIGIT_REGEX = /^\d/,
  SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
  CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/,
  MAX_CACHE_SIZE = 512;

var pathCache = new Cache(MAX_CACHE_SIZE),
  setCache = new Cache(MAX_CACHE_SIZE),
  getCache = new Cache(MAX_CACHE_SIZE);

var propertyExpr = {
  Cache: Cache,

  split: split,

  normalizePath: normalizePath,

  setter: function(path) {
    var parts = normalizePath(path);

    return (
      setCache.get(path) ||
      setCache.set(path, function setter(data, value) {
        var index = 0,
          len = parts.length;
        while (index < len - 1) {
          data = data[parts[index++]];
        }
        data[parts[index]] = value;
      })
    )
  },

  getter: function(path, safe) {
    var parts = normalizePath(path);
    return (
      getCache.get(path) ||
      getCache.set(path, function getter(data) {
        var index = 0,
          len = parts.length;
        while (index < len) {
          if (data != null || !safe) data = data[parts[index++]];
          else return
        }
        return data
      })
    )
  },

  join: function(segments) {
    return segments.reduce(function(path, part) {
      return (
        path +
        (isQuoted(part) || DIGIT_REGEX.test(part)
          ? '[' + part + ']'
          : (path ? '.' : '') + part)
      )
    }, '')
  },

  forEach: function(path, cb, thisArg) {
    forEach(Array.isArray(path) ? path : split(path), cb, thisArg);
  }
};

function normalizePath(path) {
  return (
    pathCache.get(path) ||
    pathCache.set(
      path,
      split(path).map(function(part) {
        return part.replace(CLEAN_QUOTES_REGEX, '$2')
      })
    )
  )
}

function split(path) {
  return path.match(SPLIT_REGEX)
}

function forEach(parts, iter, thisArg) {
  var len = parts.length,
    part,
    idx,
    isArray,
    isBracket;

  for (idx = 0; idx < len; idx++) {
    part = parts[idx];

    if (part) {
      if (shouldBeQuoted(part)) {
        part = '"' + part + '"';
      }

      isBracket = isQuoted(part);
      isArray = !isBracket && /^\d+$/.test(part);

      iter.call(thisArg, part, isBracket, isArray, idx, parts);
    }
  }
}

function isQuoted(str) {
  return (
    typeof str === 'string' && str && ["'", '"'].indexOf(str.charAt(0)) !== -1
  )
}

function hasLeadingNumber(part) {
  return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX)
}

function hasSpecialChars(part) {
  return SPEC_CHAR_REGEX.test(part)
}

function shouldBeQuoted(part) {
  return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part))
}

function subscribeOnce(observable) {
  return new Promise((resolve) => {
    observable.subscribe(resolve)(); // immediately invoke to unsubscribe
  });
}

function update(object, path, value) {
  object.update((o) => {
    set(o, path, value);
    return o;
  });
}

function cloneDeep(object) {
  return JSON.parse(JSON.stringify(object));
}

function isNullish(value) {
  return value === undefined || value === null;
}

function isEmpty(object) {
  return isNullish(object) || Object.keys(object).length <= 0;
}

function getValues(object) {
  let result = [];
  for (const [, value] of Object.entries(object)) {
    result = result.concat(
      typeof value === 'object' ? getValues(value) : value,
    );
  }
  return result;
}

function getErrorsFromSchema(schema, errors = {}) {
  for (const key in schema) {
    if(schema[key].type === 'object' && !isEmpty(schema[key].fields)) {
      errors[key] = getErrorsFromSchema(schema[key].fields, Object.assign({}, errors));
    }

    else {
      errors[key] = '';
    }
  }

  return errors;
}

function assignDeep(object, value) {
  if (Array.isArray(object)) {
    return object.map((o) => assignDeep(o, value));
  }
  const copy = {};
  for (const key in object) {
    copy[key] =
      typeof object[key] === 'object' ? assignDeep(object[key], value) : value;
  }
  return copy;
}

function has(object, key) {
  return (
    object != undefined && Object.prototype.hasOwnProperty.call(object, key)
  );
}

function set(object, path, value) {
  if (new Object(object) !== object) return object;

  if (!Array.isArray(path)) {
    path = path.toString().match(/[^.[\]]+/g) || [];
  }

  const result = path
    .slice(0, -1)
    .reduce(
      (accumulator, key, index) =>
        new Object(accumulator[key]) === accumulator[key]
          ? accumulator[key]
          : (accumulator[key] =
              Math.abs(path[index + 1]) >> 0 === +path[index + 1] ? [] : {}),
      object,
    );

  result[path[path.length - 1]] = value;

  return object;
}

// Implementation of yup.reach
// TODO rewrite to simpler version and remove dependency on forEach
function reach(object, path, value, context) {
  return getIn(object, path, value, context).schema;
}

function trim(part) {
  return part.slice(0, -1).slice(1);
}

function getIn(schema, path, value, context) {
  let parent, lastPart;

  context = context || value;

  if (!path)
    return {
      parent,
      parentPath: path,
      schema,
    };

  propertyExpr.forEach(path, (_part, isBracket, isArray) => {
    let part = isBracket ? trim(_part) : _part;

    if (isArray || has(schema, '_subType')) {
      let index = isArray ? Number.parseInt(part, 10) : 0;
      schema = schema.resolve({context, parent, value})._subType;
      if (value) {
        value = value[index];
      }
    }

    if (!isArray) {
      schema = schema.resolve({context, parent, value});
      schema = schema.fields[part];
      parent = value;
      value = value && value[part];
      lastPart = part;
    }
  });

  return {schema, parent, parentPath: lastPart};
}

const util = {
  getErrorsFromSchema,
  assignDeep,
  cloneDeep,
  getValues,
  isEmpty,
  reach,
  set,
  subscribeOnce,
  update,
  isNullish,
};

const NO_ERROR = '';
const IS_TOUCHED = true;

function isCheckbox(element) {
  return element.getAttribute && element.getAttribute('type') === 'checkbox';
}

const createForm = (config) => {
  let initialValues = config.initialValues || {};

  const validationSchema = config.validationSchema;
  const validateFn = config.validate;
  const onSubmit = config.onSubmit;

  const getInitial = {
    values: () => util.cloneDeep(initialValues),
    errors: () => validationSchema ? util.getErrorsFromSchema(validationSchema.fields) : util.assignDeep(initialValues, NO_ERROR),
    touched: () => util.assignDeep(initialValues, !IS_TOUCHED),
  };

  const form = writable(getInitial.values());
  const errors = writable(getInitial.errors());
  const touched = writable(getInitial.touched());

  const isSubmitting = writable(false);
  const isValidating = writable(false);

  const isValid = derived(errors, ($errors) => {
    const noErrors = util
      .getValues($errors)
      .every((field) => field === NO_ERROR);
    return noErrors;
  });

  const modified = derived(form, ($form) => {
    const object = util.assignDeep($form, false);

    for (let key in $form) {
      if ($form[key] !== initialValues[key]) {
        object[key] = true;
      }
    }

    return object;
  });

  const isModified = derived(modified, ($modified) => {
    return util.getValues($modified).some((field) => field === true);
  });

  function validateField(field) {
    return util
      .subscribeOnce(form)
      .then((values) => validateFieldValue(field, values[field]));
  }

  function validateFieldValue(field, value) {
    updateTouched(field, true);

    if (validationSchema) {
      isValidating.set(true);

      return validationSchema
        .validateAt(field, get_store_value(form))
        .then(() => util.update(errors, field, ''))
        .catch((error) => util.update(errors, field, error.message))
        .finally(() => {
          isValidating.set(false);
        });
    }

    if (validateFn) {
      isValidating.set(true);
      return Promise.resolve()
        .then(() => validateFn({[field]: value}))
        .then((errs) =>
          util.update(errors, field, !util.isNullish(errs) ? errs[field] : ''),
        )
        .finally(() => {
          isValidating.set(false);
        });
    }

    return Promise.resolve();
  }

  function updateValidateField(field, value) {
    updateField(field, value);
    return validateFieldValue(field, value);
  }

  function handleChange(event) {
    const element = event.target;
    const field = element.name || element.id;
    const value = isCheckbox(element) ? element.checked : element.value;

    return updateValidateField(field, value);
  }

  function handleSubmit(ev) {
    if (ev && ev.preventDefault) {
      ev.preventDefault();
    }

    isSubmitting.set(true);

    return util.subscribeOnce(form).then((values) => {
      if (typeof validateFn === 'function') {
        isValidating.set(true);

        return Promise.resolve()
          .then(() => validateFn(values))
          .then((error) => {
            if (util.isEmpty(error)) {
              clearErrorsAndSubmit(values);
            } else {
              errors.set(error);
              isSubmitting.set(false);
            }
          })
          .finally(() => isValidating.set(false));
      }

      if (validationSchema) {
        isValidating.set(true);

        return (
          validationSchema
            .validate(values, {abortEarly: false})
            .then(() => clearErrorsAndSubmit(values))
            // eslint-disable-next-line unicorn/catch-error-name
            .catch((yupErrors) => {
              if (yupErrors && yupErrors.inner) {
                const updatedErrors = getInitial.errors();

                yupErrors.inner.forEach(error =>
                  util.set(updatedErrors, error.path, error.message)
                );

                errors.set(updatedErrors);
              }
              isSubmitting.set(false);
            })
            .finally(() => isValidating.set(false))
        );
      }

      clearErrorsAndSubmit(values);
    });
  }

  function handleReset() {
    form.set(getInitial.values());
    errors.set(getInitial.errors());
    touched.set(getInitial.touched());
  }

  function clearErrorsAndSubmit(values) {
    return Promise.resolve()
      .then(() => errors.set(getInitial.errors()))
      .then(() => onSubmit(values, form, errors))
      .finally(() => isSubmitting.set(false));
  }

  /**
   * Handler to imperatively update the value of a form field
   */
  function updateField(field, value) {
    util.update(form, field, value);
  }

  /**
   * Handler to imperatively update the touched value of a form field
   */
  function updateTouched(field, value) {
    util.update(touched, field, value);
  }

  /**
   * Update the initial values and reset form. Used to dynamically display new form values
   */
  function updateInitialValues(newValues) {
    initialValues = newValues;

    handleReset();
  }

  return {
    form,
    errors,
    touched,
    modified,
    isValid,
    isSubmitting,
    isValidating,
    isModified,
    handleChange,
    handleSubmit,
    handleReset,
    updateField,
    updateValidateField,
    updateTouched,
    validateField,
    updateInitialValues,
    state: derived(
      [
        form,
        errors,
        touched,
        modified,
        isValid,
        isValidating,
        isSubmitting,
        isModified,
      ],
      ([
        $form,
        $errors,
        $touched,
        $modified,
        $isValid,
        $isValidating,
        $isSubmitting,
        $isModified,
      ]) => ({
        form: $form,
        errors: $errors,
        touched: $touched,
        modified: $modified,
        isValid: $isValid,
        isSubmitting: $isSubmitting,
        isValidating: $isValidating,
        isModified: $isModified,
      }),
    ),
  };
};

export { createForm };
