import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  propertyStatus:string;
  printedOption: string;

  id:number;
  name:string;

  options = [
    { id:1,  name: "Rent"},
    { id:2,  name: "Sale"},
    { id:3, name:"Building"},
    { id:4, name: "Office"}
  ]

  ngOnInit() {
  }
  print() {
    this.printedOption = this.propertyStatus;
    console.log( this.propertyStatus);
  }

  onSubmit(propForm: NgForm): void {
    console.log(propForm.value);

}
}



