import { position } from '@chakra-ui/react'

export const withinRange = (hand: string, range: Array<string>) => {
  return range.some((r) => {
    const last = r.substring(r.length - 1)
    const first = r.substring(0, 1)
    const second = r.substring(1, 2)
    const suited = r.substring(2, 3)
    if (last == '+') {
      let tempRange = []
      if (first == second) {
        tempRange = NUMBERS.slice(0, NUMBERS.indexOf(first) + 1).map(
          (num) => num + num
        )
      } else {
        tempRange = NUMBERS.slice(
          NUMBERS.indexOf(first) + 1,
          NUMBERS.indexOf(second) + 1
        ).map((num) => first + num + suited)
      }

      // console.log(tempRange)

      if (tempRange.some((t) => t == hand)) {
        return true
      }
    } else {
      if (hand == r) {
        return true
      }
    }
  })
}

export const getCallingRange = (
  position: number,
  bb: number,
  oppoBB: number,
  oppoPosition: number,
  oppoRange: Array<string>
): Array<string> => {
  const potSize = bb > oppoBB ? oppoBB : bb + 1.5
  const potOdd = bb / (bb + potSize)
  console.log('pod odd is: ' + (potOdd * 100).toFixed(2) + '%')
  console.log('oppo range: ' + oppoRange)

  const rr = oppoRange.map((r) => {
    const last = r.substring(r.length - 1)
    const first = r.substring(0, 1)
    const second = r.substring(1, 2)
    const suited = r.substring(2, 3)
    if (last == '+') {
      let newRange
      if (first == second) {
        const potOddIndex =
          Math.ceil((NUMBERS.indexOf(first) + 1) * (1 - potOdd)) - 1
        const endNumber = NUMBERS[potOddIndex]
        newRange = endNumber + endNumber + '+'
      } else {
        const potOddIndex = Math.ceil(
          (NUMBERS.indexOf(second) - NUMBERS.indexOf(first)) * (1 - potOdd)
        )

        const endNumber = NUMBERS[NUMBERS.indexOf(first) + potOddIndex - 1]
        newRange =
          first +
          endNumber +
          suited +
          (NUMBERS.indexOf(endNumber) - NUMBERS.indexOf(first) == 1 ? '' : '+')
      }
      return newRange
    } else {
      return ''
    }
  })

  const callingRange = rr.filter((n) => n)
  console.log('calling range: ' + callingRange)
  return callingRange
}

const NUMBERS = [
  'A',
  'K',
  'Q',
  'J',
  'T',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
]
