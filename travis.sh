#!/usr/bin/env bash
set -e # halt script on error

echo 'Testing travis...'
bundle install
bundle exec jekyll build
bundle exec htmlproof ./_site --only-4xx
