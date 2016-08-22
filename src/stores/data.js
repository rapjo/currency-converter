export default {
  currencyRatios: {
    usd: {
      usd: 1,
      euro     : 0.88,
      pound    : 0.77,
      yen      : 100.16,
      rupee    : 67.14
    },
    euro: {
      usd      : 1.13,
      euro     : 1,
      pound    : 0.87,
      yen      : 113.61,
      rupee    : 75.77
    },
    pound: {
      usd      : 1.31,
      euro     : 1.16,
      pound    : 1,
      yen      : 131.42,
      rupee    : 87.60
    },
    yen: {
      usd      : 0.0099,
      euro     : 0.0088,
      pound    : 0.0076,
      yen      : 1,
      rupee    : 0.67
    },
    rupee: {
      usd      : 0.015,
      euro     : 0.013,
      pound    : 0.011,
      yen      : 1.50,
      rupee    : 1
    }
  },

  supportedCurrencies: [
    {label: 'US Dollar', value: 'usd'},
    {label: 'Euro'     , value: 'euro'},
    {label: 'Pound', value: 'pound'},
    {label: 'Yen', value: 'yen'},
    {label: 'Rupee', value: 'rupee'}
  ]
}
