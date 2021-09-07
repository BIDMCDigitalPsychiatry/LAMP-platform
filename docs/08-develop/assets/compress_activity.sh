#!/bin/bash
npx --package inline-source-cli inline-source --attribute "" --compress false --root ./build ./build/index.html > dist.html
