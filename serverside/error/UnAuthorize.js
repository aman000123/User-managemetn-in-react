
class UnAuthorise extends Error {

    constructor(message){
        super(message);
        this.statusCode = 401;
        this.message = message || "Unauthorise"
    }
}

module.exports = UnAuthorise;