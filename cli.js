#!/usr/bin/env node

const path = require("path");
const sao = require("sao");
const cac = require("cac");
const chalk = require("chalk");
const envinfo = require("envinfo");
const welcome = require("cli-welcome");

const { version } = require("./package.json");
const generator = path.resolve(__dirname, "./");
const cli = cac("weavv");

const showEnvInfo = async () => {
  console.log(chalk.bold("\nEnvironment Info:"));
  const result = await envinfo.run({
    System: ["OS", "CPU", "Memory", "Shell"],
    Binaries: ["Node", "Yarn", "npm"],
    Browsers: ["Chrome", "Edge", "Firefox", "Safari"],
    IDEs: ["Android Studio", "Atom", "Emacs", "Nano", "VSCode", "Vim", "Xcode"],
  });
  console.log(result);
  process.exit(1);
};

cli
  .command(
    "[output_dir]",
    "Create new project in custom directory or current directory"
  )
  .option(
    "-i, --info",
    "Print out debugging information relating to the local environment"
  )
  .option(
    "--answers <json>",
    "Skip all the prompts and use the provided answers"
  )
  .option("--verbose", "Show debug logs")
  .action((outDir = ".", cliOptions) => {
    if (cliOptions.info) {
      return showEnvInfo();
    }
    welcome(
      `WEAVV CLI`,
      `\n\nCreate new frontend project with WEAVV CSS framework\nand scaffolding instantly bundles with necessary build\ntools for HTML, CSS/SCSS, JS and image assets.\n\nDocumentation (http://weavvcss.netlify.app)\n\n\Github (https://github.com/weavv/weavv-css)\nTwitter (https://twitter.com/weavvcss),\nDiscord (https://discord.gg/GQh499GpGq)\n\n$ weavv --help`,
      {
        version: `v${version}`,
        bgColor: `#ffffff`,
        color: `#000000`,
        bold: true,
        clear: true,
      }
    );
    console.log(
      chalk`Generate WEAVV CSS project in {green ${outDir}} directory.`
    );

    const { verbose, answers } = cliOptions;
    const logLevel = verbose ? 4 : 2;
    sao({ generator, outDir, logLevel, answers, cliOptions })
      .run()
      .catch((err) => {
        console.trace(err);
        process.exit(1);
      });
  });

cli.help();
cli.version(version);
cli.parse();
