export default function (Option){
  return function (option_name, defaultValue){
    defaultValue = defaultValue || false
    
    return Option.findOne({
      where: {
        option_name: option_name
      }
    })
    .then(option => option.option_value || defaultValue)
  }
}