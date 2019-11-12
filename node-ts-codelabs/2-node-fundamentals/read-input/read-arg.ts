import minimist from 'minimist'

let args = minimist(process.argv.slice(2))

console.log(args)
console.log(args.name)
console.log(args['_'])