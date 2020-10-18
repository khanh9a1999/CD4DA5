import { BaseComponent } from '../Services/base-component';
import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends BaseComponent implements OnInit {

  items:any;
  total:any;
  tongtien:any;
  public orderForm: FormGroup;
  constructor(injector: Injector) { 
    super(injector);
  }
  
  ngOnInit(): void {
    this.orderForm = new FormGroup({
      tenKH: new FormControl('', Validators.required),
      ngayBan: new FormControl('', Validators.required),
      pTTT: new FormControl('', Validators.required),
      trangThai: new FormControl('', Validators.required),
    });

    this._cart.items.subscribe((res) => {
      this.items = res;
      this.total = 0;
      for(let x of this.items){
        x.soLuong = +x.quantity;
        x.money = x.quantity * x.donGia;
        this.total += x.quantity * x.donGia;
      }
    });

  }
  onSubmit(value: any) {
    let order = {
      tenKH: value.tenKH,
       ngayBan: value.ngayBan,
       pTTT: value.pTTT,
       trangThai:value.trangThai,
       listjson_chitiet:this.items
      };
    this._api.post('/api/hdb/create-hdb', order).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Tạo thành công');
       }, err => { });      
 
  }

}
