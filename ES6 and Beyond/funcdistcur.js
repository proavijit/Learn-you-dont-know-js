

// function f3([x, y, ...z], ...w){
//   console.log(x, y, z, w);
// }

// f3([])

// f3([1,2,3,4], 5,6)


// function f6({x = 10} = {}, {y} = {y:10}){
//   console.log(x, y);
// }

// f6()
// f6(undefined, undefined);
// f6({}, undefined)
// f6({}, {})
// f6(undefined, {})
// f6({x: 2}, {y: 3})


// var defaults = {
//   options: {
//     remove: true,
//     enable: false,
//     instance: {}
//   },
//   log: {
//     warn: true,
//     error: true
//   }
// }

// var config = {
//   options: [
//     remove: false,
//     instance: null
//   ]
// }

{
  let{
    options: {
      remove = defaults.options.remove,
      enable = defaults.options.eneble,
      instance = defaults.options.instance
    } = {},
    log: {
      warn = defaults.log.warn,
      error = defaults.log.error
    } = {}
  } = config;

  config = {
    options: {remove, enale, instance},
    log: {warn, error}
  }


}

const config = {
  options: {
    eneble: true
  },
  log: {}
};

const defaults = {
  options: {
    remove: false,
    enable: false,
    instance: "default_instance"
  },
  log:{
    warn: "default_warn",
    error: "default_error"
  }
}