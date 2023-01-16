export interface DeleteScheduleContract {
  delete(barber_id: string): Promise<void>
}