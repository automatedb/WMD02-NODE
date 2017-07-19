// const env = process.argv[2];
// const port = process.argv[3];
// const ip = process.argv[4];
//
// console.log(env, port, ip);

const ArgumentParser = require('argparse').ArgumentParser;

const parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Argparse example'
});

parser.addArgument(
    [ '-e', '--env' ],
    {
        help: 'Environment application'
    }
);

parser.addArgument(
    [ '-p', '--port' ],
    {
        help: 'Port of the application'
    }
);


parser.addArgument(
    [ '-i', '--ip' ],
    {
        help: 'IP of the application'
    }
);

const config = parser.parseArgs();

console.log(config.env);
console.log(config.port);
console.log(config.ip);