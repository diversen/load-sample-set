# load-sample-set

Loads a set of samples as buffer instruments using `promises`. 

It uses this format: 

https://github.com/oramics/sampled/blob/master/DM/CR-78/sampled.instrument.json

So it is quite easy to make your own sample-sets. 

I could see that some different packages loads the above json format, but I had problems
compiling these into a bundle for browser usage, so I made this package in order
to learn a thing or two about webAudio. 

## install

npm install --save load-sample-set

Or use the `dist` script

## Usage: 

See: 

[index.html](index.html)

## Related 

[audio-buffer-instrument](https://www.npmjs.com/package/audio-buffer-instrument)

MIT © [Dennis Iversen](https://github.com/diversen)
