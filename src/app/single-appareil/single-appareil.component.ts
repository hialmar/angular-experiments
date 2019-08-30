import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'wt-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  name = 'Appareil';
  status = 'Statut';

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) { }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.name = this.appareilService.getAppareilById(+id).name;
    // this.status = this.appareilService.getAppareilById(+id).status;

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.name = this.appareilService.getAppareilById(+id).name;
      this.status = this.appareilService.getAppareilById(+id).status;
      console.log(this.name);
    });
  }

}
