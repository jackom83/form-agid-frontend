import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as ENV } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IdentificaAmministrazioneService {
  constructor(private http: HttpClient) {}

  public getAmministrazioni(text: string) {
    return this.http.get(
      `${ENV.BACKEND_AMM}/3/action/datastore_search_sql?sql=SELECT * from "d09adf99-dc10-4349-8c53-27b1e5aa97b6" WHERE "Codice_IPA" LIKE '${text}%' OR "Denominazione_ente" LIKE '${text}% LIMIT 10'`
    );
  }

  public getCategorieEnti(text: string) {
    return this.http.get(
      `${ENV.BACKEND_AMM}/3/action/datastore_search_sql?sql=SELECT * from "84ebb2e7-0e61-427b-a1dd-ab8bb2a84f07" WHERE "Codice_categoria" LIKE '${text}%' LIMIT 10`
    );
  }

  public getRTD(text: string) {
    return this.http.get(
      `${ENV.BACKEND_AMM}/3/action/datastore_search_sql?sql=SELECT * from "41553dea-0701-429e-b906-8b71e441a281" WHERE "Codice_IPA" LIKE '${text}%' LIMIT 10`
    );
  }
}
