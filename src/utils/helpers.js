import { LEAS_PERCENT } from './constants'

export const percentCalc = (max, min, value) => {
   if (value === min) {
      return 0
   }

   const percentage = ((value - min) / (max - min)) * 100
   return percentage
}

export const calculateResults = ({ price, percent, months }, setResults) => {
   console.log(price, percent, months)
   const calculatedPercent = Number(percent) / 100
   const initialPayment = calculatedPercent * price
   const calculatedMonths = months
   const x = Math.pow(1 + LEAS_PERCENT / 100, calculatedMonths)
   const monthly =
      ((price - initialPayment) * (x * (LEAS_PERCENT / 100))) / (x - 1)

   if (isFinite(monthly)) {
      const monthlyPaymentCalculated = Math.round(monthly)
      const totalPaymentCalculated = Math.round(
         initialPayment + months * monthlyPaymentCalculated
      )

      // Set up results to the state to be displayed to the user
      setResults({
         monthlyPayment: monthlyPaymentCalculated,
         totalPayment: totalPaymentCalculated,
      })
   }
   return
}
