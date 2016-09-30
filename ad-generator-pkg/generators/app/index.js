'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var paramCase = require('param-case');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('AppDirect Coding Challenge') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Please provide your name:',
        validate: function (value) {
          return value.length > 0 ? true : 'A name is required';
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address:',
        validate: function (value) {
          return value.length > 0 ? true : 'An email adress is required';
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a quick description about your project:'
      },
      {
        type: 'input',
        name: 'twitterKey',
        message: 'Enter your Twitter Consumer Key (API Key). If you don\'t have one yet, go to https://apps.twitter.com/ and create an app to get it:',
        validate: function (value) {
          return value.length > 0 ? true : 'A twitter consumer key is required';
        }
      },
      {
        type: 'input',
        name: 'twitterSecret',
        message: 'Enter your Twitter Consumer Secret (API Secret)',
        validate: function (value) {
          return value.length > 0 ? true : 'A twitter consumer secret is required';
        }
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        packageName: paramCase(this.props.name + ' code challenge'),
        description: this.props.description || 'A coding challenge solution',
        author: {
          name: this.props.name,
          email: this.props.email
        }
      }
    );

    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        description: this.props.description
      }
    );

    this.fs.copyTpl(
      this.templatePath('config.json'),
      this.destinationPath('config.json'),
      {
        consumerKey: this.props.twitterKey,
        consumerSecret: this.props.twitterSecret
      }
    );

    this.fs.copy(
      this.templatePath('server.js'),
      this.destinationPath('server.js')
    );
  },

  install: function () {
    this.installDependencies({bower: false});
  }
});

