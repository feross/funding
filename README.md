# funding [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

### Let's get open source maintainers paid ✨

[travis-image]: https://img.shields.io/travis/feross/funding/master.svg
[travis-url]: https://travis-ci.org/feross/funding
[npm-image]: https://img.shields.io/npm/v/funding.svg
[npm-url]: https://npmjs.org/package/funding
[downloads-image]: https://img.shields.io/npm/dm/funding.svg
[downloads-url]: https://npmjs.org/package/funding
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### UPDATE: The experiment is over – Feross posted [a recap](https://feross.org/funding-experiment-recap/) on his blog

This is an open source funding experiment! The current model of sustaining open source is not working. We desperately need more experimentation. This is one such experiment.

## Install

```bash
npm install funding
```

### UPDATE: The experiment is over – Feross posted [a recap](https://feross.org/funding-experiment-recap/) on his blog

## What is this?

This is an open source funding experiment! ✨

Whenever users install open source software, this package will display a message from a company that supports open source. The sponsorship pays directly for maintainer time. That is, writing new features, fixing bugs, answering user questions, and improving documentation.

The goal is to make sure that packages are well-maintained now and for the foreseeable future, with regular releases, improved reliability, and timely security patches. Healthy open source packages benefit users and maintainers alike.

## What does this code do?

You can take a look! All the code is open source in this GitHub repository. Essentially, it calls `console.log()` on some text. **There is no tracking or data collecting — and it will always stay this way.** You can look at the code to verify – indeed, this is the beauty of open source!

## Where is this experiment running?

This experiment is currently running on a few open source projects that [Feross](https://github.com/feross) maintains:

- [`standard`](https://standardjs.com)

### UPDATE: The experiment is over – Feross posted [a recap](https://feross.org/funding-experiment-recap/) on his blog

## Who is Feross?

Hey there, I'm Feross!

<img src="https://feross.org/images/feross-cat.jpg" width=400 />

I'm an open source author, maintainer, and mad scientist. I maintain [100+ packages on npm](https://www.npmjs.com/~feross) which are downloaded 100+ million times per month. All my code is [freely accessible on GitHub](https://github.com/feross).

I work on innovative projects like [WebTorrent](https://github.com/webtorrent/webtorrent), a streaming torrent client for the web, [WebTorrent Desktop](https://github.com/webtorrent/webtorrent-desktop), a slick torrent app for Mac/Windows/Linux, and [StandardJS](https://github.com/standard/standard), a JavaScript style guide, linter, and automatic code fixer. I also work on fun projects like [BitMidi](https://bitmidi.com), a free MIDI database, and [Play](https://play.cash), a music video app.

I wrote and maintain several popular browserify + webpack ecosystem packages like [buffer](https://github.com/feross/buffer) (38M downloads/month) and [safe-buffer](https://github.com/feross/safe-buffer) (64M downloads/month). Some of my favorite npm packages that I've written are [simple-get](https://github.com/feross/simple-get) (4M downloads/month), [run-parallel](https://github.com/feross/run-parallel) (1.6M downloads/month), and [simple-peer](https://github.com/feross/simple-peer) (32K downloads/month).

In the past, I was on the Node.js Board of Directors, representing individual Node.js users like you! It was an unpaid position, but I was happy to play some small part in making things better for everyone. Just for fun, a couple years ago I helped organize [ArcticJS](https://arcticjs.club/2017/), an impromptu JavaScript conference in Svalbard, the northern-most human settlement on Earth, with some amazing friends.

## What is the long-term goal?

My goal with this experiment is to make StandardJS healthier. If we learn that the experiment works, perhaps we can help make all open source healthier, too. For complex reasons, companies are generally hesitant or unwilling to fund open source directly. When it does happen, it's never enough and it never reaches packages which are transitive dependencies (i.e. packages that no one installs explicitly and therefore no one knows exists). Essentially, we have a public good which is consumed by huge numbers of users, but which almost no one pays for. Fortunately, there exists a funding model that usually works for public goods like this – ads. The goal of this experiment is to answer the question: Can we use ethical ads – ads that don't track users or collect data – to fund open source software?

## What will the funds be used for?

The funds raised so far ($2,000) have paid for Feross's time to [release Standard 14](https://standardjs.com/changelog.html#1400---2019-08-19) which has taken around five days. If we are able to raise additional funds, the next thing we'd like to focus on is out-of-the-box TypeScript support in StandardJS (one of the most common feature requests!) and modernizing the various text editor plugins (many of which are currently unmaintained).

## Where can I provide feedback about this experiment?

You can open an issue. But please be kind. I'm a human with feelings. ❤️

## How can I disable this?

Just to be super clear: **This package does no tracking or data collecting — and it will always stay this way.** It's just a fancy `console.log()`.

If you support open source through direct contributions, donations, or however else you see fit, you can permanently silence `funding` by adding an environment variable `OPEN_SOURCE_CONTRIBUTOR=true` to your terminal environment.

Note, `funding` also respects npm's `loglevel` setting, so e.g. `npm install --silent` and `npm install --quiet` will be respected.
