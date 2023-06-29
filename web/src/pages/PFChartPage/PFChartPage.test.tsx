import { render } from '@redwoodjs/testing/web'

import PfChartPage from './PfChartPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PfChartPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PfChartPage />)
    }).not.toThrow()
  })
})
