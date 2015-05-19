# angular-eha.unique

[![Build Status][travis-image]][travis-url]

> Validate two model values are unique

[travis-image]: https://img.shields.io/travis/eHealthAfrica/angular-eha.unique.svg
[travis-url]: https://travis-ci.org/eHealthAfrica/angular-eha.unique

## Usage

Compares a model value with a property of a given object.

```html
<input
  name="id"
  ng-model="first.id"
  eha-unique="second"
  eha-unique-property="id"
>
```

If `first.id === second.id`, the `id` input will be marked invalid.

## Installation

Install with npm:

    npm install --save angular-eha.unique

Or alternatively bower:

    bower install --save angular-eha.unique

Then simply add `eha.unique` as a dependency somewhere in your project that
makes sense and you're good to go.

## License

Copyright 2015 Tom Vincent <git@tlvince.com>

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the License for the specific language governing permissions and limitations under the License.
