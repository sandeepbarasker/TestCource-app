import { Observable } from 'rxjs';
export interface IUxfAuthService {
    /**
    * userLoggedIn is an Observable, when true it indicates that a user has logged in,
    * when false it indicates that a user has logged out
    */
    userLoggedIn: Observable<boolean>;
    /**
    * login request
    * @param loginRequest object containing properties to be used as parameters for
    * the login function.
    */
    login(loginRequest: any): Observable<any>;
    /**
     *  @returns true if a user is currently logged in, false if not.
     */
    isLoggedIn(): boolean;
    /**
     * logout request
     * @param postData
     */
    logout(postData: any): any;
    /**
     * get the name of the currently logged in user
     * @returns  string name of the currently logged in user
     */
    getLoginName(): string;
    /**
     * get an Observable of the name of the currently logged in user
     * @returns  Observable<string> name of the currently logged in user
     */
    getLoginNameObservable(): Observable<string>;
    /**
     * is login required
     * @returns  boolean indicates if login is required
     */
    isLoginRequired(): boolean;
    /**
     * validate roles
     * @param validateRolesRequest object containing properties to be used as parameters for
     * the function.
     * @returns  Observable<any>
     */
    validateRoles(validateRolesRequest: any): Observable<any>;
}
