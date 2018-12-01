import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string; name: string; content: string };
  //  'srvElement is an alias of the 'element' property which can be called outside.
  //   We've used it in the app component html file
  constructor() {}

  ngOnInit() {}
}
