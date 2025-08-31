import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'

dayjs.extend(isoWeek)

export const presetOptions = [
  {
    key: 'Today',
    value: [dayjs().startOf('day'), dayjs().endOf('day')],
  },
  {
    key: 'Yesterday',
    value: [dayjs().subtract(1, 'day').startOf('day'), dayjs().subtract(1, 'day').endOf('day')],
  },
  {
    key: 'This Week',
    value: [dayjs().startOf('week'), dayjs().endOf('week')],
  },
  {
    key: 'Last Week',
    value: [dayjs().subtract(1, 'week').startOf('week'), dayjs().subtract(1, 'week').endOf('week')],
  },
  {
    key: 'This Month',
    value: [dayjs().startOf('month'), dayjs().endOf('month')],
  },
  {
    key: 'Last Month',
    value: [dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')],
  },
  {
    key: 'This Year',
    value: [dayjs().startOf('year'), dayjs().endOf('year')],
  },
  {
    key: 'Last Year',
    value: [dayjs().subtract(1, 'year').startOf('year'), dayjs().subtract(1, 'year').endOf('year')],
  },
]
