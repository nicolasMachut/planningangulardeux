import { BaseEntity } from './../../shared';

export class TimeSlot implements BaseEntity {
    constructor(
        public id?: number,
        public opening?: any,
        public closing?: any,
        public numberOfPeopleNeeded?: number,
    ) {
    }
}
