const { format } = require("path");

module.exports = {
    default: {
  // removed tags property
      parallel: 3,
      formatOptions: {
        snippetInterface: 'async-await'
      },
      paths: [
        'features/'
      ],
      dryRun: false,
      require: [
        'features/step_definitions/*.js',
        'features/hooks/hooks.js',
        'features/support/support.js'
      ],
      format:[
        'html:cucumber-report.html'
      ]
    }
  }