import * as vue from 'vue'
import * as vueShared from '@vue/shared'
import * as vueuse from '@vueuse/core'
import { describe, expect, it } from 'vitest'
import {
  isArray,
  isBoolean,
  isDate,
  isElement,
  isEmpty,
  isFunction,
  isNumber,
  isObject,
  isPromise,
  isPropAbsent,
  isString,
  isSymbol,
  isUndefined,
  isVNode,
} from '..'

describe('types', () => {
  it('re-export from @vue/shared', () => {
    expect(isArray).toBe(vueShared.isArray)
    expect(isDate).toBe(vueShared.isDate)
    expect(isFunction).toBe(vueShared.isFunction)
    expect(isObject).toBe(vueShared.isObject)
    expect(isPromise).toBe(vueShared.isPromise)
    expect(isString).toBe(vueShared.isString)
    expect(isSymbol).toBe(vueShared.isSymbol)
  })

  it('re-export from vueuse', () => {
    expect(isBoolean).toBe(vueuse.isBoolean)
    expect(isNumber).toBe(vueuse.isNumber)
  })

  it('re-export from vue', () => {
    expect(isVNode).toBe(vue.isVNode)
  })

  it('isUndefined should work', () => {
    expect(isUndefined(undefined)).toBe(true)
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined('null')).toBe(false)
  })

  it('isEmpty should work', () => {
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty([])).toBe(true)
    expect(isEmpty({})).toBe(true)
    expect(isEmpty('hello')).toBe(false)
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty(false)).toBe(true)
  })

  it('isElement should work', () => {
    expect(isElement(document.createElement('div'))).toBe(true)
    expect(isElement(document.createElement('span'))).toBe(true)
    expect(isElement(document.createElement('h1'))).toBe(true)
    expect(isElement({})).toBe(false)
    expect(isElement('element')).toBe(false)
  })

  it('isPropAbsent should work', () => {
    expect(isPropAbsent(null)).toBe(true)
    expect(isPropAbsent(undefined)).toBe(true)
    expect(isPropAbsent(123)).toBe(false)
    expect(isPropAbsent({})).toBe(false)
  })
})
