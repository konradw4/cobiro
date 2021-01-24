import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { DataService } from "../../data/data.service";
import { Attributes } from "../../data/model/attributes";

@Injectable()
export class SectionResolve implements Resolve<Attributes> {
    constructor(private dataService: DataService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.dataService.getAttributes(route.params['id']);
    }
} 