import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from 'src/app/core/models/announcement';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  announcement:Announcement;
//get id from path
//use service activated route to get the id from the path
constructor(private route:ActivatedRoute , private announcementService:AnnouncementService , private router: Router){
}
ngOnInit(): void {
  //use snapshot
  //console.log(this.route.snapshot.params['id']);
  let id=this.route.snapshot.params['id']
  //implement getAnnouncmentById in the server
  this.announcementService.getAnnouncementById(id).subscribe(
    (data:Announcement)=>{
    this.announcement=data;
    console.log(this.announcement);
  }
)

}

deleteAnnouncement(id:any): void {
  this.announcementService.deleteAnnouncement(id).subscribe(
    () => {
      this.router.navigate(['announcement/list']); 
    }
  );
  
}
}
