export const LEAS_PERCENT = 3.5
export const CAR_COAST_MIN_MAX = [1000000, 6000000]
export const INITIAL_PAYMENT_PERCENT_MIN_MAX = [10, 60]
export const LEASE_TERM_MIN_MAX = [1, 60]

const num = 2000000

const calc = (price) => {
   return price.toLocaleString('ru-Ru')
}

console.log(calc(num))
