# Basic Trend

Basic algorithm to detect increasing, decreasing or stable trend in a Numbers sequence.

## Installation

```bash
$ npm install --save basic-trend
```

## Usage

```javascript
import trend from 'basic-trend';

const sequence = [5,4,7,8,5,2,1,4,5,2,145,7,54,2,6,5,48,6,2,4,101,4,5,75,4,1,2,4,7,5,1,2,5,65,4,4,7,8];

const trend = trend(sequence);
```

## Concept

- If the given sequence appears to be increasing this method will return `1`
- If the given sequence appears to be decreasing, this method will return `-1`
- If the given sequence appears to be stable or scattered, this method will return `0`
