import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
@Injectable()
export default class ElasticService {
    constructor(private readonly elasticsearchService: ElasticsearchService) { }
    search(query: object): object {
        return this.elasticsearchService.search({
            index: 'movies',
            body: query
        });
    }
}