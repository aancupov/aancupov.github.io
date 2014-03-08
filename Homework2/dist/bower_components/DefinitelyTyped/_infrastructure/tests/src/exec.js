var DT;
(function (DT) {
    'use strict';

    var Promise = require('bluebird');
    var nodeExec = require('child_process').exec;

    var ExecResult = (function () {
        function ExecResult() {
            this.stdout = '';
            this.stderr = '';
        }
        return ExecResult;
    })();
    DT.ExecResult = ExecResult;

    function exec(filename, cmdLineArgs) {
        return new Promise(function (resolve) {
            var result = new ExecResult();
            result.exitCode = null;

            var cmdLine = filename + ' ' + cmdLineArgs.join(' ');

            nodeExec(cmdLine, { maxBuffer: 1 * 1024 * 1024 }, function (error, stdout, stderr) {
                result.error = error;
                result.stdout = stdout;
                result.stderr = stderr;
                result.exitCode = error ? error.code : 0;
                resolve(result);
            });
        });
    }
    DT.exec = exec;
})(DT || (DT = {}));
//# sourceMappingURL=exec.js.map
