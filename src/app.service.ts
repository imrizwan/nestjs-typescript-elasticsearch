import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import ElasticService from "../utils"
@Injectable()
export class AppService {

  constructor(private readonly elasticService: ElasticsearchService) { }

  getHello(): object {

    return { message: 'Hello world!' };
  }
  search(): object {
    return this.elasticService.search({
      "query": {
        "match": { "firstname": "Jennifer" }
      }
    });
  }
}
