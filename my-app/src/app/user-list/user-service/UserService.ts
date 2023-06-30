import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../@shared/models/user";

@Injectable({
    providedIn : "root"
})
export class UserService {

    private _url = 'http://localhost:3000/users';

    constructor(private http: HttpClient){}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this._url);
    }

    getUser(id: number) : Observable<User>{
        //return this.http.get<User>(this.ap1+'/${id}');
        const url = `${this._url}/${id}`;
        return this.http.get<User>(url);
    }

    saveUser(user: User): Observable<User> {
        return this.http.post<User>(this._url, user);
    }

    deleteUser(id: number) : Observable<User>{
        const url = `${this._url}/${id}`;
        return this.http.delete<User>(url);
    }

    updateUser(user: User) : Observable<User>{
        const url = `${this._url}/${user.id}`;
        return this.http.put<User>(url, user);
    }


}