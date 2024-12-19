import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true, // latest version will set this attribute to true - lower versions need this setting set to true
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
 })
export class HeaderComponent { }