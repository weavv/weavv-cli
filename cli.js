#!/usr/bin/env node

const path = require('path')
const sao = require('sao')
const cac = require('cac')
const chalk = require('chalk')
const envinfo = require('envinfo')
const welcome = require('cli-welcome')

const { version } = require('./package.json')
const generator = path.resolve(__dirname, './')
const log = console.log
const cli = cac('weavv')

const showEnvInfo = async() => {
  log(chalk.bold('\nEnvironment Info:'))
  const result = await envinfo
    .run({
      System: ['OS', 'CPU'],
      Binaries: ['Node', 'Yarn', 'npm'],
      Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari']
    })
  log(result)
  process.exit(1)
}

cli
  .command('[output_dir]', 'Create new project in custom directory or current directory')
  .option('-i, --info', 'Print out debugging information relating to the local environment')
  .option('--answers <json>', 'Skip all the prompts and use the provided answers')
  .option('--verbose', 'Show debug logs')
  .action((outDir = '.', cliOptions) => {
    if (cliOptions.info) {
      return showEnvInfo()
    }
    welcome(
      `WEAVV CSS`,
      `New project Creator\n\nWelcome! This empty project is also a build tool that bundles\nwith preprocessors and postprocessors for the frontend\ndevelopment environment.\n\nWEAVV CSS Documentation (http://weavvcss.netlify.app/)\n\n\Github (https://github.com/weavv/weavv-css)\nTwitter (https://twitter.com/weavvcss)`, {
        version: `v${version}`,
        bgColor: `#ffffff`,
        color: `#000000`,
        bold: true,
        clear: true
      }
    )
    log(chalk `Generating WEAVV CSS project in {green ${outDir}} directory.`)

    const { verbose, answers } = cliOptions
    const logLevel = verbose ? 4 : 2
    sao({ generator, outDir, logLevel, answers, cliOptions })
      .run()
      .catch((err) => {
        console.trace(err)
        process.exit(1)
      })
  })

cli.help()

cli.version(version)

cli.parse()
