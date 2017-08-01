import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { TimeSlotComponent } from './time-slot.component';
import { TimeSlotDetailComponent } from './time-slot-detail.component';
import { TimeSlotPopupComponent } from './time-slot-dialog.component';
import { TimeSlotDeletePopupComponent } from './time-slot-delete-dialog.component';

@Injectable()
export class TimeSlotResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const timeSlotRoute: Routes = [
    {
        path: 'time-slot',
        component: TimeSlotComponent,
        resolve: {
            'pagingParams': TimeSlotResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'planningAngularDeuxApp.timeSlot.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'time-slot/:id',
        component: TimeSlotDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'planningAngularDeuxApp.timeSlot.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const timeSlotPopupRoute: Routes = [
    {
        path: 'time-slot-new',
        component: TimeSlotPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'planningAngularDeuxApp.timeSlot.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'time-slot/:id/edit',
        component: TimeSlotPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'planningAngularDeuxApp.timeSlot.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'time-slot/:id/delete',
        component: TimeSlotDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'planningAngularDeuxApp.timeSlot.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
