import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('paragraphElement', {static: true}) paragraphElement: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
    console.log('Content' + this.header.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Content' + this.header.nativeElement.textContent);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Content' + this.header.nativeElement.textContent);
    console.log('Paragraph Content' + this.paragraphElement.nativeElement.textContent);
  }

  // when a bound property changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  // gets called whenever angular checks for any changes
  // ngDoCheck(): void {
  //   console.log('ngDoCheck called');
  // }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('Content' + this.header.nativeElement.textContent);
    console.log('Paragraph Content' + this.paragraphElement.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    console.log('Content' + this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }


}
