import { customerBooking } from '../data/mockData';

export async function getBookingDraft() {
  return new Promise<typeof customerBooking>(resolve => {
    setTimeout(() => resolve(customerBooking), 280);
  });
}
