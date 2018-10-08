import { Injectable } from '@angular/core';

@Injectable()
export class TestProvider {
    reasonToJoin() {
        return 'The Ionic Academy helps you learn everything Ionic!'
    }
}