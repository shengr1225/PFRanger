import { useState } from 'react'

import {
  Button,
  ButtonGroup,
  Checkbox,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import BBPositionInput from 'src/components/BBPositionInput'
import Chart from 'src/components/chart'

const PfChartPage = () => {
  const [bb, setBB] = useState(5)
  const [position, setPosition] = useState(1)

  const [oppoBB, setOppoBB] = useState(5)
  const [oppoPosition, setOppoPosition] = useState(2)

  const [hasOppo, setHasOppp] = useState(false)

  return (
    <>
      <MetaTags title="PfChart" description="PfChart page" />

      <Heading p="4">PFRanger</Heading>

      <Chart
        bb={bb}
        position={position}
        oppoBB={oppoBB}
        oppoPosition={oppoPosition}
        hasOppo={hasOppo}
      />

      <Heading p="4">MyRange: </Heading>

      <BBPositionInput
        setBB={setBB}
        setPosition={setPosition}
        bb={bb}
        position={position}
        disabledPosition={-1}
      />

      <HStack>
        <Heading p="4">Opponent: Allin</Heading>
        <Checkbox
          size="lg"
          isChecked={hasOppo}
          onChange={(e) => setHasOppp(e.target.checked)}
        >
          View my calling range
        </Checkbox>
      </HStack>

      <BBPositionInput
        setBB={setOppoBB}
        setPosition={setOppoPosition}
        bb={oppoBB}
        position={oppoPosition}
        disabledPosition={position}
      />
    </>
  )
}

export default PfChartPage
