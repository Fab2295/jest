module.exports = {
  somar: (...args) => {
    const numbers = args.filter((value) => !isNaN(value) && value !== null);

    if (numbers && numbers.length === 0) {
      throw new TypeError("Só é aceito números");
    }

    return args.reduce((acu, curr) => acu + curr);
  },

  multiplicar: (...args) => {
    return args.reduce((acu, curr) => acu * curr);
  },

  dividir: (a, b) => {
    return a / b;
  },
};
