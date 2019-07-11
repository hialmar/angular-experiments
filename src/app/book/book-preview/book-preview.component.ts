import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../../services/appareil.service';

@Component({
  selector: 'wt-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent implements OnInit {


  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitchOn(): void {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff(): void {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
