"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is the class of the job used in schedule module
 */
const cronTrigger = require("./cronTrigger");
const simpleTrigger = require("./simpleTrigger");
var jobId = 1;
var SIMPLE_JOB = 1;
var CRON_JOB = 2;
var jobCount = 0;
var warnLimit = 500;
const log4js_1 = require("log4js");
var logger = log4js_1.getLogger(__filename);
//For test
var lateCount = 0;
class Job {
    constructor(trigger, jobFunc, jobData) {
        /**
         * Run the job code
         */
        this.run = function () {
            try {
                jobCount++;
                this.runTime++;
                var late = Date.now() - this.excuteTime();
                if (late > warnLimit)
                    logger.warn('run Job count ' + jobCount + ' late :' + late + ' lateCount ' + (++lateCount));
                this.func(this.data);
            }
            catch (e) {
                logger.error("Job run error for exception ! " + e.stack);
            }
        };
        /**
         * Compute the next excution time
         */
        this.nextTime = function () {
            return this.trigger.nextExcuteTime();
        };
        this.excuteTime = function () {
            return this.trigger.excuteTime();
        };
        this.data = (!!jobData) ? jobData : null;
        this.func = jobFunc;
        if (typeof (trigger) == 'string') {
            this.type = CRON_JOB;
            this.trigger = cronTrigger.createTrigger(trigger, this);
        }
        else if (typeof (trigger) == 'object') {
            this.type = SIMPLE_JOB;
            this.trigger = simpleTrigger.createTrigger(trigger, this);
        }
        this.id = jobId++;
        this.runTime = 0;
    }
    ;
}
exports.Job = Job;
/**
 * The Interface to create Job
 * @param trigger The trigger to use
 * @param jobFunc The function the job to run
 * @param jobDate The date the job use
 * @return The new instance of the give job or null if fail
 */
function createJob(trigger, jobFunc, jobData) {
    return new Job(trigger, jobFunc, jobData);
}
exports.createJob = createJob;
//# sourceMappingURL=job.js.map