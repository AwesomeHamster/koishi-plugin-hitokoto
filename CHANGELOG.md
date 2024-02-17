# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.6] - 2024-02-17

### Added

- support `inject` in koishi v4.15.x ([#23](https://github.com/AwesomeHamster/koishi-plugin-hitokoto/pull/23))
- support yakumo HMR feature ([#24](https://github.com/AwesomeHamster/koishi-plugin-hitokoto/pull/24))
- more usage examples in README ([#15](https://github.com/AwesomeHamster/koishi-plugin-hitokoto/pull/15))

### Fixed

- fix command option to be camel case ([#27](https://github.com/AwesomeHamster/koishi-plugin-hitokoto/pull/27))
- handle axios error ([#20](https://github.com/AwesomeHamster/koishi-plugin-hitokoto/pull/20))

### Changed

- remove uncompleted languages ([`e06ffaf`](https://github.com/AwesomeHamster/koishi-plugin-hitokoto/commit/e06ffaf123f452d0c382adefcc8a5128c103001a))

## [2.1.5] - 2022-09-06

### Added

- support koishi v4.8 ([#9](https://github.com/AwesomeHamster/koishi-plugin-hitokoto/pull/9))
- update i18n translations ([`ffa4888`](https://github.com/AwesomeHamster/koishi-plugin-hitokoto/commit/ffa4888daaa51f9948d9faa7f6a68a6e4e125ff3))

## [2.1.4] - 2022-06-14

### Fixed

- fix author filed in package.json ([`b0f6b7f`](https://github.com/AwesomeHamster/koishi-plugin-hitokoto/commit/b0f6b7f5a92fa0bfd6029468d95db822d3cf8477))

## [2.1.3] - 2022-06-12

### Added

- add koishi field in package.json for koishi console / market ([`a619457`](https://github.com/AwesomeHamster/koishi-plugin-hitokoto/commit/a619457d0da84dc41dc72728f7581f8d904ce44f))

## [2.1.2] - 2022-05-12

### Added

- add `ctx.hitokoto` as a service for other koishi plugins

  - `ctx.hitokoto.getHitokoto(params)` returns a sentence from hitokoto.
  - `ctx.hitokoto.types` returns a list of hitokoto types.

- Better conprehensive descriptions of options.
- Better Japanese and English translations.
- Experimental support for more languages.

## [2.1.1] - 2022-03-26

### Added

- add `hitokoto.types` command that displays all types of hitokoto sentences
- more comprehensive README

### Fixed

- fix typo and layouts

## [2.1.0] - 2022-03-17

### Added

- initial i18n support

### Changed

- remove template customizable options
- use `ctx.http` instead of `axios`

## [2.0.1] - 2022-01-22

### Added

- add tests

## [2.0.0] - 2022-01-17

### Added

- support koishi v4

## [1.0.3] - 2021-12-28

### Added

- show error message when provide wrong options

### Changed

- template messages are customizable

### Fixed

- fix typo in template messages
- fix broken link in comments

## [1.0.2] - 2021-12-28

This patch released with no changes.

## [1.0.1] - 2021-12-28

### Added

- `hitokoto` command

[unreleased]: https://github.com/AwesomeHamster/koishi-plugin-hitokoto/compare/v2.1.5...HEAD
[2.1.5]: https://github.com/AwesomeHamster/koishi-plugin-hitokoto/compare/v2.1.4...v2.1.5
[2.1.4]: https://github.com/AwesomeHamster/koishi-plugin-hitokoto/compare/v2.1.3...v2.1.4
[2.1.3]: https://github.com/AwesomeHamster/koishi-plugin-hitokoto/compare/v2.1.2...v2.1.3
[2.1.2]: https://github.com/AwesomeHamster/koishi-plugin-hitokoto/compare/v2.1.1...v2.1.2
[2.1.1]: https://github.com/AwesomeHamster/koishi-plugin-hitokoto/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/AwesomeHamster/koishi-plugin-hitokoto/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/AwesomeHamster/koishi-plugin-hitokoto/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/AwesomeHamster/koishi-plugin-hitokoto/compare/v1.0.3...v2.0.0
[1.0.3]: https://github.com/AwesomeHamster/koishi-plugin-hitokoto/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/AwesomeHamster/koishi-plugin-hitokoto/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/AwesomeHamster/koishi-plugin-hitokoto/compare/24cb3c341e3b1537aafa295019fddc90bc6cff9a...v1.0.1
