/**
 * This is the class of the job used in schedule module
 */
import * as cronTrigger from './cronTrigger';
import * as simpleTrigger from './simpleTrigger';

var jobId = 1;

var SIMPLE_JOB = 1;
var CRON_JOB  = 2;
var jobCount = 0;

var warnLimit = 500;

import { getLogger } from 'log4js'
var logger = getLogger(__filename);


//For test
var lateCount = 0;

export class Job
{
    data: any;
    func: Function;
    type: number;
    trigger: any;
    id: number;
    runTime: number;

    constructor(trigger, jobFunc, jobData)
    {
        this.data = (!!jobData) ? jobData : null;
        this.func = jobFunc;

        if (typeof (trigger) == 'string')
        {
            this.type = CRON_JOB;
            this.trigger = cronTrigger.createTrigger(trigger, this);
        } else if (typeof (trigger) == 'object')
        {
            this.type = SIMPLE_JOB;
            this.trigger = simpleTrigger.createTrigger(trigger, this);
        }

        this.id = jobId++;
        this.runTime = 0;
    };

    /**
     * Run the job code
     */
    run = function ()
    {
        try
        {
            jobCount++;
            this.runTime++;
            var late = Date.now() - this.excuteTime();
            if (late > warnLimit)
                logger.warn('run Job count ' + jobCount + ' late :' + late + ' lateCount ' + (++lateCount));
            this.func(this.data);
        } catch (e)
        {
            logger.error("Job run error for exception ! " + e.stack);
        }
    };

    /**
     * Compute the next excution time
     */
    nextTime = function ()
    {
        return this.trigger.nextExcuteTime();
    };

    excuteTime = function ()
    {
        return this.trigger.excuteTime();
    };
}
/**
 * The Interface to create Job
 * @param trigger The trigger to use
 * @param jobFunc The function the job to run
 * @param jobDate The date the job use
 * @return The new instance of the give job or null if fail
 */
export function createJob(trigger, jobFunc, jobData){
  return new Job(trigger, jobFunc, jobData);
}
