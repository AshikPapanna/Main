import {Component, OnInit} from '@angular/core'
import {ResetpasswordService} from './resetpassword.service'
@Component({
    templateUrl: './resetpassword.component.html',
    providers: [ResetpasswordService]
})


export class ResetPasswordComponent implements OnInit {
    constructor(private resetpasswordService:ResetpasswordService) {
    }
    ngOnInit() {
        this.resetpasswordService.getresetpassword().subscribe(
            user => { },
            err => { }
        )

    }
}