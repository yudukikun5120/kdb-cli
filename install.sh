#!/bin/bash

# Description: Install kdb-cli
# Author: Arai Yuzuki
# License: MIT

curl https://raw.githubusercontent.com/Mimori256/kdb-parse/main/kdb_structural.json > courses.json
npx yarn
npx yarn build
npx yarn link
chmod +x /usr/local/bin/kdb
