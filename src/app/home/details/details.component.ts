import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../Services/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent extends BaseComponent implements OnInit {
  loaisp:any;
  ct:any;
  constructor(injector : Injector) { 
    super(injector);
   }

   ngOnInit(): void {
    this.ct = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/sanpham/sp-get-by-id/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((res: any) => {
        this.ct = res;
        setTimeout(() => {
          this.loadScripts();
        });
      }); 
    });
    this._api.get('api/loaisp/loaisp-all').takeUntil(this.unsubscribe).subscribe(res => {this.loaisp = res;})
  }
  

}
