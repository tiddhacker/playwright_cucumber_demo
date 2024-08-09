module.exports = {
    default: {
  // removed tags property
      formatOptions: {
        snippetInterface: 'async-await'
      },
      paths: [
        'features/'
      ],
      dryRun: false,
      require: [
        'features/step_definitions/*.js',
        'features/hooks/hooks.js'
      ],
      parallel: process.env.CI ? 10 : 1
    }
  }