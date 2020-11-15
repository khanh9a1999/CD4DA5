import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../Services/base-component';
import { Observable } from 'rxjs-compat';
import { FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends BaseComponent implements OnInit {
 
   
  
  loaisp:any;
  sp:any;
  sp_new:any;
  index:any;
  size:any;

  public products: any;
  public product: any;
  public totalRecords:any;
  public pageSize = 3;
  public page = 1;
  public uploadedFiles: any[] = [];
  public formsearch: any;
  public formdata: any;
  public doneSetupForm: any;  
  public showUpdateModal:any;
  public isCreate:any;
  constructor( private fb: FormBuilder,injector : Injector) { 
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
      this.formsearch = this.fb.group({
        'tensp': [''],
            
      });
      this.search();
        
    }
    loadPage(page) { 
      this._api.post('api/sanpham/search-product',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
        this.products = res.data;
        this.totalRecords =  res.totalItems;
        this.pageSize = res.pageSize;
        });
        
    } 
  
    search() { 
      this.page = 1;
      this.pageSize = 5;
      this._api.post('api/sanpham/search-product',{page: this.page, pageSize: this.pageSize, tensp: this.formsearch.get('tensp').value}).takeUntil(this.unsubscribe).subscribe(res => {
        this.products = res.data;
        this.totalRecords =  res.totalItems;
        this.pageSize = res.pageSize;
        });
    }
    
    
  }



