import { Job } from "./job";
/**
 * The constructor of simple trigger
 */
export declare class SimpleTrigger {
    nextTime: Date;
    period: number;
    count: number;
    job: Job;
    constructor(trigger: any, job: any);
    /**
     * Get the current excuteTime of rigger
     */
    excuteTime: () => any;
    /**
     * Get the next excuteTime of the trigger, and set the trigger's excuteTime
     * @return Next excute time
     */
    nextExcuteTime: () => any;
}
/**
 * Create Simple trigger
 */
export declare function createTrigger(trigger: any, job: any): SimpleTrigger;
