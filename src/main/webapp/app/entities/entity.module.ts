import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PlanningAngularDeuxEmployeeModule } from './employee/employee.module';
import { PlanningAngularDeuxCompanyModule } from './company/company.module';
import { PlanningAngularDeuxTimeSlotModule } from './time-slot/time-slot.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        PlanningAngularDeuxEmployeeModule,
        PlanningAngularDeuxCompanyModule,
        PlanningAngularDeuxTimeSlotModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlanningAngularDeuxEntityModule {}
