const input = Number(process.argv.splice(2));

if (input && input > 0) {
  setTimeout(function() {process.stdout.write('\x07')}, input);
}