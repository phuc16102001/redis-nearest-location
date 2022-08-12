import { Router } from "express";
import locationController from "../controller/location.controller";

const router = express.Router();
router.post('/', locationController.addLocation)
router.get('/', locationController.queryLocation)