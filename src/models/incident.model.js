class Incident {
    constructor() {
        this.id = id;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.type = ['red-flag', 'intervention'];
        this.location = [lat, long];
        this.status = ['draft', 'under investigation', 'resolved', 'rejected'];
        this.images = [];
        this.videos = [];
        this.comment = comment;
    }
}

module.exports = Incident;
