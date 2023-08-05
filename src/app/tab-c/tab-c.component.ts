import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-c',
  templateUrl: './tab-c.component.html',
  styleUrls: ['./tab-c.component.scss']
})
export class TabCComponent implements OnInit {
  constructor() { }
public name !: string;
public text !:string
  ngOnInit(): void {
  }

}

