import { Component, OnInit } from '@angular/core';
import { WeaponService } from 'src/app/shared/weapon.service';
import { NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {

  constructor(public service:WeaponService,private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();

    this.service.formData={
      WPN_ID: null,
      Manufacturer:'',
      Model:'',
      Serial_number: null,
      Accuracy: null,
      Wpn_Caliber:''
    }
  }
  onSubmit(form:NgForm){
    if(form.value.WPN_ID==null)
      this.insertRecord(form);
      else
      this.updateRecord(form);
  }
  insertRecord(form:NgForm){
    //console.log(this.service.formData);
    this.service.postWeapon(form.value).subscribe(res =>{
      this.toastr.success('Inserted succesfully','WPN. Register')
      this.resetForm(form);
      this.service.refreshList();
      //console.log();
    });
  }
  updateRecord(form:NgForm){
    //console.log(this.service.formData);
    this.service.putWeapon(form.value).subscribe(res=>{
      this.toastr.info('Updated Sucessfully','WPN. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

}
