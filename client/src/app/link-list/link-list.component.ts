import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Link } from '../link';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss'],
})
export class LinkListComponent implements OnInit {
  links: Link[] = [];
  urlControl = new FormControl('', [Validators.pattern(/.*\..*$/i)]);
  error = '';

  constructor(private linkService: LinkService) {}
  ngOnInit(): void {
    this.getLinks();
  }
  getLinks(): void {
    this.linkService.getLinks().subscribe((links) => {
      this.links = links;
    });
  }
  generateLink(): void {
    if (!this.urlControl.errors) {
      this.error = '';
      this.linkService.addLink(this.urlControl.value).subscribe((link) => {
        this.links.push(link);
      });
    } else {
      this.error = 'invalid url';
    }
  }
  getShort(url: string): void {
    this.linkService.getShort(url).subscribe((link) => {
      window.open(link.fullUrl, '_blank');
    });
  }
}
