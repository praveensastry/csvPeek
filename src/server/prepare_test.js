/* @flow weak */

"use strict"

import url from "url"
import prepare from "./prepare.js"

export function testBasic(test) {
  var address = 'http://charted.co/'
  var parsed = url.parse(address)

  test.equal(url.format(prepare(parsed)), address)
  test.done();
}

export function testDropbox(test) {
  test.equal(url.format(prepare(url.parse('http://dropbox.com/s/abcdef/my.csv'))),
    'http://dropbox.com/s/abcdef/my.csv?raw=1')

  test.equal(url.format(prepare(url.parse('http://www.dropbox.com/s/abcdef/my.csv'))),
    'http://www.dropbox.com/s/abcdef/my.csv?raw=1')

  test.done()
}

export function testGoogleSpreadsheets(test) {
  test.equal(
    url.format(prepare(url.parse('https://docs.google.com/spreadsheets/d/1N9Vpl941bR-yN_ZlMHvlc4soDrCxswsORpvjDTbKaiw/edit#gid=2090366728', true))),
    'https://docs.google.com/spreadsheets/d/1N9Vpl941bR-yN_ZlMHvlc4soDrCxswsORpvjDTbKaiw/export?gid=2090366728&format=csv')

  test.equal(
    url.format(prepare(url.parse('https://docs.google.com/spreadsheets/d/1N9Vpl941bR-yN_ZlMHvlc4soDrCxswsORpvjDTbKaiw/edit', true))),
    'https://docs.google.com/spreadsheets/d/1N9Vpl941bR-yN_ZlMHvlc4soDrCxswsORpvjDTbKaiw/export?gid=0&format=csv')

  // https://github.com/mikesall/charted/issues/77
  test.equal(
    url.format(prepare(url.parse('https://docs.google.com/spreadsheets/d/1i5INeh718Hj2AiKbiRq5eRL5qiekHR9Lzvs4NjCNmtc/edit?usp=sharing', true))),
    'https://docs.google.com/spreadsheets/d/1i5INeh718Hj2AiKbiRq5eRL5qiekHR9Lzvs4NjCNmtc/export?usp=sharing&gid=0&format=csv'
  )
  test.done()
}
