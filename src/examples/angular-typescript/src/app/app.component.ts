import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'

type Url = string

interface YesNoResponse {
  answer: 'yes' | 'no'
  forced: boolean
  image: Url
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-typescript'

  constructor(private readonly httpClient: HttpClient) {}

  async alert(_value: string) {
    const https = await this.httpClient.get<YesNoResponse>('https://yesno.wtf/api').toPromise()
    window.alert(https.answer)
  }
}
