import { BaseEntity } from './../../shared';

export class Company implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public maxHoursPerDay?: number,
        public timeSlotId?: number,
    ) {
    }
}
