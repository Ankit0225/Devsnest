class Calculator {
    constructor(previouslytypedelement, currentlytypedelement) {
        this.previouslytypedelement = previouslytypedelement
        this.currentlytypedelement = currentlytypedelement
        this.clear()
    }

    clear() {
     this.currentOperation = ''
     this.previousOperation = ''
     this.operation = undefined
    }

    delete() {
     this.currentOperation = this.currentOperation.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperation.includes('.')) return
        this.currentOperation = this.currentOperation.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperation === '') return
        if (this.previousOperation !== '') {
            this.solve()
        }
     this.operation = operation
     this.previousOperation = this.currentOperation
     this.currentOperation = ''
    }

    solve() {
      let compute 
      const prev = parseFloat(this.previousOperation)
      const current = parseFloat(this.currentOperation)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
          case '+':
          compute = prev + current
          break
          case '-':
            compute = prev - current
            break
          case '*':
            compute = prev * current
            break
          case '➗':
            compute = prev / current
            break
           default:
             return
      }
      this.currentOperation = compute
      this.operation = undefined
      this.previousOperation = ''
    }

    getDisplayNumber(number) {
        const string = number.toString()
        const integer = parseFloat(string.split('.')[0])
        const decimal = string.split('.')[1]
        let integerDisplay 
        if(isNaN(integer)) {
            integerDisplay = ''
        } else {
            integerDisplay = integer.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if(decimal != null) {
            return `${integerDisplay}.${decimal}`
        } else {
            return integerDisplay
        } 
    } 

    updatewindow() { 
     this.currentlytypedelement.innerText =
      this.getDisplayNumber(this.currentOperation)
    if(this.operation != null){
        this.previouslytypedelement.innerText = 
            `${this.getDisplayNumber(this.previousOperation)} ${this.operation}`
    } else {
        this.previouslytypedelement.innerText = ''
    }
  }
}


const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalbutton = document.querySelector('[data-equal]')
const clearbutton = document.querySelector('[data-clear]')
const allclearbutton = document.querySelector('[data-all-clear]')
const previouslytypedelement = document.querySelector('[data-previously-typed]')
const currentlytypedelement = document.querySelector('[data-current-typed]')

const calculator = new Calculator(previouslytypedelement,currentlytypedelement)

    numberButton.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText)
            calculator.updatewindow()
        })
    })

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updatewindow()
    })
})

equalbutton.addEventListener('click' , button => {
    calculator.solve()
    calculator.updatewindow()
})

allclearbutton.addEventListener('click' , button => {
    calculator.clear()
    calculator.updatewindow()
})
clearbutton.addEventListener('click', button => {
    calculator.delete()
    calculator.updatewindow()
})