import { Component, OnInit } from '@angular/core';
import { NgxHmCarouselBreakPointUp } from 'ngx-hm-carousel';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  currentIndex = 0;
  speed = 5000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  // avatars = '1234567891234'.split('').map((x, i) => {
  //   const num = i;
  //   // const num = Math.floor(Math.random() * 1000);
  //   return {
  //     url: `https://picsum.photos/600/400/?${num}`,
  //     title: `${num}`
  //   };
  // });
  avatars = [
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/catering-485x375.jpg',
      title: '1'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/Religion-485x375.jpg',
      title: '2'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/Dinner-485x375.jpg',
      title: '3'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/Festivals-485x375.jpg',
      title: '4'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/wedding-485x375.jpg',
      title: '5'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/valima-485x375.jpg',
      title: '6'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/mehndi-485x375.jpg',
      title: '7'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/convocation-485x375.jpg',
      title: '8'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/LaunchingCeremony-485x375.jpg',
      title: '9'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/Exhibition-485x375.jpg',
      title: '10'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/Seminar-485x375.jpg',
      title: '11'
    },
    {
      url: 'http://qnfcargo.com/ahbaab1/wp-content/uploads/2017/10/videos-1-485x375.jpg',
      title: '12'
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
      number: 4
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
