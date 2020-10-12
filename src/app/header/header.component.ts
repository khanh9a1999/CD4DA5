import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../Services/base-component'
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  phone  = '0348397685';
  mail = "khanh9a1999@gmail.com";
  VN = "VietNam";
  VND = "VND";
  
  loaisp:any;
  
  constructor(injector : Injector) { 
    super(injector);
   }

  ngOnInit(): void {
    this._api.get('api/loaisp/all').takeUntil(this.unsubscribe).subscribe(res => {this.loaisp = res;})
  }

}
