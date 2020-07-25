import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges, OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CockpitComponent implements OnInit, OnChanges {
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // tslint:disable-next-line:no-output-rename
  @Output('bpCreated') blueprintCreated =
    new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
  }

  onAddServer(serverInput: HTMLInputElement): void {
    this.serverCreated.emit({
      serverName: serverInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverInput: HTMLInputElement): void {
    this.blueprintCreated.emit({
      blueprintName: serverInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    });
  }

}
