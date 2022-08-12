import Redis from "../utils/redis.js";

const locationController = {
    async addLocation(req, res, next) {
        try {
            const {
                long,
                lat,
                label
            } = req.body;

            const redis = Redis.getObject();
            redis.addLocation(long, lat, label)
            res.status(200).send({
                exitcode: 0,
                message: "Add successfully"
            })
        } catch (err) {
            next(err)
        }
    },

    async queryLocation(req, res, next) {
        try {
            const {
                long,
                lat,
                distance
            } = req.query;

            const redis = Redis.getObject();
            const result = await redis.queryLocation(long, lat, distance);
            res.status(200).send({
                exitcode: 0,
                message: "Query successfully",
                locations: result
            })
        } catch (err) {
            next(err)
        }
    }
}

export default locationController;