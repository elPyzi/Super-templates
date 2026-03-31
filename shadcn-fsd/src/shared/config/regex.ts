type RegexsType = {
  EMAIL: RegExp;
  NAME: RegExp;
  PHONE: RegExp;
  PASSWORD: RegExp;

  NUMBER: {
    ANY: RegExp;
    POSITIVE: RegExp;
    NEGATIVE: RegExp;
    INTEGER: RegExp;
    MIN: (min: number) => RegExp;
    MAX: (max: number) => RegExp;
  };
};

export const Regexs: RegexsType = {
  EMAIL:
    /(?!.*(-|_)\1)^(([^<>()\[\]\\!?@#=^$%&*.,;:\/\s@"]+(\.[^<>()\[\]\\!?@#=^$%&*.,;:\/\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-\_0-9]+\.)+[a-zA-Z]{2,}))$/,
  NAME: /(^[а-яА-Яa-zA-Z .-]+$)/,
  PHONE: /^\+[\d]{11,15}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9]).{6,}$/,

  NUMBER: {
    ANY: /^-?\d*(\.\d+)?$/,
    POSITIVE: /^\d+(\.\d+)?$/,
    NEGATIVE: /^-\d+(\.\d+)?$/,
    INTEGER: /^-?\d+$/,
    MIN: (min: number) =>
      new RegExp(`^(-?\\d*(\\.\\d+)?)$|^(?:(?:\\d+|\\d*\\.\\d+))(?<=${min})$`),
    MAX: (max: number) =>
      new RegExp(`^(-?\\d*(\\.\\d+)?)$|^(?:(?:\\d+|\\d*\\.\\d+))(?<=${max})$`),
  },
} as const;
