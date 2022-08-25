import { v4 } from 'uuid'

// função para gerar o id.

export class IdGenerator {
    generatorId() {
        return v4();
    }
}
