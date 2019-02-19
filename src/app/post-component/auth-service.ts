/*
 * Copyright (c) 2017-2018 BMC Software, Inc. as an unpublished, licensed work.
 * The source code is a trade secret which is the property of BMC Software,
 * Inc.  All use, disclosure, and/or reproduction not specifically
 * authorized by BMC Software, Inc. is strictly prohibited.
 */

import { Injectable, Inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';



@Injectable()
export class AuthenticationService   {
    loggedIn = false;
    loginName = '';

    userLoggedIn: BehaviorSubject<boolean>;
    userNameSubject: BehaviorSubject<string>;


    constructor(
        private router: Router,
        injector: Injector
    ) {
     //   super(injector);

        this.userLoggedIn = new BehaviorSubject(this.loggedIn);
        this.userNameSubject = new BehaviorSubject(this.loginName);
    }

    /**
     * Performs the login to UIM. The login request if given is a simple object
     * instance with this format: {username:<user-name>, password:<password>}
     * It will be used to initialize the app server connection.
     * @param loginRequest optional login request
     */
    login(loginRequest: any = null): Observable<any> {
        if (loginRequest) {
          //  this.userName = loginRequest.username;
           // this.password = loginRequest.password;
        }
        return //super.uimLogin();
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    logout(postData: any): any {
        this.loggedIn = false;
        this.userLoggedIn.next(this.loggedIn);

        this.loginName = '';
        this.userNameSubject.next(this.loginName);

        // log off if an active session exists
      /*   if (this.hasToken) {
            super.uimLogout().subscribe(
                response => {
                    this.router.navigateByUrl('/login');
                    console.log('Logged out', response);
                }
            );
        } */
    }

    getLoginName(): string {
        return this.loginName;
    }

    getLoginNameObservable(): Observable<string> {
        return this.userNameSubject;
    }

    isLoginRequired(): boolean {
        return true;
    }

    validateRoles(validateRolesRequest: any): Observable<any> {
        return null;    // not used
    }

    // -----------------------------------------------------------------------
    // stuff tied to IWorkbenchAuthService, not IAuthService

    // Our login component calls these handlers from a subscription to the observable
    // returned by login() above. I don't really get why the code is divided between
    // the component and service this way.
    handleLoginSuccess(response: any) {
       // this.loggedIn = this.hasToken;
        this.userLoggedIn.next(this.loggedIn);

       // this.loginName = this.userName;
        this.userNameSubject.next(this.loginName);
        // localStorage.setItem('id_token', this.loginName);

        // reset tab service and route-to-home delayed 1/10 second
        // (comment had "end of queue" but that presumes that no longer timeouts are queued)
        setTimeout(() => {
            this.router.navigate(['/']);
        }, 100);
    }

    handleLoginFailure(error: any) {
        this.loggedIn = false;
        this.userLoggedIn.next(this.loggedIn);

        this.loginName = '';
        this.userNameSubject.next(this.loginName);
    }

    // -----------------------------------------------------------------------

}
