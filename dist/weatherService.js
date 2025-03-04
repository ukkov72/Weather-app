"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = void 0;
const axios_1 = __importDefault(require("axios"));
const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
if (!API_KEY) {
    console.error('API key is missing.');
    process.exit(1);
}
const getWeather = (city) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(BASE_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric' // Use 'imperial' for Fahrenheit
            }
        });
        return response.data;
    }
    catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
});
exports.getWeather = getWeather;
