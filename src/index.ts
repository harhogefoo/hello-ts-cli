const num: number = +process.argv[2]

const fizzbuzz = (num: number): string => {
  if (num % 15 == 0) {
    return 'FizzBuzz'
  } else if (num % 3 == 0) {
    return 'Fizz'
  } else if (num % 5 == 0) {
    return 'Buzz'
  }
  return num.toString()
}

console.log(fizzbuzz(num))
