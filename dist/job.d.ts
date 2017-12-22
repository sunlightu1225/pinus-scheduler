export declare class Job {
    data: any;
    func: Function;
    type: number;
    trigger: any;
    id: number;
    runTime: number;
    constructor(trigger: any, jobFunc: any, jobData: any);
    /**
     * Run the job code
     */
    run: () => void;
    /**
     * Compute the next excution time
     */
    nextTime: () => any;
    excuteTime: () => any;
}
/**
 * The Interface to create Job
 * @param trigger The trigger to use
 * @param jobFunc The function the job to run
 * @param jobDate The date the job use
 * @return The new instance of the give job or null if fail
 */
export declare function createJob(trigger: any, jobFunc: any, jobData: any): Job;
