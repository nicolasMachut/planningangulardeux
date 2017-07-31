import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Injectable()
export class EmployeePopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private employeeService: EmployeeService

    ) {
        this.ngbModalRef = null;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (id) {
                this.employeeService.find(id).subscribe((employee) => {
                    if (employee.birthDate) {
                        employee.birthDate = {
                            year: employee.birthDate.getFullYear(),
                            month: employee.birthDate.getMonth() + 1,
                            day: employee.birthDate.getDate()
                        };
                    }
                    this.ngbModalRef = this.employeeModalRef(component, employee);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.employeeModalRef(component, new Employee());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    employeeModalRef(component: Component, employee: Employee): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.employee = employee;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
