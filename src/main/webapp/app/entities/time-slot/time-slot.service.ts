import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils } from 'ng-jhipster';

import { TimeSlot } from './time-slot.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class TimeSlotService {

    private resourceUrl = 'api/time-slots';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(timeSlot: TimeSlot): Observable<TimeSlot> {
        const copy = this.convert(timeSlot);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    update(timeSlot: TimeSlot): Observable<TimeSlot> {
        const copy = this.convert(timeSlot);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    find(id: number): Observable<TimeSlot> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        for (let i = 0; i < jsonResponse.length; i++) {
            this.convertItemFromServer(jsonResponse[i]);
        }
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convertItemFromServer(entity: any) {
        entity.opening = this.dateUtils
            .convertDateTimeFromServer(entity.opening);
        entity.closing = this.dateUtils
            .convertDateTimeFromServer(entity.closing);
    }

    private convert(timeSlot: TimeSlot): TimeSlot {
        const copy: TimeSlot = Object.assign({}, timeSlot);

        copy.opening = this.dateUtils.toDate(timeSlot.opening);

        copy.closing = this.dateUtils.toDate(timeSlot.closing);
        return copy;
    }
}
