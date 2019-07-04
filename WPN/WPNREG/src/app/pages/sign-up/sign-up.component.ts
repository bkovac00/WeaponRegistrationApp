import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { ToastrService } from 'ngx-toastr'
 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  constructor(public service: UserService, private toastr: ToastrService) { }
 
  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form ?: NgForm) {
    if (form != null)
      form.reset();

      this.service.formData={
        USR_ID: null,
        UserName: '',
        Password: '',
        Email: '',
        FirstName: '',
        LastName: ''
    }
  }
    onSubmit(form:NgForm){
      if(form.value.USR_ID==null)
        this.insertRecord(form);
        else
        this.updateRecord(form);
    }
    insertRecord(form:NgForm){
      //console.log(this.service.formData);
      this.service.postUser(form.value).subscribe(res =>{
        this.toastr.success('Inserted succesfully','USR. Register')
        this.resetForm(form);
        this.service.refreshList();
        //console.log();
      });
    }
    updateRecord(form:NgForm){
      //console.log(this.service.formData);
      this.service.putUser(form.value).subscribe(res=>{
        this.toastr.info('Updated Sucessfully','USR. Register');
        this.resetForm(form);
        this.service.refreshList();
      });
    }
}