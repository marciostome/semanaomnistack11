const generateUniqueId = require('../../../utils/genarateUniqueId')

describe('Generate Unique ID', () => {
  it('Shoud generate an unique ID', () => {
    const id = generateUniqueId()
    expect(id).toHaveLength(8)
  })
})