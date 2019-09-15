import { Component, OnInit } from '@angular/core';
import { NgxHmCarouselBreakPointUp } from 'ngx-hm-carousel';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  currentIndex = 0;
  speed = 5000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = [
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/catering-485x375.jpg',
      title: 'Catering',
      description: 'The ideal mix of delectable sustenance and imaginative thoughts makes Ahbaab Caterers and Decorators. Ahbaab...'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/Religion-485x375.jpg',
      title: 'Decoration',
      description: 'When it involves enhancement, we are getting the great well as preferred standpoint of keep...'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/Dinner-485x375.jpg',
      title: 'Rental Generator',
      description: 'We deal in diesel generators for rental premise from 2.5 KVa to 300 KVa for...'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/Festivals-485x375.jpg',
      title: 'Air Conditioning',
      description: 'Venturing with present day world we can’t prevent the critical from claiming Air Conditioning for...'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/wedding-485x375.jpg',
      title: 'Flower Stages',
      description: 'From shocking bloom curves and blossom dividers to fragile carefully assembled corsages and table centerpieces...'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/valima-485x375.jpg',
      title: 'Ring & Jewelry',
      description: 'Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s...'
    }
];

  breakpoint: NgxHmCarouselBreakPointUp[] = [
    {
      width: 500,
      number: 1
    },
    {
      width: 800,
      number: 3
    },
    {
      width: 1024,
      number: 3
    },
  ];

  constructor() { }

  ngOnInit() {
    console.log(' service on init');
  }

}
