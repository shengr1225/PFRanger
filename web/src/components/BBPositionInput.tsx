import { HStack, Text, ButtonGroup, Button, Box } from '@chakra-ui/react'

import { CHARTS, POSITIONS } from 'src/data/mttChart'

const BBPositionInput = (props: {
  setBB: (bb: number) => void
  setPosition: (pos: number) => void
  bb: number
  position: number
  disabledPosition: number
}) => {
  return (
    <Box>
      <HStack p="4">
        <Text>BB: </Text>
        <Box overflowX="scroll">
          <ButtonGroup spacing={1}>
            {Object.keys(CHARTS).map((_bb) => {
              return (
                <Button
                  key={_bb}
                  colorScheme={props.bb == parseInt(_bb) ? 'red' : 'gray'}
                  onClick={() => {
                    props.setBB(parseInt(_bb))
                  }}
                >
                  {_bb}
                </Button>
              )
            })}
          </ButtonGroup>
        </Box>
      </HStack>
      <HStack p="4">
        <Text>Position: </Text>
        <Box overflowX="scroll">
          <ButtonGroup spacing={1}>
            {POSITIONS.map((pos, index) => {
              return (
                <Button
                  key={pos}
                  colorScheme={index == props.position ? 'red' : 'gray'}
                  onClick={() => {
                    props.setPosition(index)
                  }}
                  isDisabled={index == props.disabledPosition}
                >
                  {pos}
                </Button>
              )
            })}
          </ButtonGroup>
        </Box>
      </HStack>
    </Box>
  )
}

export default BBPositionInput
