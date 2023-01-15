import { addMinutes, format, isEqual } from "date-fns"
import pt from "date-fns/locale/pt-BR";

export class Schedule {

  calculateHours(
    barber_id: string,
    start_hour: string,
    end_hour: string,
    interval: number
  ) {
    const [hour_start, min_start] = start_hour.split(':')
    const [hour_end, min_end] = end_hour.split(':')

    let start = new Date(2023, 1, 1, Number(hour_start), Number(min_start))
    let end = new Date(2023, 1, 1, Number(hour_end), Number(min_end))

    const barber_hours = [{
      barber_id: barber_id,
      hour: format(start, 'HH:mm', {locale: pt})
    }]

    while(!isEqual(start, end)) {
      if (barber_hours.length > 50) {
        break
      }
      const incremented = addMinutes(start, interval)
      barber_hours.push({
        barber_id: barber_id,
        hour: format(incremented, 'HH:mm', {locale: pt})
      })
      start = incremented
    }

    return barber_hours
  }
}