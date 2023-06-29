import { Box, Grid, GridItem, Text } from '@chakra-ui/react'

import { ALLHANDS } from 'src/data/hands'
import { CHARTS } from 'src/data/mttChart'
import { withinRange, getCallingRange } from 'src/util/rangeUtil'

type ChartPropsType = {
  bb: number
  position: number
  oppoBB: number
  oppoPosition: number
  hasOppo: boolean
}

const Chart = (props: ChartPropsType) => {
  let range = []
  if (props.hasOppo) {
    const oppoRange = CHARTS[props.oppoBB][props.oppoPosition]
    range = getCallingRange(
      props.position,
      props.bb,
      props.oppoBB,
      props.oppoPosition,
      oppoRange
    )
  } else {
    range = CHARTS[props.bb][props.position]
  }
  return (
    <Box p="4">
      <Grid
        templateColumns="repeat(13, minmax(min-content, 1fr))"
        templateRows="repeat(13, 32px)"
        gap={1}
        fontWeight="bold"
        color="blackAlpha.900"
        fontSize="xl"
        textAlign="center"
      >
        {ALLHANDS.map((hands) => {
          return hands.map((hand) => {
            return (
              <GridItem
                key={hand}
                bg={withinRange(hand, range) ? 'yellow' : 'white'}
              >
                {hand}
              </GridItem>
            )
          })
        })}
      </Grid>
      <Text>Ante: 12.5%</Text>
    </Box>
  )
}

export default Chart
