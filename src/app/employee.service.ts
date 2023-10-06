import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";
import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.apiServerUrl}/employees`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.apiServerUrl}/employees`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.apiServerUrl}/employees`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}/employees/${employeeId}`);
  }


}
