import { Component, Input } from '@angular/core';

import { ImageFormats } from '../data/model/image-formats';

@Component({
    selector: 'member-image',
    templateUrl: './member-image.component.html',
    styleUrls: ['./member-image.component.scss']
})
export class MemberImageComponent {
    @Input() public imagesData: ImageFormats;

    constructor() { }
}
