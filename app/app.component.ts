import { Component } from "@angular/core";


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent{
title:string = "Welcome to Synechron";
subTitle:string = "Core Development Centre,Pune";
changeMyTitle(): void{
    this.title="Welcome to HSBC";
}
}