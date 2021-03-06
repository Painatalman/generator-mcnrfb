/**
 * @link https://scotch.io/tutorials/create-a-custom-yeoman-generator-in-4-easy-steps
 */
'use strict';
//Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

// Helper
// get date in the 'yyyy-mm-dd' format, with a Date object as parameter

function getIsoDate(date) {
  return date.toISOString().split('T')[0];
}

module.exports = yeoman.Base.extend({
  /**
   * questions to ask the user
   * @link http://code.tutsplus.com/tutorials/build-your-own-yeoman-generator--cms-20040
   * @link https://scotch.io/tutorials/create-a-custom-yeoman-generator-in-4-easy-steps
   */
  prompting: function() {
    var done = this.async();

    var prompts = [{
        name: 'name',
        message: 'What is your app\'s name (short name, no spaces or special characters)?',
        //Defaults to the project's folder name if the input is skipped
        default: this.appname
      }, {
        name: 'fullName',
        message: 'And your project\'s real name? (leave blank for default)',
        //Defaults to the project's folder name if the input is skipped
        default: this.appname
      }, {
        name: 'description',
        message: 'And your project\'s description?',
        default: ''
      }
      //, {
      //   type: 'confirm',
      //   name: 'addDemoSection',
      //   message: 'Would you like to generate a demo section ? (WIP)',
      //   default: true
      // }
    ];

    this.prompt(prompts, function(props) {
      var date = new Date();
      console.log('Created at ' + date);
      this.props = props;
      this.props.initialDate = getIsoDate(date);

      done();
    }.bind(this));
  },
  writing: {
    //Copy the configuration files
    config: function() {
      var context = {
        name: this.props.name,
        description: this.props.description,
        date: this.props.initialDate
      };

      console.log('Starting to create project starting at', context.date);

      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'),
        context
      );
      
      this.fs.copyTpl(
        this.templatePath('_LICENSE'),
        this.destinationPath('LICENSE')
      );

      this.fs.copy(
        this.templatePath('_babelrc'),
        this.destinationPath('.babelrc')
      );
      this.fs.copy(
        this.templatePath('_editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('_eslintrc'),
        this.destinationPath('.eslintrc')
      );
      this.fs.copy(
        this.templatePath('_stylelintrc'),
        this.destinationPath('.stylelintrc')
      );
      this.fs.copy(
        this.templatePath('_flowconfig'),
        this.destinationPath('.flowconfig')
      );
      this.fs.copy(
        this.templatePath('_postcss.config.js'),
        this.destinationPath('postcss.config.js')
      );
      this.fs.copy(
        this.templatePath('_gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('_backstop.json'),
        this.destinationPath('.backstop.json')
      );
      this.fs.copy(
        this.templatePath('_webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
    },
    // Copy app files
    app: function() {
      var context = {
        name: this.props.name,
        description: this.props.description,
        date: this.props.initialDate
      };

      this.fs.copyTpl(
        this.templatePath('dist'),
        this.destinationPath('dist'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('src'),
        this.destinationPath('src'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('__tests__'),
        this.destinationPath('__tests__'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('stories'),
        this.destinationPath('stories'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('.storybook'),
        this.destinationPath('.storybook'),
        context
      );
    }
  },
  install: function() {
    // Install dependencies
    this.installDependencies();
  }
});
