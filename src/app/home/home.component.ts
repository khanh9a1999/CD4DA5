import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../Services/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent extends BaseComponent implements OnInit {

  sp:any;
  
  constructor(injector : Injector) { 
    super(injector);
   }

  ngOnInit(): void {
    this._api.get('api/sanpham/sp-all').takeUntil(this.unsubscribe).subscribe(res => {this.sp = res;})
  }

}
