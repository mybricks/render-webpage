import setUp from "../utils"
import json from './json.json'

describe('两次设置列表数据的值', () => {
   beforeEach(() => {
    setUp(json)
  })
  it('两次都能正确触发', () => {

      cy.contains('二次赋值').as('btn')
      cy.contains('插槽触发次数为0')
      
      cy.get('@btn').click()
      // 点击赋值，给列表传递一个长度为3的数组，共触发3次io
      cy.contains('item0')
      cy.contains('item1')
      cy.contains('item2')
      cy.contains('插槽触发次数为3')

      cy.get('@btn').click()
      cy.contains('item0')
      cy.contains('item1')
      cy.contains('item2')
      // 再次点击累计触发6次
      cy.contains('插槽触发次数为6')
      
  })
})