import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../Services/base-component';
import { Observable } from 'rxjs-compat';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent extends BaseComponent implements OnInit {
  loaisp:any;
  sp:any;
  sp_new:any;
  index:any;
  size:any;
  constructor(injector : Injector) { 
    super(injector);
   }

  ngOnInit(): void {
    this.sp=[];
    this.index=1;
    this.size=8;
    this._api.get('api/loaisp/get-category').takeUntil(this.unsubscribe).subscribe(res => {this.loaisp = res;})
    let elem = document.getElementsByClassName("script");
    for(var i = elem.length -1; 0 <= i; i--) {
      elem[i].remove();
    }
      this.loadScripts();
      Observable.combineLatest(
        this._api.get('api/sanpham/get-all/'+this.index+'/'+this.size),
      ).takeUntil(this.unsubscribe).subscribe(res => {
        this.sp = res[0];
      }, err => {});
      Observable.combineLatest(
        this._api.get('api/sanpham/get-new'),
      ).takeUntil(this.unsubscribe).subscribe(res => {
        this.sp = res[0];
      }, err => {});
        
    }
    addToCart(it) { 
      this._cart.addToCart(it);
      alert('Thêm thành công!'); 
    }
    loadPage(page) {
      Observable.combineLatest(
        this._api.get('api/sanpham/get-all/'+page+'/'+this.size),
      ).takeUntil(this.unsubscribe).subscribe(res => {
        this.sp = res[0];
      }, err => {});
    }
  }


