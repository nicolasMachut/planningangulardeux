import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlanningAngularDeuxSharedModule } from '../../shared';
import {
    TimeSlotService,
    TimeSlotPopupService,
    TimeSlotComponent,
    TimeSlotDetailComponent,
    TimeSlotDialogComponent,
    TimeSlotPopupComponent,
    TimeSlotDeletePopupComponent,
    TimeSlotDeleteDialogComponent,
    timeSlotRoute,
    timeSlotPopupRoute,
    TimeSlotResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...timeSlotRoute,
    ...timeSlotPopupRoute,
];

@NgModule({
    imports: [
        PlanningAngularDeuxSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        TimeSlotComponent,
        TimeSlotDetailComponent,
        TimeSlotDialogComponent,
        TimeSlotDeleteDialogComponent,
        TimeSlotPopupComponent,
        TimeSlotDeletePopupComponent,
    ],
    entryComponents: [
        TimeSlotComponent,
        TimeSlotDialogComponent,
        TimeSlotPopupComponent,
        TimeSlotDeleteDialogComponent,
        TimeSlotDeletePopupComponent,
    ],
    providers: [
        TimeSlotService,
        TimeSlotPopupService,
        TimeSlotResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlanningAngularDeuxTimeSlotModule {}
