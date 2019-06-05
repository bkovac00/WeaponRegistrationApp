import { Component, OnInit } from '@angular/core';
import { WeaponService } from 'src/app/shared/weapon.service';
import { Weapon } from 'src/app/shared/weapon.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})
export class WeaponListComponent implements OnInit {

  constructor(public service: WeaponService,
    public toastr: ToastrService) { }

  ngOnInit() {
    this.service.getWeapons();
  }
  populateForm(wpn:Weapon){
    this.service.formData=Object.assign({}, wpn)
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteWeapon(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'WPN. Register');
      });
    }
  }

}
