import { Job } from './job';
export declare class CronTrigger {
    trigger: any;
    nextTime: Date;
    job: Job;
    /**
     * The constructor of the CronTrigger
     * @param trigger The trigger str used to build the cronTrigger instance
     */
    constructor(trigger: any, job: Job);
    /**
     * Get the current excuteTime of trigger
     */
    excuteTime: () => any;
    /**
     * Caculate the next valid cronTime after the given time
     * @param The given time point
     * @return The nearest valid time after the given time point
     */
    nextExcuteTime: (time: any) => any;
    /**
     * Decude the cronTrigger string to arrays
     * @param cronTimeStr The cronTimeStr need to decode, like "0 12 * * * 3"
     * @return The array to represent the cronTimer
     */
    decodeTrigger: (cronTimeStr: any) => any;
    /**
     * Decode the cron Time string
     * @param timeStr The cron time string, like: 1,2 or 1-3
     * @return A sorted array, like [1,2,3]
     */
    decodeTimeStr: (timeStr: any, type: any) => any[] | -1;
}
/**
 * Create cronTrigger
 * @param trigger The Cron Trigger string
 * @return The Cron trigger
 */
export declare function createTrigger(trigger: any, job: any): CronTrigger;
