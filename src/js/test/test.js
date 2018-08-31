import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

axios.defaults.adapter = httpAdapter

describe('foo', () => {
  it('bar', () => {
    nock('https://jsonplaceholder.typicode.com')
      .get('/comments')
      .reply(200, 'some payload')
  })
})

