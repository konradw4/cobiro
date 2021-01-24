import { Injectable } from '@angular/core';

import { Attributes } from '../data/model/attributes';
import { Member } from '../data/model/member';

@Injectable({
    providedIn: 'root'
})
export class SectionService {

    constructor() { }

    public getSectionTitle = (data: Attributes): string => {
        if (data) {
            return data.title
        }
    };

    public getMembers = (data: Attributes): Member[] => {
        if (data) {
            const result = [];
            for (const member of Object.keys(data.memberCards)) {
                result.push(data.memberCards[member]);
            }
            return result;
        }
    };
}
