/**
 * The PriorityQeueu class
 */
export declare class PriorityQueue {
    constructor(comparator: any);
    init: (comparator: any) => void;
    /**
     * Return the size of the pirority queue
     * @return PirorityQueue size
     */
    size: () => any;
    /**
     * Insert an element to the queue
     * @param element The element to insert
     */
    offer: (element: any) => void;
    /**
     * Get and remove the first element in the queue
     * @return The first element
     */
    pop: () => any;
    /**
     * Get but not remove the first element in the queue
     * @return The first element
     */
    peek: () => any;
    _defaultComparator: (a: any, b: any) => boolean;
}
export declare function createPriorityQueue(comparator: any): PriorityQueue;
