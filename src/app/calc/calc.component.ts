import { Component, OnInit  } from '@angular/core';

@Component({
    selector: 'calc',
    templateUrl: 'calc.component.html',
    styleUrls: ['calc.component.css']
})



export class CalcComponent {
    public firstNumber : number;
    public secondNumber : number;
    public result : number;

    public add() {
        this.result = this.firstNumber + this.secondNumber;
        console.log(this.result);
    }

    ngOnInit() {
    }

}