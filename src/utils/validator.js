// 密码的验证 大于6位小于20位的数字+密码
export const VALIDATOR_PASSWORD = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
// 邮箱的验证
const  VALIDATOR_EMAIL = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
export function testEmail (value) {
  return VALIDATOR_EMAIL.test(value)
}