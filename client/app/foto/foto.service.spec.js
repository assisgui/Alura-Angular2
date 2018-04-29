"use strict";
var testing_1 = require('@angular/core/testing');
var foto_service_1 = require('./foto.service');
describe('FotoService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [foto_service_1.FotoService]
        });
    });
    it('should be created', testing_1.inject([foto_service_1.FotoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=foto.service.spec.js.map