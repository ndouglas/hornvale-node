module.exports = {
  '**/*.js': (filenames) => [
    // Lint then format JavaScript files
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
    // Run unit tests relating to modified files
    `jest --passWithNoTests --findRelatedTests ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
};
