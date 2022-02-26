import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NavList } from '../models/navigation.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  TREE_DATA: NavList[] = [
    {
      name: 'Title 1',
      children: [
        {
          name: 'Topic 1',
          url: '/',
        },
      ],
    },
    {
      name: 'Title 2',
      children: [
        {
          name: 'Topic 2',          
        },
        {
          name: 'Topic 3',          
        },
        {
          name: 'Topic 4',          
        },
      ]
    }
  ];

  constructor() {}

  nestedDataSource = new MatTreeNestedDataSource<NavList>();

  nestedTreeControl = new NestedTreeControl<NavList>((node) => node.children);

  ngOnInit(): void {
    this.nestedDataSource.data = this.TREE_DATA;
  }

  hasNestedChild(index: number, node: NavList) {
    return !!node.children && node.children.length > 0;
  }
}
