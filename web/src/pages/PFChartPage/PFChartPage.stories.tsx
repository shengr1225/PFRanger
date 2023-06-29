import type { ComponentMeta } from '@storybook/react'

import PfChartPage from './PfChartPage'

export const generated = () => {
  return <PfChartPage />
}

export default {
  title: 'Pages/PfChartPage',
  component: PfChartPage,
} as ComponentMeta<typeof PfChartPage>
