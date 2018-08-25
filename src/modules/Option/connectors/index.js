import getOption from './getOption'

export default function ({Option}) {
  return {
    getOption: getOption(Option)
  }
}