import  { Component, OnChanges, Input,
          Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() hoho: number;

    starWidth: number;
    nrLove: number = 100;

    @Output() hehe: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.hoho * 86 / 5;
    }

    onClick(): void {
        this.hehe.emit(`The rating ${ this.nrLove+this.hoho } was clicked!`);
    }
}
