import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../Services/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent extends BaseComponent implements OnInit {
  
  ct:any;
  constructor(injector : Injector) { 
    super(injector);
   }

  ngOnInit(): void {
    this._api.get('api/sanpham/sp-get-by-id/{id}').takeUntil(this.unsubscribe).subscribe(res => {this.ct = res;})
  }

}
