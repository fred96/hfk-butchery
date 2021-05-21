import { Component } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HFK Butchery';

ngOnInit() {
                //Toggle Click Function
    $("#openSide").click(function(e) {
      e.preventDefault();
      $("#mySideNav").css("width","250px");
    });


    $("#closeSide").click(function(e) {
      e.preventDefault();
      $("#mySideNav").css("width","0px");
    });

    $("#page-content").click(function() {
      
      $("#mySideNav").css("width","0px");
    });
  }
  

/* Set the width of the side navigation to 250px */
//public  openNav(): any {

//	let SideNav = document.getElementById("mySidenav");
	//SideNav.setAttribute("style","width:250px;");

	//SideNav != null ? SideNav.style.width = "400px": alert('not working');
 
//}

/* Set the width of the side navigation to 0 */
//public closeNav(): any {


//	let  SideNav = document.getElementById("mySidenav");
  //    SideNav != null ? SideNav.style.width = "0px": alert('not working');
	
  
//}


}
