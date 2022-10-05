import PromptSync from 'prompt-sync'

const prompt = PromptSync({ sigint: true })

const getDaysFromUserInput = () => {

  let value = prompt('Entre com os dias: ')

  if (isNaN(value)) {
    console.log('Insira um número!')
    return getDaysFromUserInput()
  }

  if (value <= 0) {
    console.log('Insira um valor maior que 0!')
    return getDaysFromUserInput()
  }

  return value
}

export default getDaysFromUserInput