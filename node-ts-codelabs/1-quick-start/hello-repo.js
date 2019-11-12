var UserRepositoryMySQL = /** @class */ (function () {
    function UserRepositoryMySQL() {
        this.conn = "mysql";
    }
    UserRepositoryMySQL.prototype.create = function (fullName) {
        // TODO: Save to mysql
        return 1;
    };
    UserRepositoryMySQL.prototype.getConn = function () {
        return this.conn;
    };
    return UserRepositoryMySQL;
}());
var UserRepositoryPostgreSQL = /** @class */ (function () {
    function UserRepositoryPostgreSQL() {
        this.conn = "postgre";
    }
    UserRepositoryPostgreSQL.prototype.create = function (fullName) {
        // TODO: Save to mysql
        return 1;
    };
    UserRepositoryPostgreSQL.prototype.getConn = function () {
        return this.conn;
    };
    return UserRepositoryPostgreSQL;
}());
function createUser(repository, fullName) {
    // Create user
    var id = repository.create(fullName);
    var conn = repository.getConn();
    console.log("User with id " + id + " is stored in " + conn);
}
var repoMySQL = new UserRepositoryMySQL();
var repoPostgre = new UserRepositoryPostgreSQL();
createUser(repoMySQL, "saggaf");
createUser(repoPostgre, "saggaf");
