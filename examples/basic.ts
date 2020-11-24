import { WebREPL } from '../src/main'
import { InvalidPassword } from '../src/errors'

const host = '10.12.50.101'
const password = 'test'

const run = async () => {
  try {
    const webrepl = new WebREPL({ attachStateToWindow: true })
    await webrepl.connect(host, password)
  } catch (e) {
    // probably invalid password, but could also invalid host or another websocket error
    if (e instanceof InvalidPassword) {
      console.error('invalid password')
    } else {
      console.error(e)
    }
  }
}

run()
