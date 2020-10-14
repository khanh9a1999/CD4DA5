import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../Services/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-type-product',
  templateUrl: './type-product.component.html',
  styleUrls: ['./type-product.component.css']
})
export class TypeProductComponent extends BaseComponent implements OnInit {

  loaisp:any;
  spofloaisp:any;
  constructor(injector : Injector) { 
    super(injector);
   }

  ngOnInit(): void {
    this._api.get('api/loaisp/loaisp-all').takeUntil(this.unsubscribe).subscribe(res => {this.loaisp = res;})
    this.spofloaisp = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/sanpham/sp-get-by-loai/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((res: any) => {
        this.spofloaisp = res;
        setTimeout(() => {
          this.loadScripts();
        });
      }); 
    });
  }

}
