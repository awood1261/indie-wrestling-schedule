import rawScheduleData from '../../Indies-schedule-6-11-2026.json';

export type ScheduleEvent = {
  day: string;
  date: string;
  promotion: string;
  location: string;
  time: string | null;
  website: string;
};

const scheduleData = rawScheduleData as ScheduleEvent[];

export const upcomingEvents = scheduleData.slice(0, 12);
