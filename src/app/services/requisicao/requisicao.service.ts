import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  private apiUrl: string = 'https://api.adoremus.com.br'
  // private apiUrl: string = 'http://localhost:2024'

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      )
  }

  post(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Erro ao executar a consulta'
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro: ${error.error.message}`
    } else {
      errorMessage = `Erro: ${error.message}`
    }
    return throwError({ erro: errorMessage })
  }
}