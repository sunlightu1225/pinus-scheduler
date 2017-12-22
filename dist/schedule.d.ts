/**
 * Schedule a new Job
 */
declare function scheduleJob(trigger: any, jobFunc: any, jobData: any): number;
/**
 * Cancel Job
 */
declare function cancelJob(id: any): boolean;
export { scheduleJob, cancelJob };
