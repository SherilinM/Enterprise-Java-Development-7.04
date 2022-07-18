import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mainBox',
    templateUrl: './mainBox.component.html',
    styleUrls: ['./mainBox.component.css']
})
export class MainBoxComponent implements OnInit {

    backgroundColor1: string = "teal";
    color1: string = "purple";
    backgroundColor2: string = "red";
    color2: string = "green";
    backgroundColor3: string = "magenta";
    color3: string = "orangered";
    buttonText: boolean = true;

    constructor() { }

    ngOnInit(): void {
    }

    swapColors(): void {
        this.swapBox1();
        this.swapBox2();
        this.swapBox3();
    }

    swapBox1(): void {
        if (this.backgroundColor1 === "teal") {
            this.backgroundColor1 = "lightgray";
            this.color1 = "black";
        } else {
            this.backgroundColor1 = "teal";
            this.color1 = "purple";
        }
    }

    swapBox2(): void {
        if (this.backgroundColor2 === "red") {
            this.backgroundColor2 = "darkgray";
            this.color2 = "black";
        } else {
            this.backgroundColor2 = "red";
            this.color2 = "green";
        }
    }

    swapBox3(): void {
        if (this.backgroundColor3 === "magenta") {
            this.backgroundColor3 = "gray";
            this.color3 = "black";
        } else {
            this.backgroundColor3 = "magenta";
            this.color3 = "orangered";
        }
    }

}