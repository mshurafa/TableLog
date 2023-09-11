
import dayjs from 'dayjs'

export function getDateInMonth(year = dayjs().year(), month = dayjs().month()) {
    const startDate = dayjs().year(year).month(month).date(1)
    const endDate = startDate.endOf('month')
    const daysArray = []
    for (let index = startDate.date(); index < endDate.date(); index++) {
        daysArray.push(startDate.date(index).format('YYYY-MM-DD'))
    }
    return daysArray
}
