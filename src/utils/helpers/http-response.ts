export interface HttpResponseFormat {
  statusCode: number,
  body: any
}

export class HttpResponse {
  badRequest(error: Error): HttpResponseFormat {
    const res: HttpResponseFormat = {
      statusCode: 400,
      body: {
        error: error.message
      }
    }
    return res
  }
}